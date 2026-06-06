<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $projects = [
            ['title' => 'YOWL – Plateforme Collaborative', 'slug' => 'yowl-plateforme-collaborative', 'description' => 'Système de gestion de tâches avec génération d\'aperçus automatiques de diagrammes de Gantt.', 'technologies' => 'Laravel, MySQL, TailwindCSS, API REST', 'key_features' => 'Architecture backend robuste', 'is_featured' => 1, 'published_at' => now(), 'updated_at' => now()],
            ['title' => 'Post-It App', 'slug' => 'post-it-app', 'description' => 'Application moderne de gestion de notes avec intégration d\'API externe.', 'technologies' => 'Vue.js, API RESTful, TailwindCSS', 'key_features' => 'CRUD complet pour la gestion de notes', 'is_featured' => 1, 'published_at' => now(), 'updated_at' => now()],
            ['title' => 'Plateforme E-Commerce', 'slug' => 'plateforme-e-commerce', 'description' => 'Solution e-commerce complète avec gestion avancée des produits.', 'technologies' => 'PHP, MySQL, Laravel, JavaScript', 'key_features' => 'Système complet de gestion de catalogue', 'is_featured' => 1, 'published_at' => now(), 'updated_at' => now()],
            ['title' => 'ShowTime', 'slug' => 'showtime', 'description' => 'Plateforme de réservation de tickets d\'événements avec gestion en temps réel.', 'technologies' => 'Nest.js, Laravel, MongoDB, TailwindCSS', 'key_features' => 'Système de réservation en temps réel', 'is_featured' => 1, 'published_at' => now(), 'updated_at' => now()],
        ];

        foreach ($projects as $project) {
            DB::table('projects')->updateOrInsert(
                ['slug' => $project['slug']],
                $project
            );
        }
    }
}