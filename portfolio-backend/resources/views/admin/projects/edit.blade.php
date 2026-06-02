@extends('layouts.admin', ['title' => 'Modifier un projet'])

@section('content')
    <div class="card">
        <h1>Modifier un projet</h1>
        <form method="POST" action="{{ route('admin.projects.update', $project) }}" enctype="multipart/form-data">
            @method('PUT')
            @include('admin.projects.form', ['buttonText' => 'Modifier'])
        </form>
    </div>
@endsection
