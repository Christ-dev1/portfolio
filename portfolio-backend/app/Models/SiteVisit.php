<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'page_url',
    'referrer',
    'ip_address',
    'user_agent',
    'visited_at',
])]
class SiteVisit extends Model
{
    protected function casts(): array
    {
        return [
            'visited_at' => 'datetime',
        ];
    }
}
