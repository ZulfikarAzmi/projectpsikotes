<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\DataController;


class ClientController extends Controller
{
    public function index()
    {
        $dontols = Client::all();
        return view('dashboard', compact('dontols'));
    }

    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'kode' => 'required|string|max:20',
    //         'status' => 'required|boolean',
    //     ]);

    //     Client::create([
    //         'kode' => $validatedData['kode'],
    //         'status' => $validatedData['status'],
    //     ]);

    //     return redirect()->back()->with('success', 'Kode berhasil dibuat!');
    // }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'kode' => 'required|string|max:20',
            'status' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }   

        $validatedData = $validator->validated();
        Client::create($validatedData);

        return redirect()->back()->with('success', 'Kode berhasil dibuat!');
    }

    public function update(Request $request, $id_client)
    {
        // Validasi input
        $request->validate([
            'kode' => 'required|string|max:20|unique:clients,kode,' . $id_client . ',id_client',
            'status' => 'required|boolean',
        ]);

        // Mencari client berdasarkan ID
        $client = Client::where('id_client', $id_client)->firstOrFail();

        // Mengupdate data
        $client->kode = $request->input('kode');
        $client->status = $request->input('status');
        $client->save(); // Simpan perubahan

        return response()->json(['message' => 'Client updated successfully!', 'client' => $client]);
    }

    public function destroy($id_client)
    {
        // Mencari client berdasarkan ID
        $client = Client::where('id_client', $id_client)->firstOrFail();

        // Menghapus client
        $client->delete();

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Kode berhasil dihapus!');
    }

    public function toggleStatus($id_client)
    {
        $client = Client::where('id_client', $id_client)->firstOrFail();
        $client->status = !$client->status; // Toggle status
        $client->save();

        return redirect()->back()->with('success', 'Status berhasil diubah!');
    }
}
