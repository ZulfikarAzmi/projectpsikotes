<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    public function index(Request $request)
{
    // Ambil semua subjects dan hitung jumlah soal (questions) per subject
    $subjects = Subject::with('questions')->get();

    // Iterasi untuk menambahkan question count ke setiap subject
    foreach ($subjects as $subject) {
        $subject->question_count = $subject->questions->count();
    }

    // Cek apakah permintaan berasal dari API
    if ($request->wantsJson()) {
        return response()->json($subjects); // Mengembalikan respons JSON
    }

    return view('admin.subject.index', compact('subjects')); // Mengembalikan tampilan Blade
}


public function store(Request $request)
{
    $request->validate([
        'subject_name' => 'required|string|max:255',
        'timer_hours' => 'required|integer',
        'timer_minutes' => 'required|integer',
        'timer_seconds' => 'required|integer',
    ]);

    $subject = Subject::create($request->all());

    if ($request->wantsJson()) {
        return response()->json(['success' => true, 'message' => 'Subject created successfully.', 'data' => $subject], 201);
    }

    return redirect()->back()->with('success', 'Subject created successfully.');
}

public function update(Request $request, $id)
{
    $subject = Subject::find($id);

    if (!$subject) {
        if ($request->wantsJson()) {
            return response()->json(['success' => false, 'message' => 'Data Tidak Ditemukan'], 404);
        }
        return redirect()->back()->with('error', 'Data Tidak Ditemukan');
    }

    $validator = Validator::make($request->all(), [
        'subject_name' => 'required|string|max:255',
        'timer_hours' => 'required|integer',
        'timer_minutes' => 'required|integer',
        'timer_seconds' => 'required|integer',
    ]);

    if ($validator->fails()) {
        if ($request->wantsJson()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }
        return redirect()->back()->withErrors($validator)->withInput();
    }

    $validatedData = $validator->validated();
    $subject->update($validatedData);

    if ($request->wantsJson()) {
        return response()->json(['success' => true, 'message' => 'Data Berhasil Diupdate', 'data' => $subject], 200);
    }

    return redirect()->back()->with('success', 'Data Berhasil Diupdate');
}


public function destroy(Request $request, $id)
{
    $subject = Subject::find($id);

    if (!$subject) {
        if ($request->wantsJson()) {
            return response()->json(['success' => false, 'message' => 'Data Tidak Ditemukan'], 404);
        }
        return redirect()->back()->with('error', 'Data Tidak Ditemukan');
    }

    $subject->delete();

    if ($request->wantsJson()) {
        return response()->json(['success' => true, 'message' => 'Subject deleted successfully.'], 200);
    }

    return redirect()->back()->with('success', 'Subject deleted successfully.');
}

}
