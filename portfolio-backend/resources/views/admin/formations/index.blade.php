@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Formations</h1>
        <a href="{{ route('admin.formations.create') }}" class="btn btn-primary">+ Ajouter</a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Titre</th>
                <th>Établissement</th>
                <th>Diplôme</th>
                <th>Période</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @forelse($formations as $formation)
            <tr>
                <td>{{ $formation->titre }}</td>
                <td>{{ $formation->etablissement }}</td>
                <td>{{ $formation->diplome ?? '—' }}</td>
                <td>
                    {{ $formation->date_debut->format('M Y') }} —
                    {{ $formation->en_cours ? 'En cours' : ($formation->date_fin?->format('M Y') ?? '—') }}
                </td>
                <td>
                    <a href="{{ route('admin.formations.edit', $formation) }}" class="btn btn-sm btn-warning">Modifier</a>
                    <form action="{{ route('admin.formations.destroy', $formation) }}" method="POST" class="d-inline"
                          onsubmit="return confirm('Supprimer ?')">
                        @csrf @method('DELETE')
                        <button class="btn btn-sm btn-danger">Supprimer</button>
                    </form>
                </td>
            </tr>
            @empty
            <tr><td colspan="5" class="text-center">Aucune formation.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
