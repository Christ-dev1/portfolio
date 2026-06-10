<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\JsonResponse;

class FormationController extends Controller
{
    public function index(): JsonResponse
{
    $formations = Formation::orderBy('ordre', 'asc')->get()->map(function ($f) {
        return [
            ...$f->toArray(),
            'date_debut' => $f->date_debut?->format('Y-m-d'),
            'date_fin'   => $f->date_fin?->format('Y-m-d'),
        ];
    });
    return response()->json($formations);
}
    public function show(Formation $formation): JsonResponse
    {
        return response()->json($formation);
    }
}
