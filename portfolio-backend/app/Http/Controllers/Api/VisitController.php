<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteVisit;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'page_url' => ['required', 'string', 'max:255'],
            'referrer' => ['nullable', 'string', 'max:255'],
        ]);

        SiteVisit::create([
            ...$data,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'visited_at' => now(),
        ]);

        return response()->json([
            'message' => 'Visite enregistree.',
        ], 201);
    }
}
