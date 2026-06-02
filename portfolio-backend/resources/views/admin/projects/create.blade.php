@extends('layouts.admin', ['title' => 'Ajouter un projet'])

@section('content')
    <div class="card">
        <h1>Ajouter un projet</h1>
        <form method="POST" action="{{ route('admin.projects.store') }}" enctype="multipart/form-data">
            @include('admin.projects.form', ['buttonText' => 'Ajouter'])
        </form>
    </div>
@endsection
