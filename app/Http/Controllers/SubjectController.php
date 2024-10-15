<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    public function index()
    {
        // Ambil semua subjects dan hitung jumlah soal (questions) per subject
        $subjects = Subject::with('questions')->get();

        // Iterasi untuk menambahkan question count ke setiap subject
        foreach ($subjects as $subject) {
            $subject->question_count = $subject->questions->count();
        }

        return view('admin.subject.index', compact('subjects'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject_name' => 'required|string|max:255',
            'timer_hours' => 'required|integer',
            'timer_minutes' => 'required|integer',
            'timer_seconds' => 'required|integer',
        ]);

        Subject::create($request->all());
        return redirect()->back()->with('success', 'Subject created successfully.');
    }

    public function update(Request $request,$id){

        if (!$request->all()) {
            return redirect()->back()->with('error', 'Tidak ada data yang dikirimkan');
        }

        $subjects = Subject::find($id);
        $validator = Validator::make($request->all(),[
            'subject_name' => 'required|string|max:255',
            'timer_hours' => 'required|integer',
            'timer_minutes' => 'required|integer',
            'timer_seconds' => 'required|integer',
        ]);


        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        if ($subjects) {
            $validatedData = $validator->validated();
            $subjects->update($validatedData);
            return redirect()->back()->with('success', 'Data Berhasil Diupdate');
        }
        return redirect()->back()->with('error', 'Data Tidak Ditemukan');
    }

    public function destroy($id)
    {
        $subject = Subject::findOrFail($id);
        $subject->delete();
        return redirect()->back()->with('success', 'Subject deleted successfully.');
    }
}
