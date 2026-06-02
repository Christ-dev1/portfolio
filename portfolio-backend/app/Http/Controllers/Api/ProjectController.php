<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::whereNotNull('published_at')
            ->latest('published_at')
            ->get()
            ->map(fn (Project $project) => $this->formatProject($project));

        return response()->json($projects);
    }

    public function show(Project $project)
    {
        if (! $project->published_at) {
            abort(404);
        }

        return response()->json($this->formatProject($project));
    }

    private function formatProject(Project $project): array
    {
        return [
            'id' => $project->id,
            'title' => $project->title,
            'slug' => $project->slug,
            'description' => $project->description,
            'content' => $project->content,
            'image' => $project->image ? asset('storage/'.$project->image) : null,
            'github_url' => $project->github_url,
            'demo_url' => $project->demo_url,
            'technologies' => $project->technologiesList(),
            'is_featured' => $project->is_featured,
            'published_at' => $project->published_at?->toDateTimeString(),
        ];
    }
}
