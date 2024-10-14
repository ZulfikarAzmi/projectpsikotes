<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode' => 'required|string|max:20',
            'status' => 'required|boolean',
        ]);

        Client::create([
            'kode' => $validatedData['kode'],
            'status' => $validatedData['status'],
        ]);

        return redirect()->back()->with('success', 'Kode berhasil dibuat!');
    }
}
