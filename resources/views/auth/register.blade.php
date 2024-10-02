<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <title>Register Admin</title>
    @vite('resources/css/app.css')
</head>
<body class="flex justify-center items-center h-screen bg-gray-200 relative">

    <div class="logo absolute top-8 left-10">
        <img src="{{ asset('Assets/img/logo.png') }}" alt="Logo E-Learning" class="w-36" />
    </div>

    <div class="container flex w-full h-full max-w-full shadow-lg">
        <div class="left-section w-1/2 bg-white flex justify-center items-center p-20">
            <img src="{{ asset('Assets/img/exam.png') }}" alt="E-Learning" class="w-full h-auto" />
        </div>

        <div class="right-section w-1/2 p-20 bg-white flex flex-col justify-center">
            <h2 class="text-center text-2xl mb-8 font-bold text-shadow">Register</h2>
            <form method="POST" action="{{ route('register') }}" class="space-y-6">
                @csrf

                <div class="input-group flex items-center border-b border-gray-300 pb-2">
                    <i class="fas fa-user text-gray-400 mr-3"></i>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        :value="old('name')"
                        placeholder="Name"
                        required
                        autofocus
                        class="w-full p-2 focus:outline-none text-gray-700"
                    />
                    <x-input-error :messages="$errors->get('name')" class="mt-2" />
                </div>

                <div class="input-group flex items-center border-b border-gray-300 pb-2">
                    <i class="fas fa-envelope text-gray-400 mr-3"></i>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        :value="old('email')"
                        placeholder="Email"
                        required
                        class="w-full p-2 focus:outline-none text-gray-700"
                    />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <div class="input-group flex items-center border-b border-gray-300 pb-2">
                    <i class="fas fa-lock text-gray-400 mr-3"></i>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        class="w-full p-2 focus:outline-none text-gray-700"
                    />
                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

                <div class="input-group flex items-center border-b border-gray-300 pb-2">
                    <i class="fas fa-lock text-gray-400 mr-3"></i>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        required
                        class="w-full p-2 focus:outline-none text-gray-700"
                    />
                    <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
                </div>

                <button type="submit" class="btn w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600">Register</button>
            </form>

            <div class="text-center mt-4">
                <a href="{{ route('login') }}" class="text-blue-500 hover:underline">Sudah Memiliki Akun?</a>
            </div>
        </div>
    </div>

    <div class="footer absolute bottom-2 w-full text-center text-gray-700 text-sm">
        CBTExam©2024
    </div>
    @vite('resources/js/app.js')
</body>
</html>
