@extends('layouts.admin', ['title' => 'Projets'])

@section('content')
    <div class="actions" style="justify-content: space-between;">
        <h1>Projets</h1>
        <a class="button" href="{{ route('admin.projects.create') }}">Ajouter un projet</a>
    </div>

    <table>
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
                    <td>{{ $project->published_at ? 'Publie' : 'Brouillon' }}</td>
                    <td>{{ $project->technologies }}</td>
                    <td>
                        <div class="actions">
                            <a href="{{ route('admin.projects.show', $project) }}">Voir</a>
                            <a href="{{ route('admin.projects.edit', $project) }}">Modifier</a>
                            <form method="POST" action="{{ route('admin.projects.destroy', $project) }}">
                                @csrf
                                @method('DELETE')
                                <button class="button danger" type="submit">Supprimer</button>
                            </form>
                        </div>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="4">Aucun projet ajoute.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

    <div style="margin-top: 16px;">{{ $projects->links() }}</div>
@endsection
