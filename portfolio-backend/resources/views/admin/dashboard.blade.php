@extends('layouts.admin', ['title' => 'Dashboard'])

@section('content')
    <h1>Dashboard</h1>

    <div class="grid">
        <div class="card"><span>Projets</span><div class="stat">{{ $stats['projects'] }}</div></div>
        <div class="card"><span>Projets publies</span><div class="stat">{{ $stats['publishedProjects'] }}</div></div>
        <div class="card"><span>Projets en avant</span><div class="stat">{{ $stats['featuredProjects'] }}</div></div>
        <div class="card"><span>Messages</span><div class="stat">{{ $stats['messages'] }}</div></div>
        <div class="card"><span>Messages non lus</span><div class="stat">{{ $stats['unreadMessages'] }}</div></div>
        <div class="card"><span>Visites</span><div class="stat">{{ $stats['visits'] }}</div></div>
        <div class="card"><span>Visites aujourd'hui</span><div class="stat">{{ $stats['visitsToday'] }}</div></div>
    </div>

    <div class="grid" style="margin-top: 22px;">
        <div class="card">
            <h2>Derniers messages</h2>
            @forelse ($latestMessages as $message)
                <p>
                    <a href="{{ route('admin.messages.show', $message) }}">{{ $message->name }}</a>
                    <span class="muted">{{ $message->created_at->format('d/m/Y H:i') }}</span>
                </p>
            @empty
                <p class="muted">Aucun message pour le moment.</p>
            @endforelse
        </div>
        <div class="card">
            <h2>Pages les plus vues</h2>
            @forelse ($topPages as $page)
                <p>{{ $page->page_url }} <strong>{{ $page->visits_count }}</strong></p>
            @empty
                <p class="muted">Aucune visite enregistree.</p>
            @endforelse
        </div>
    </div>
@endsection
