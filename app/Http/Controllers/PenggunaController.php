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
             // Jika client_id diperlukan
        ]);

        // Simpan data ke dalam tabel pengguna
        Pengguna::create($request->all());

        // Redirect atau berikan respon sesuai kebutuhan
        return redirect()->route('home')->with('success', 'Data berhasil disimpan.');
    }
}
