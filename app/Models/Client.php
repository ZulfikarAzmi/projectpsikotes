<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['kode', 'status'];

    // Tambahkan ini jika primary key bukan 'id'
    protected $primaryKey = 'id_client';

    // Jika primary key bukan auto-incrementing integer, tambahkan ini
    public $incrementing = true;
    protected $keyType = 'int';
}
