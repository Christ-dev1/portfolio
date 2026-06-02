@extends('layouts.admin', ['title' => 'Connexion admin'])

@section('content')
    <div class="card" style="max-width: 420px; margin: 60px auto;">
        <h1>Connexion admin</h1>
        <form method="POST" action="{{ route('login.store') }}">
            @csrf
            <label for="email">Email</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required>
            @error('email')
                <div class="error">{{ $message }}</div>
            @enderror

            <label for="password">Mot de passe</label>
            <input id="password" type="password" name="password" required>
            @error('password')
                <div class="error">{{ $message }}</div>
            @enderror

            <button class="button" type="submit" style="margin-top: 16px;">Se connecter</button>
        </form>
        <p class="muted">Compte de depart : admin@example.com / password</p>
    </div>
@endsection
