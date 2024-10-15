<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuestionController extends Controller
{
    // Display list of questions
    public function index()
    {
        $questions = Question::with('subject')->paginate(10);
        return view('admin.question.index', compact('questions'));
    }

    // Show form to create a new question
    public function create()
    {
        $subjects = Subject::all();
        return view('admin.question.create', compact('subjects'));
    }

    // Store new question in the database
    public function store(Request $request)
    {
        $request->validate([
            'subject_id' => 'required|exists:subjects,id',
            'question_text' => 'nullable|string|max:255',
            'question_image' => 'nullable|image|mimes:png|max:5120',
            'answer_image' => 'nullable|image|mimes:png|max:5120',
        ]);

        $data = $request->all();

        // Handle file uploads
        if ($request->hasFile('question_image')) {
            $data['question_image'] = $request->file('question_image')->store('questions', 'public');
        }

        if ($request->hasFile('answer_image')) {
            $data['answer_image'] = $request->file('answer_image')->store('answers', 'public');
        }

        Question::create($data);

        return redirect()->back()->with('success', 'Question created successfully');
    }

    // Show the form to edit a question
    public function edit(Question $question)
    {
        $subjects = Subject::all();
        return view('admin.question.edit', compact('question', 'subjects'));
    }

    // Update the question in the database
    public function update(Request $request, Question $question)
    {
        $request->validate([
            'subject_id' => 'required|exists:subjects,id',
            'question_text' => 'nullable|string|max:255',
            'question_image' => 'nullable|image|mimes:png|max:5120',
            'answer_image' => 'nullable|image|mimes:png|max:5120',
        ]);

        $data = $request->all();

        // Handle file uploads
        if ($request->hasFile('question_image')) {
            // Delete old file if exists
            if ($question->question_image) {
                Storage::disk('public')->delete($question->question_image);
            }
            $data['question_image'] = $request->file('question_image')->store('questions', 'public');
        }

        if ($request->hasFile('answer_image')) {
            // Delete old file if exists
            if ($question->answer_image) {
                Storage::disk('public')->delete($question->answer_image);
            }
            $data['answer_image'] = $request->file('answer_image')->store('answers', 'public');
        }

        $question->update($data);

        return redirect()->back()->with('success', 'Question updated successfully');
    }

    // Delete a question
    public function destroy(Question $question)
    {
        if ($question->question_image) {
            Storage::disk('public')->delete($question->question_image);
        }

        if ($question->answer_image) {
            Storage::disk('public')->delete($question->answer_image);
        }

        $question->delete();

        return redirect()->back()->with('success', 'Question deleted successfully');
    }
}
