<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Data Diri</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-white-100 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-3xl p-8 bg-white rounded-3xl animate-fade-in">
        <h2 class="text-3xl font-bold text-start text-black-600 mb-8">Input Data Diri</h2> <!-- Tambahkan margin bawah -->
        <form action="{{ route('pengguna.store') }}" method="POST" class="space-y-6"> <!-- Tambahkan jarak antar elemen form -->
            @csrf
            <div class="flex items-center space-x-4">
                <label for="name" class="text-gray-700 font-medium w-1/3">Nama Lengkap:</label>
                <input type="text" id="name" name="name" required maxlength="100"
                       class="mt-1 p-3 border border-black rounded-3xl shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out bg-gray-50 w-2/3">
            </div>
            <div class="flex items-center space-x-4">
                <label for="description" class="text-gray-700 font-medium w-1/3">Keterangan:</label>
                <input type="text" id="description" name="description" required maxlength="255"
                       class="mt-1 p-3 border border-black rounded-3xl shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out bg-gray-50 w-2/3">
            </div>
            <div class="flex items-center space-x-4">
                <label for="institution" class="text-gray-700 font-medium w-1/3">Institusi:</label>
                <input type="text" id="institution" name="institution" required maxlength="100"
                       class="mt-1 p-3 border border-black rounded-3xl shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out bg-gray-50 w-2/3">
            </div>
            <div class="flex items-center space-x-4">
                <label for="exam_date" class="text-gray-700 font-medium w-1/3">Tanggal Ujian:</label>
                <input type="date" id="exam_date" name="exam_date" required
                       class="mt-1 p-3 border border-black rounded-3xl shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out bg-gray-50 w-2/3">
            </div>
            <div class="flex justify-end mt-8"> <!-- Tambahkan margin atas pada tombol -->
                <button type="submit" class="px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out">Selesai</button>
            </div>
        </form>
    </div>

    <style>
        @keyframes fade-in {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in {
            animation: fade-in 1s ease-in-out;
        }
    </style>
</body>
</html>
