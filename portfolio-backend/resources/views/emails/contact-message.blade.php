<h1>Nouveau message depuis le portfolio</h1>

<p><strong>Nom :</strong> {{ $contactMessage->name }}</p>
<p><strong>Email :</strong> {{ $contactMessage->email }}</p>
<p><strong>Sujet :</strong> {{ $contactMessage->subject ?: 'Sans sujet' }}</p>
<p><strong>Message :</strong></p>
<p>{{ $contactMessage->message }}</p>
