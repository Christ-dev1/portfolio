@extends('layouts.admin', ['title' => $project->title])

@section('content')

<div class="card" style="
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
">

    {{-- En-tête --}}
    <div class="actions" style="
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
    ">
        <h1 style="margin: 0;">{{ $project->title }}</h1>

        <a class="button" href="{{ route('admin.projects.edit', $project) }}">
            Modifier
        </a>
    </div>

    {{-- Image --}}
    @if ($project->image)
        <div style="display: flex; justify-content: center; margin: 16px 0;">
            <img src="{{ asset('storage/'.$project->image) }}"
                 alt="{{ $project->title }}"
                 style="
                    max-width: 100%;
                    width: 360px;
                    height: auto;
                    border-radius: 8px;
                 ">
        </div>
    @endif

    {{-- Infos --}}
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">

        <p>{{ $project->description }}</p>

        <p style="word-break: break-word;">{{ $project->content }}</p>

        <p><strong>Slug :</strong> {{ $project->slug }}</p>

        <p style="word-break: break-word;">
            <strong>Technologies :</strong> {{ $project->technologies }}
        </p>

        <p style="word-break: break-word;">
            <strong>GitHub :</strong>
            {{ $project->github_url ?: 'Non renseigné' }}
        </p>

        <p style="word-break: break-word;">
            <strong>Demo :</strong>
            {{ $project->demo_url ?: 'Non renseigné' }}
        </p>

        <p>
            <strong>Statut :</strong>
            @if ($project->published_at)
                <span style="color: green;">
                    ✅ Publié le {{ $project->published_at->format('d/m/Y') }}
                </span>
            @else
                <span style="color: orange;">⏳ Brouillon</span>
            @endif
        </p>

    </div>

    {{-- Actions --}}
    <div class="actions" style="
        margin-top: 18px;
        gap: 10px;
        flex-wrap: wrap;
    ">
        <a class="button secondary" href="{{ route('admin.projects.index') }}">
            Retour
        </a>

        @if (!$project->published_at)
            <form action="{{ route('admin.projects.publish', $project) }}"
                  method="POST"
                  style="display:inline">
                @csrf
                @method('PATCH')

                <button type="submit" class="button">
                    Publier
                </button>
            </form>
        @else
            <form action="{{ route('admin.projects.unpublish', $project) }}"
                  method="POST"
                  style="display:inline">
                @csrf
                @method('PATCH')

                <button type="submit"
                        class="button"
                        style="background:#e53e3e;">
                    Dépublier
                </button>
            </form>
        @endif
    </div>

</div>

@endsection
