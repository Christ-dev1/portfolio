<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ContactMessageController extends Controller
{
    public function index(): View
    {
        $messages = ContactMessage::latest()->paginate(15);

        return view('admin.messages.index', compact('messages'));
    }

    public function show(ContactMessage $contactMessage): View
    {
        if (! $contactMessage->read_at) {
            $contactMessage->update(['read_at' => now()]);
        }

        return view('admin.messages.show', compact('contactMessage'));
    }

    public function markAsRead(ContactMessage $contactMessage): RedirectResponse
    {
        $contactMessage->update(['read_at' => now()]);

        return back()->with('success', 'Message marque comme lu.');
    }

    public function destroy(ContactMessage $contactMessage): RedirectResponse
    {
        $contactMessage->delete();

        return redirect()->route('admin.messages.index')->with('success', 'Message supprime.');
    }
}
