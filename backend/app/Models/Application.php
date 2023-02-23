<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Application extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function event() {
        return $this->belongsTo(Event::class);
    }

    public function answers(): HasMany {
        return $this->hasMany(Answer::class);
    }
}
