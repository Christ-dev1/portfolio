@csrf

{{-- Titre --}}
<label for="title">Titre</label>
<input id="title" name="title" value="{{ old('title', $project->title ?? '') }}" required>
@error('title') <div class="error">{{ $message }}</div> @enderror

{{-- Description courte --}}
<label for="description">Description courte</label>
<textarea id="description" name="description" required>{{ old('description', $project->description ?? '') }}</textarea>
@error('description') <div class="error">{{ $message }}</div> @enderror

{{-- Image --}}
<label for="image">Image</label>
@if (isset($project) && $project->image)
    <img src="{{ asset('storage/'.$project->image) }}" alt="{{ $project->title }}" style="max-width: 220px; border-radius: 8px;">
@endif
<input id="image" type="file" name="image" accept="image/*">
@error('image') <div class="error">{{ $message }}</div> @enderror

{{-- GitHub --}}
<label for="github_url">Lien GitHub</label>
<input id="github_url" name="github_url" type="url"
    value="{{ old('github_url', $project->github_url ?? '') }}">
@error('github_url') <div class="error">{{ $message }}</div> @enderror

{{-- Demo --}}
<label for="demo_url">Lien Démo</label>
<input id="demo_url" name="demo_url" type="url"
    value="{{ old('demo_url', $project->demo_url ?? '') }}">
@error('demo_url') <div class="error">{{ $message }}</div> @enderror

{{-- Technologies --}}
<label for="technologies">Technologies</label>
<input id="technologies" name="technologies"
    value="{{ old('technologies', $project->technologies ?? '') }}">
@error('technologies') <div class="error">{{ $message }}</div> @enderror

{{-- Features --}}
<label for="key_features">Fonctionnalités clés</label>
<textarea id="key_features" name="key_features" rows="5">
{{ old('key_features', $project->key_features ?? '') }}
</textarea>
@error('key_features') <div class="error">{{ $message }}</div> @enderror

<div class="actions">
    <button class="button" type="submit">{{ $buttonText }}</button>
    <a class="button secondary" href="{{ route('admin.projects.index') }}">Retour</a>
</div>
