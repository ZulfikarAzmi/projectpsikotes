<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class CodeController extends Controller
{
    public function checkCode(Request $request)
    {
        $userCode = $request->input('kode');
        $client = Client::where('kode', $userCode)->first();

        if ($client && $client->status) {
            return view('input-data-diri');
        } else {
            return redirect()->route('home')->with('error', 'Kode tidak tersedia');
        }
    }
}
