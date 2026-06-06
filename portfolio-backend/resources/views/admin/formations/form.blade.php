<div class="mb-3">
    <label class="form-label">Titre *</label>
    <input type="text" name="titre" class="form-control @error('titre') is-invalid @enderror"
           value="{{ old('titre', $formation->titre ?? '') }}" required>
    @error('titre')<div class="invalid-feedback">{{ $message }}</div>@enderror
</div>

<div class="mb-3">
    <label class="form-label">Établissement *</label>
    <input type="text" name="etablissement" class="form-control @error('etablissement') is-invalid @enderror"
           value="{{ old('etablissement', $formation->etablissement ?? '') }}" required>
    @error('etablissement')<div class="invalid-feedback">{{ $message }}</div>@enderror
</div>

<div class="row">
    <div class="col mb-3">
        <label class="form-label">Lieu</label>
        <input type="text" name="lieu" class="form-control"
               value="{{ old('lieu', $formation->lieu ?? '') }}">
    </div>
    <div class="col mb-3">
        <label class="form-label">Diplôme</label>
        <input type="text" name="diplome" class="form-control"
               value="{{ old('diplome', $formation->diplome ?? '') }}">
    </div>
</div>

<div class="row">
    <div class="col mb-3">
        <label class="form-label">Date début *</label>
        <input type="date" name="date_debut" class="form-control @error('date_debut') is-invalid @enderror"
               value="{{ old('date_debut', isset($formation) ? $formation->date_debut->format('Y-m-d') : '') }}" required>
        @error('date_debut')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>
    <div class="col mb-3">
        <label class="form-label">Date fin</label>
        <input type="date" name="date_fin" class="form-control"
               value="{{ old('date_fin', isset($formation) && $formation->date_fin ? $formation->date_fin->format('Y-m-d') : '') }}">
    </div>
</div>

<div class="mb-3 form-check">
    <input type="checkbox" name="en_cours" id="en_cours" class="form-check-input" value="1"
           {{ old('en_cours', $formation->en_cours ?? false) ? 'checked' : '' }}>
    <label class="form-check-label" for="en_cours">En cours</label>
</div>

<div class="mb-3">
    <label class="form-label">Description</label>
    <textarea name="description" class="form-control" rows="4">{{ old('description', $formation->description ?? '') }}</textarea>
</div>

<div class="mb-3">
    <label class="form-label">Lien</label>
    <input type="url" name="lien" class="form-control"
           value="{{ old('lien', $formation->lien ?? '') }}">
</div>
