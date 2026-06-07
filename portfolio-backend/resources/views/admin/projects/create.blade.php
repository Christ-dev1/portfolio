@extends('layouts.admin', ['title' => 'Ajouter un projet'])

@section('content')
    <div class="card" style="
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        padding: 16px;
        box-sizing: border-box;
    ">
        <h1 style="margin-bottom: 16px;">Ajouter un projet</h1>

        <form method="POST"
              action="{{ route('admin.projects.store') }}"
              enctype="multipart/form-data">

            @csrf

            @include('admin.projects.form', ['buttonText' => 'Ajouter'])

        </form>
    </div>
@endsection
