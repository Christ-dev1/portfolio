@extends('layouts.admin')

@section('content')
<div class="container">
    <h1 class="mb-4">Ajouter une formation</h1>
    <form action="{{ route('admin.formations.store') }}" method="POST">
        @csrf
        @include('admin.formations.form')
        <button type="submit" class="btn btn-primary">Enregistrer</button>
        <a href="{{ route('admin.formations.index') }}" class="btn btn-secondary">Annuler</a>
    </form>
</div>
@endsection
