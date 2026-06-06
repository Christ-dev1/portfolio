<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\JsonResponse;

class FormationController extends Controller
{
    public function index(): JsonResponse
    {
        $formations = Formation::orderBy('ordre', 'asc')->get();
        return response()->json($formations);
    }

    public function show(Formation $formation): JsonResponse
    {
        return response()->json($formation);
    }
}
