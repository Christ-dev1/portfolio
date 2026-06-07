<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => ['required', 'string', 'max:255'],
            'email'   => ['required', 'email', 'max:255'],
            'subject' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'min:5'],
        ]);

        $message = ContactMessage::create([
            ...$data,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        try {
            Mail::to(env('ADMIN_EMAIL', 'admin@example.com'))
                ->send(new ContactMessageMail($message));
        } catch (\Exception $e) {
            Log::error('Mail error: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Votre message a été envoyé avec succès.',
        ], 201);
    }
}