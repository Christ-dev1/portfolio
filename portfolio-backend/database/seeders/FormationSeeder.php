<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormationSeeder extends Seeder
{
    public function run()
    {
        $formations = [
            ['ordre' => 1, 'titre' => 'Développement Full Stack', 'etablissement' => 'Programme WECODE', 'lieu' => 'Abidjan', 'date_debut' => '2026-01-12', 'en_cours' => 1, 'description' => 'Formation intensive en développement web moderne avec Laravel, Vue.js, React et méthodologie Agile', 'updated_at' => now()],
            ['ordre' => 2, 'titre' => 'Licence 2', 'etablissement' => 'Université Virtuelle de Côte d\'Ivoire', 'lieu' => 'Abidjan', 'date_debut' => '2026-02-10', 'en_cours' => 1, 'description' => 'Cursus universitaire en cours', 'diplome' => 'DAS', 'updated_at' => now()],
            ['ordre' => 3, 'titre' => 'Licence 1', 'etablissement' => 'Université Virtuelle de Côte d\'Ivoire', 'lieu' => 'Abidjan', 'date_debut' => '2026-01-13', 'en_cours' => 1, 'description' => 'Cursus universitaire en cours', 'diplome' => 'DAS', 'updated_at' => now()],
            ['ordre' => 4, 'titre' => 'Baccalauréat série D', 'etablissement' => 'Lycée Moderne de Port Bouet', 'lieu' => 'Abidjan', 'date_debut' => '2026-01-13', 'en_cours' => 1, 'description' => 'Diplôme d\'études secondaires - Sciences et Mathématiques', 'updated_at' => now()],
        ];

        foreach ($formations as $formation) {
            DB::table('formations')->updateOrInsert(
                ['titre' => $formation['titre'], 'etablissement' => $formation['etablissement']],
                $formation
            );
        }
    }
}