<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\PenggunaController;

Route::post('/check-code', [CodeController::class, 'checkCode']);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/create-code', [ClientController::class, 'store'])->name('create.code');

Route::get('/input-data-diri', function () {
    return view('input-data-diri');
});

Route::post('/pengguna/store', [PenggunaController::class, 'store']);

require __DIR__.'/auth.php';
