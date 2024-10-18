<?php

namespace App\Http\Controllers;

use App\Models\Pengguna;
use Illuminate\Http\Request;

class PenggunaController extends Controller
{
    public function store(Request $request)
    {
        // Validasi data input
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:255',
            'institution' => 'required|string|max:100',
            'exam_date' => 'required|date',
            'client_id' => 'required|integer|exists:clients,id', // Jika client_id diperlukan
        ]);

        // Simpan data ke dalam tabel pengguna
        Pengguna::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'institution' => $request->input('institution'),
            'exam_date' => $request->input('exam_date'),
            'client_id' => $request->input('client_id'), // Jika client_id diperlukan
        ]);

        // Redirect atau berikan respon sesuai kebutuhan
        return redirect('/')->with('success', 'Data berhasil disimpan.');
    }
}
