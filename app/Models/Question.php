<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id', 'question_text', 'question_image', 'answer_image'
    ];

    // Relationship with Subject
    public function subject()
    {
        return $this->belongsTo(Subject::class,'subject_id');
    }
}
