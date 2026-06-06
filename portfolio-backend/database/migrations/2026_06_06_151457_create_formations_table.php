<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('etablissement');
            $table->string('lieu')->nullable();
            $table->date('date_debut');
            $table->date('date_fin')->nullable();
            $table->boolean('en_cours')->default(false);
            $table->text('description')->nullable();
            $table->string('diplome')->nullable();
            $table->string('lien')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('formations');
    }
};
