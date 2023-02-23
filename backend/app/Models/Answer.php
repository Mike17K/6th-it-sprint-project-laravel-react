<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Answer extends Model
{
    use HasFactory;
    public function ratings(): HasMany {
        return $this->hasMany(Rating::class);
    }

    public function application() {
        return $this->belongsTo(Application::class);
    }

    public function question() {
        return $this->belongsTo(Question::class);
    }
}
