<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\ProjectSeeder;
use Database\Seeders\FormationSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
{
    $this->call([
        AdminSeeder::class,
        ProjectSeeder::class,
        FormationSeeder::class,
    ]);
}
}
