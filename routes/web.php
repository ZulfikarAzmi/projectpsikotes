<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SubjectController;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\PenggunaController;


Route::post('/check-code', [CodeController::class, 'checkCode'])->name('check.code');

// Route::post('/check-code', [CodeController::class, 'checkCode']);


use App\Http\Controllers\DashboardController;


Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::post('/insert-data', [DataController::class, 'store']);

Route::get('/dashboard', [ClientController::class, 'index'])->name('dashboard')->middleware(['auth', 'verified']);


// Routes with authentication and verification
Route::middleware(['auth', 'verified'])->group(function () {


    Route::get('/subjects', [SubjectController::class, 'index'])->name('subjects.index');
    Route::post('/subjects', [SubjectController::class, 'store'])->name('subjects.store');
    Route::put('/subjects/{id}', [SubjectController::class, 'update'])->name('subjects.update');
    Route::delete('/subjects/{id}', [SubjectController::class, 'destroy'])->name('subjects.destroy');

    Route::get('/questions', [QuestionController::class, 'index'])->name('questions.index');
    Route::get('/questions/create', [QuestionController::class, 'create'])->name('questions.create');
    Route::post('/questions', [QuestionController::class, 'store'])->name('questions.store');
    Route::get('/questions/{question}/edit', [QuestionController::class, 'edit'])->name('questions.edit');
    Route::put('/questions/{question}', [QuestionController::class, 'update'])->name('questions.update');
    Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('questions.destroy');

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// route::get()->group(function(){
    
// });


Route::patch('/client/{id_client}/status', [ClientController::class, 'toggleStatus'])->name('update.status');

Route::post('/create-code', [ClientController::class, 'store'])->name('create.code');

// route::get()->group(function(){

// });

Route::post('/pengguna/store', [PenggunaController::class, 'store'])->name('pengguna.store');

Route::delete('/client/{id_client}', [ClientController::class, 'destroy'])->name('delete.code');


// Route::post('/create-code', [ClientController::class, 'store'])->name('create.code');

// Route::get('/input-data-diri', function () {
//     return view('input-data-diri');
// });

// Route::post('/pengguna/store', [PenggunaController::class, 'store']);

require __DIR__.'/auth.php';

