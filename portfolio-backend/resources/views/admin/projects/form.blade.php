@csrf

<div style="display: flex; flex-direction: column; gap: 14px;">

    {{-- Titre --}}
    <div>
        <label for="title">Titre</label>
        <input id="title" name="title"
               value="{{ old('title', $project->title ?? '') }}" required>
        @error('title') <div class="error">{{ $message }}</div> @enderror
    </div>

    {{-- Description --}}
    <div>
        <label for="description">Description courte</label>
        <textarea id="description" name="description" required>
            {{ old('description', $project->description ?? '') }}
        </textarea>
        @error('description') <div class="error">{{ $message }}</div> @enderror
    </div>

    {{-- Image --}}
    <div>
        <label for="image">Image</label>

        @if (isset($project) && $project->image)
            <img src="{{ asset('storage/'.$project->image) }}"
                 alt="{{ $project->title }}"
                 style="max-width: 180px; border-radius: 8px; display:block; margin-bottom:10px;">
        @endif

        <input id="image" type="file" name="image" accept="image/*">
        @error('image') <div class="error">{{ $message }}</div> @enderror
    </div>

    {{-- GitHub + Demo RESPONSIVE --}}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
            <label for="github_url">GitHub</label>
            <input id="github_url" name="github_url" type="url"
                   value="{{ old('github_url', $project->github_url ?? '') }}">
            @error('github_url') <div class="error">{{ $message }}</div> @enderror
        </div>

        <div>
            <label for="demo_url">Démo</label>
            <input id="demo_url" name="demo_url" type="url"
                   value="{{ old('demo_url', $project->demo_url ?? '') }}">
            @error('demo_url') <div class="error">{{ $message }}</div> @enderror
        </div>
    </div>

    {{-- Technologies --}}
    <div>
        <label for="technologies">Technologies</label>
        <input id="technologies" name="technologies"
               value="{{ old('technologies', $project->technologies ?? '') }}">
        @error('technologies') <div class="error">{{ $message }}</div> @enderror
    </div>

    {{-- Features --}}
    <div>
        <label for="key_features">Fonctionnalités clés</label>
        <textarea id="key_features" name="key_features" rows="5">
            {{ old('key_features', $project->key_features ?? '') }}
        </textarea>
        <small>Une fonctionnalité par ligne</small>
        @error('key_features') <div class="error">{{ $message }}</div> @enderror
    </div>

    {{-- ACTIONS --}}
    <div class="actions" style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="button" type="submit">{{ $buttonText }}</button>
        <a class="button secondary" href="{{ route('admin.projects.index') }}">Retour</a>
    </div>

</div>
