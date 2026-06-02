@extends('layouts.admin', ['title' => $project->title])

@section('content')
    <div class="card">
        <div class="actions" style="justify-content: space-between;">
            <h1>{{ $project->title }}</h1>
            <a class="button" href="{{ route('admin.projects.edit', $project) }}">Modifier</a>
        </div>
        @if ($project->image)
            <img src="{{ asset('storage/'.$project->image) }}" alt="{{ $project->title }}" style="max-width: 360px; width: 100%; border-radius: 8px;">
        @endif
        <p>{{ $project->description }}</p>
        <p>{{ $project->content }}</p>
        <p><strong>Slug :</strong> {{ $project->slug }}</p>
        <p><strong>Technologies :</strong> {{ $project->technologies }}</p>
        <p><strong>GitHub :</strong> {{ $project->github_url ?: 'Non renseigne' }}</p>
        <p><strong>Demo :</strong> {{ $project->demo_url ?: 'Non renseigne' }}</p>
        <p><strong>Statut :</strong> {{ $project->published_at ? 'Publie' : 'Brouillon' }}</p>
        <a class="button secondary" href="{{ route('admin.projects.index') }}">Retour</a>
    </div>
@endsection
