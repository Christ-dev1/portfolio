<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'slug',
    'description',
    'content',
    'image',
    'github_url',
    'demo_url',
    'technologies',
    'is_featured',
    'published_at',
])]
class Project extends Model
{
    protected function casts(): array
    {
        return [
            'is_featured' => 'boolean',
            'published_at' => 'datetime',
        ];
    }

    public function technologiesList(): array
    {
        if (! $this->technologies) {
            return [];
        }

        return collect(explode(',', $this->technologies))
            ->map(fn (string $technology) => trim($technology))
            ->filter()
            ->values()
            ->all();
    }
}
