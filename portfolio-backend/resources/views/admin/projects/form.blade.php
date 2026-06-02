@csrf

<label for="title">Titre</label>
<input id="title" name="title" value="{{ old('title', $project->title ?? '') }}" required>
@error('title') <div class="error">{{ $message }}</div> @enderror

<label for="description">Description courte</label>
<textarea id="description" name="description" required>{{ old('description', $project->description ?? '') }}</textarea>
@error('description') <div class="error">{{ $message }}</div> @enderror

<label for="content">Description longue</label>
<textarea id="content" name="content">{{ old('content', $project->content ?? '') }}</textarea>
@error('content') <div class="error">{{ $message }}</div> @enderror

<label for="image">Image</label>
@if (isset($project) && $project->image)
    <div style="margin-bottom: 10px;">
        <img src="{{ asset('storage/'.$project->image) }}" alt="{{ $project->title }}" style="max-width: 220px; border-radius: 8px;">
    </div>
@endif
<input id="image" type="file" name="image" accept="image/*">
@error('image') <div class="error">{{ $message }}</div> @enderror

<label for="github_url">Lien GitHub</label>
<input id="github_url" name="github_url" value="{{ old('github_url', $project->github_url ?? '') }}">
@error('github_url') <div class="error">{{ $message }}</div> @enderror

<label for="demo_url">Lien demo</label>
<input id="demo_url" name="demo_url" value="{{ old('demo_url', $project->demo_url ?? '') }}">
@error('demo_url') <div class="error">{{ $message }}</div> @enderror

<label for="technologies">Technologies</label>
<input id="technologies" name="technologies" value="{{ old('technologies', $project->technologies ?? '') }}" placeholder="Laravel, Next.js, SQLite">
@error('technologies') <div class="error">{{ $message }}</div> @enderror

<label for="published_at">Date de publication</label>
<input id="published_at" type="datetime-local" name="published_at" value="{{ old('published_at', isset($project) && $project->published_at ? $project->published_at->format('Y-m-d\TH:i') : '') }}">
@error('published_at') <div class="error">{{ $message }}</div> @enderror

<label>
    <input type="checkbox" name="is_featured" value="1" style="width:auto" @checked(old('is_featured', $project->is_featured ?? false))>
    Mettre en avant
</label>

<div class="actions" style="margin-top: 18px;">
    <button class="button" type="submit">{{ $buttonText }}</button>
    <a class="button secondary" href="{{ route('admin.projects.index') }}">Retour</a>
</div>
