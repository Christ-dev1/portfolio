@extends('layouts.admin', ['title' => 'Message de '.$contactMessage->name])

@section('content')
    <div class="card">
        <h1>Message de {{ $contactMessage->name }}</h1>
        <p><strong>Email :</strong> {{ $contactMessage->email }}</p>
        <p><strong>Sujet :</strong> {{ $contactMessage->subject ?: 'Sans sujet' }}</p>
        <p><strong>Date :</strong> {{ $contactMessage->created_at->format('d/m/Y H:i') }}</p>
        <p><strong>Message :</strong></p>
        <p>{{ $contactMessage->message }}</p>
        <div class="actions">
            <a class="button secondary" href="{{ route('admin.messages.index') }}">Retour</a>
            <form method="POST" action="{{ route('admin.messages.destroy', $contactMessage) }}">
                @csrf
                @method('DELETE')
                <button class="button danger" type="submit">Supprimer</button>
            </form>
        </div>
    </div>
@endsection
