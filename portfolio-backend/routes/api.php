<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\VisitController;
use Illuminate\Support\Facades\Route;

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project:slug}', [ProjectController::class, 'show']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/visits', [VisitController::class, 'store'])->middleware('throttle:30,1');
Route::get('/projects', function () {
    return \App\Models\Project::whereNotNull('published_at')
        ->latest('published_at')
        ->get();
});
