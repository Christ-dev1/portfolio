@extends('layouts.admin', ['title' => $project->title])
@section('content')

<div class="card">

    {{-- En-tête --}}
    <div class="actions" style="justify-content: space-between;">
        <h1>{{ $project->title }}</h1>
        <a class="button" href="{{ route('admin.projects.edit', $project) }}">Modifier</a>
    </div>

    {{-- Image --}}
    @if ($project->image)
        <img src="{{ asset('storage/'.$project->image) }}"
             alt="{{ $project->title }}"
             style="max-width: 360px; width: 100%; border-radius: 8px; margin: 12px 0;">
    @endif

    {{-- Infos --}}
    <p>{{ $project->description }}</p>
    <p>{{ $project->content }}</p>
    <p><strong>Slug :</strong> {{ $project->slug }}</p>
    <p><strong>Technologies :</strong> {{ $project->technologies }}</p>
    <p><strong>GitHub :</strong> {{ $project->github_url ?: 'Non renseigné' }}</p>
    <p><strong>Demo :</strong> {{ $project->demo_url ?: 'Non renseigné' }}</p>
    <p><strong>Statut :</strong>
        @if ($project->published_at)
            <span style="color: green;">✅ Publié le {{ $project->published_at->format('d/m/Y') }}</span>
        @else
            <span style="color: orange;">⏳ Brouillon</span>
        @endif
    </p>

    {{-- Actions --}}
    <div class="actions" style="margin-top: 18px; gap: 10px;">
        <a class="button secondary" href="{{ route('admin.projects.index') }}">Retour</a>

        @if (!$project->published_at)
            <form action="{{ route('admin.projects.publish', $project) }}" method="POST" style="display:inline">
                @csrf
                @method('PATCH')
                <button type="submit" class="button">✅ Publier</button>
            </form>
        @else
            <form action="{{ route('admin.projects.unpublish', $project) }}" method="POST" style="display:inline">
                @csrf
                @method('PATCH')
                <button type="submit" class="button" style="background:#e53e3e;">🚫 Dépublier</button>
            </form>
        @endif
    </div>

</div>

@endsection
