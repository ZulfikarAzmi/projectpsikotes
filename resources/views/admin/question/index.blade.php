<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-100 font-sans">
    <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">Questions</h1>

        <!-- Add New Question Button -->
        <div class="flex justify-end mb-6">
            <a href="{{ route('questions.create') }}" class="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition-all duration-300">
                Add New Question
            </a>
        </div>

        <!-- Success Message -->
        @if(session('success'))
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                {{ session('success') }}
            </div>
        @endif

        <!-- Questions Table -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="table-auto w-full">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2">Subject</th>
                        <th class="px-4 py-2">Question Text</th>
                        <th class="px-4 py-2">Question Image</th>
                        <th class="px-4 py-2">Answer Image</th>
                        <th class="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-100">
                    @foreach($questions as $question)
                        <tr class="hover:bg-gray-50 transition-all duration-200">
                            <td class="border px-4 py-2 text-center">{{ $question->id }}</td>
                            <td class="border px-4 py-2 text-center">{{ $question->subject->subject_name }}</td>
                            <td class="border px-4 py-2">{{ $question->question_text }}</td>
                            <td class="border px-4 py-2 text-center">
                                @if($question->question_image)
                                    <img src="{{ asset('storage/' . $question->question_image) }}" class="w-24 h-24 object-cover mx-auto rounded-md shadow-md">
                                @endif
                            </td>
                            <td class="border px-4 py-2 text-center">
                                @if($question->answer_image)
                                    <img src="{{ asset('storage/' . $question->answer_image) }}" class="w-24 h-24 object-cover mx-auto rounded-md shadow-md">
                                @endif
                            </td>
                            <td class="border px-4 py-2 text-center">
                                <a href="{{ route('questions.edit', $question) }}" class="bg-yellow-400 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-500 transition-all duration-300 inline-block">Edit</a>
                                <form action="{{ route('questions.destroy', $question) }}" method="POST" style="display:inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button class="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600 transition-all duration-300 inline-block" onclick="return confirm('Are you sure?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- Pagination Links -->
        <div class="mt-6">
            {{ $questions->links() }}
        </div>
    </div>
</body>
</html>
