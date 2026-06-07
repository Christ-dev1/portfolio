@extends('layouts.admin', ['title' => 'Messages'])

@section('content')
    <h1>Messages</h1>

    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; min-width: 700px;">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Sujet</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @forelse ($messages as $message)
                    <tr>
                        <td>{{ $message->name }}</td>
                        <td>{{ $message->email }}</td>
                        <td>{{ $message->subject ?: 'Sans sujet' }}</td>
                        <td>{{ $message->read_at ? 'Lu' : 'Non lu' }}</td>
                        <td>{{ $message->created_at->format('d/m/Y H:i') }}</td>
                        <td>
                            <div class="actions">
                                <a href="{{ route('admin.messages.show', $message) }}">Lire</a>

                                <form method="POST" action="{{ route('admin.messages.destroy', $message) }}">
                                    @csrf
                                    @method('DELETE')
                                    <button class="button danger" type="submit">Supprimer</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6">Aucun message reçu.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div style="margin-top: 16px;">
        {{ $messages->links() }}
    </div>
@endsection
