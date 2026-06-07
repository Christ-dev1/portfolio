@extends('layouts.admin', ['title' => 'Message de '.$contactMessage->name])

@section('content')
    <div class="card" style="max-width: 800px; margin: auto; padding: 16px;">

        <h1 style="margin-bottom: 12px;">
            Message de {{ $contactMessage->name }}
        </h1>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">

            <p><strong>Email :</strong> {{ $contactMessage->email }}</p>

            <p><strong>Sujet :</strong> {{ $contactMessage->subject ?: 'Sans sujet' }}</p>

            <p><strong>Date :</strong> {{ $contactMessage->created_at->format('d/m/Y H:i') }}</p>

        </div>

        <hr style="margin: 16px 0;">

        <p style="font-weight: bold; margin-bottom: 8px;">Message :</p>

        <div style="
            background: #f9f9f9;
            padding: 12px;
            border-radius: 8px;
            white-space: pre-line;
            line-height: 1.5;
            font-size: 14px;
        ">
            {{ $contactMessage->message }}
        </div>

        <div class="actions"
             style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">

            <a class="button secondary"
               href="{{ route('admin.messages.index') }}">
                Retour
            </a>

            <form method="POST"
                  action="{{ route('admin.messages.destroy', $contactMessage) }}">
                @csrf
                @method('DELETE')

                <button class="button danger" type="submit">
                    Supprimer
                </button>
            </form>

        </div>

    </div>
@endsection
