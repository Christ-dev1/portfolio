<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class FormationController extends Controller
{
    public function index(): View
    {
        $formations = Formation::orderBy('date_debut', 'desc')->get();
        return view('admin.formations.index', compact('formations'));
    }

    public function create(): View
    {
        return view('admin.formations.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'titre'         => 'required|string|max:255',
            'etablissement' => 'required|string|max:255',
            'lieu'          => 'nullable|string|max:255',
            'date_debut'    => 'required|date',
            'date_fin'      => 'nullable|date|after_or_equal:date_debut',
            'en_cours'      => 'boolean',
            'description'   => 'nullable|string',
            'diplome'       => 'nullable|string|max:255',
            'lien'          => 'nullable|url|max:255',
        ]);
        
        $data['en_cours'] = !empty($data['date_fin']) ? false : $request->boolean('en_cours');
        Formation::create($data);
        return redirect()->route('admin.formations.index')->with('success', 'Formation ajoutée.');
    }

    public function edit(Formation $formation): View
    {
        return view('admin.formations.edit', compact('formation'));
    }

    public function update(Request $request, Formation $formation): RedirectResponse
    {
        $data = $request->validate([
            'titre'         => 'required|string|max:255',
            'etablissement' => 'required|string|max:255',
            'lieu'          => 'nullable|string|max:255',
            'date_debut'    => 'required|date',
            'date_fin'      => 'nullable|date|after_or_equal:date_debut',
            'en_cours'      => 'boolean',
            'description'   => 'nullable|string',
            'diplome'       => 'nullable|string|max:255',
            'lien'          => 'nullable|url|max:255',
        ]);
        $data['en_cours'] = !empty($data['date_fin']) ? false : $request->boolean('en_cours');
        $formation->update($data);
        return redirect()->route('admin.formations.index')->with('success', 'Formation mise à jour.');
    }

    public function destroy(Formation $formation): RedirectResponse
    {
        $formation->delete();
        return redirect()->route('admin.formations.index')->with('success', 'Formation supprimée.');
    }
}
