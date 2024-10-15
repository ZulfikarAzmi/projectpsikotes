<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Question</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-gray-100">

    <div class="container mx-auto py-10">
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center animate__animated animate__fadeIn">Edit Question</h1>

            @if($errors->any())
                <div class="bg-red-100 text-red-600 p-4 rounded mb-6 animate__animated animate__bounceIn">
                    <ul class="list-disc list-inside">
                        @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('questions.update', $question) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-4">
                    <label for="subject_id" class="block text-sm font-medium text-gray-700">Subject</label>
                    <select name="subject_id" id="subject_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        @foreach($subjects as $subject)
                            <option value="{{ $subject->id }}" {{ $subject->id == $question->subject_id ? 'selected' : '' }}>
                                {{ $subject->subject_name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <div class="mb-4">
                    <label for="question_text" class="block text-sm font-medium text-gray-700">Question Text</label>
                    <input type="text" name="question_text" id="question_text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="{{ old('question_text', $question->question_text) }}">
                </div>

                <div class="mb-4">
                    <label for="question_image" class="block text-sm font-medium text-gray-700">Question Image (PNG only, max 5MB)</label>
                    <input type="file" name="question_image" id="question_image" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    @if($question->question_image)
                        <img src="{{ asset('storage/' . $question->question_image) }}" class="mt-4 w-32 rounded-md shadow-md transition transform hover:scale-105">
                    @endif
                </div>

                <div class="mb-4">
                    <label for="answer_image" class="block text-sm font-medium text-gray-700">Answer Image (PNG only, max 5MB)</label>
                    <input type="file" name="answer_image" id="answer_image" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    @if($question->answer_image)
                        <img src="{{ asset('storage/' . $question->answer_image) }}" class="mt-4 w-32 rounded-md shadow-md transition transform hover:scale-105">
                    @endif
                </div>

                <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-indigo-300">Update Question</button>
            </form>
        </div>
    </div>

</body>

</html>
