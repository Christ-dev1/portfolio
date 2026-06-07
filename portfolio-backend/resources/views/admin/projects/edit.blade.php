@extends('layouts.admin', ['title' => 'Modifier un projet'])

@section('content')
    <div class="card" style="
        max-width: 100%;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 16px;
        box-sizing: border-box;
    ">
        <h1 style="margin-bottom: 16px;">Modifier un projet</h1>

        <form method="POST"
              action="{{ route('admin.projects.update', $project) }}"
              enctype="multipart/form-data">

            @csrf
            @method('PUT')

            @include('admin.projects.form', ['buttonText' => 'Modifier'])

        </form>
    </div>
@endsection
