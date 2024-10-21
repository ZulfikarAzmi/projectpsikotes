<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buat Kode</title>
    @vite('resources/css/app.css')
</head>
<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 24px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        border-radius: 50%;
        left: 4px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #4CAF50;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }
</style>

<body class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">

    <div class="w-[1000px] mx-auto p-8 sm:px-8 lg:px-10 bg-white dark:bg-gray-900 shadow-2xl rounded-lg">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-center text-black-800 dark:text-gray-100 mb-10">
            Buat Kode Baru
        </h1>

        <!-- Form Section -->
        <div class="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form method="POST" action="{{ route('create.code') }}">
                @csrf
                <div class="mb-6">
                    <label for="kode" class="block text-black-700 dark:text-gray-200 font-semibold">Kode:</label>
                    <input type="text" name="kode" id="kode" class="mt-1 block w-full px-4 py-3 border border-blue-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none text-black dark:text-white bg-white dark:bg-gray-700" required>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form method="POST" action="#">
                        @csrf
                        <div class="mb-4">
                            <label for="kode" class="block text-gray-700">Kode:</label>
                            <input type="text" name="kode" id="kode" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 text-black" required>
                        </div>
                        <div class="mb-4">
                            <label for="status" class="block text-gray-700">Status:</label>
                            <select name="status" id="status" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 text-black" required>
                                <option value="1">Aktif</option>
                                <option value="0">Tidak Aktif</option>
                            </select>
                        </div>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Buat Kode</button>
                    </form>

                    @if (session('success'))
                        <div class="mt-4 p-2 bg-green-500 text-white">
                            {{ session('success') }}
                        </div>
                    @endif
                </div>

                <div class="mb-6">
                    <label for="status" class="block text-black-700 dark:text-gray-200 font-semibold">Status:</label>
                    <select name="status" id="status" class="mt-1 block w-full px-4 py-3 border border-blue-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none text-black dark:text-white bg-white dark:bg-gray-700" required>
                        <option value="1">Aktif</option>
                        <option value="0">Tidak Aktif</option>
                    </select>
                </div>

                <button type="submit" class="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-400">
                    Buat Kode
                </button>
            </form>

            @if (session('success'))
                <div class="mt-6 p-4 bg-blue-500 text-white rounded-md shadow-md">
                    {{ session('success') }}
                </div>
            @endif
        </div>

        <!-- Data Table Section -->
        <div class="mt-12">
            <h2 class="text-2xl font-semibold text-blue-800 dark:text-gray-100 mb-6">Daftar Kode</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <thead>
                        <tr class="text-left bg-blue-500 text-white dark:bg-gray-700">
                            <th class="py-3 px-6">ID</th>
                            <th class="py-3 px-6">Kode</th>
                            <th class="py-3 px-6">Status</th>
                            <th class="py-3 px-6">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($dontols as $client)
                            <tr class="border-b border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-200">
                                <td class="py-3 px-6">{{ $client->id_client }}</td>
                                <td class="py-3 px-6">{{ $client->kode }}</td>
                                <td class="py-3 px-6">
                                    <span class="px-3 py-1 rounded-full text-sm font-medium {{ $client->status == 1 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800' }}">
                                        {{ $client->status == 1 ? 'Aktif' : 'Tidak Aktif' }}
                                    </span>
                                </td>
                                <td class="py-3 px-6 flex justify-between items-center">
                                    <form method="POST" action="{{ route('update.status', $client->id_client) }}">
                                        @csrf
                                        @method('PATCH')
                                        <label class="switch">
                                            <input type="checkbox" onchange="this.form.submit()" {{ $client->status ? 'checked' : '' }}>
                                            <span class="slider"></span>
                                        </label>
                                    </form>
                                    <form method="POST" action="{{ route('delete.code', $client->id_client) }}">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all duration-300 ml-6">
                                            Hapus
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    @vite('resources/js/app.js')
</body>
</html>

