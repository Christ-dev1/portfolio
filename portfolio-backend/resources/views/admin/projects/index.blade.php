@extends('layouts.admin', ['title' => 'Projets'])

@section('content')
    <div class="actions" style="justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <h1>Projets</h1>
        <a class="button" href="{{ route('admin.projects.create') }}">
            Ajouter un projet
        </a>
    </div>

    {{-- RESPONSIVE WRAPPER --}}
    <div style="overflow-x: auto;">
        <table style="min-width: 700px; width: 100%;">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Technologies</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @forelse ($projects as $project)
                    <tr>
                        <td>{{ $project->title }}</td>

                        <td>
                            {{ $project->published_at ? 'Publié' : 'Brouillon' }}
                        </td>

                        <td>
                            {{-- évite overflow long texte --}}
                            <span style="display: inline-block; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                {{ $project->technologies }}
                            </span>
                        </td>

                        <td>
                            <div class="actions" style="flex-wrap: wrap; gap: 6px;">
                                <a href="{{ route('admin.projects.show', $project) }}">Voir</a>
                                <a href="{{ route('admin.projects.edit', $project) }}">Modifier</a>

                                <form method="POST"
                                      action="{{ route('admin.projects.destroy', $project) }}">
                                    @csrf
                                    @method('DELETE')

                                    <button class="button danger" type="submit">
                                        Supprimer
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="4">Aucun projet ajouté.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div style="margin-top: 16px;">
        {{ $projects->links() }}
    </div>
@endsection
