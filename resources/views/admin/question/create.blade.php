<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add New Question</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="container mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Add New Question</h1>

        @if($errors->any())
            <div class="alert alert-danger mb-4">
                <div class="bg-red-500 text-white p-3 rounded">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li class="text-sm">{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        @endif

        <form action="{{ route('questions.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="form-group mb-4">
                <label for="subject_id" class="block text-gray-700">Subject</label>
                <select name="subject_id" id="subject_id" class="form-control mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                    @foreach($subjects as $subject)
                        <option value="{{ $subject->id }}">{{ $subject->subject_name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group mb-4">
                <label for="question_text" class="block text-gray-700">Question Text</label>
                <input type="text" name="question_text" id="question_text" class="form-control mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200" value="{{ old('question_text') }}">
            </div>

            <div class="form-group mb-4">
                <label for="question_image" class="block text-gray-700">Question Image (PNG only, max 5MB)</label>
                <input type="file" name="question_image" id="question_image" class="form-control mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
            </div>

            <div class="form-group mb-4">
                <label for="answer_image" class="block text-gray-700">Answer Image (PNG only, max 5MB)</label>
                <input type="file" name="answer_image" id="answer_image" class="form-control mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
            </div>

            <button type="submit" class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">Save Question</button>
        </form>
    </div>
</body>
</html>
