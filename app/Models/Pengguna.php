<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengguna extends Model
{
    use HasFactory;

    protected $table = 'pengguna'; // Pastikan nama tabel sesuai
    protected $fillable = ['name', 'description', 'institution', 'exam_date'];
}
