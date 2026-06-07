@extends('layouts.admin')

@section('content')
<div class="container">
    <h1 class="mb-4">Modifier la formation</h1>

    <form action="{{ route('admin.formations.update', $formation) }}" method="POST">
        @csrf
        @method('PUT')

        @include('admin.formations.form')

        <button type="submit" class="btn btn-warning">Mettre à jour</button>
        <a href="{{ route('admin.formations.index') }}" class="btn btn-secondary">Annuler</a>
    </form>
</div>
@endsection
