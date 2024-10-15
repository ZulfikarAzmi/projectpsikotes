<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $table = 'subjects';

    protected $fillable = [
        'subject_name',
        'timer_hours',
        'timer_minutes',
        'timer_seconds',
    ];

    // app/Models/Subject.php
 public function questions()
 {
     return $this->hasMany(Question::class);
 }


}
