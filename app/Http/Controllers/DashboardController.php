<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class DashboardController extends Controller
{
    public function index()
    {
        // Ambil semua data dari tabel client
        $dontols = Client::all();

        // Kirim data ke view dashboard.blade.php
        return view('dashboard',compact('dontols'));
    }
}
