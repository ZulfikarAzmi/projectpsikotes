<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Timer for {{ $subject->name }}</title>
    @vite('resources/css/app.css') <!-- Menggunakan Vite untuk mengimpor CSS -->
    <script>
        let timer;
        let timeLeft = {{ $timer }}; // Mengambil timer dari controller

        function startCountdown() {
            timer = setInterval(function() {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert('Time is up!');
                } else {
                    timeLeft--;
                    document.getElementById('timerDisplay').innerText = timeLeft + ' seconds remaining';
                }
            }, 1000);
        }

        window.onload = startCountdown;
    </script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 class="text-2xl font-bold text-gray-700 mb-4">Timer for {{ $subject->name }}</h1>
        <p id="timerDisplay" class="text-lg font-semibold text-blue-600">{{ $timer }} seconds remaining</p>
    </div>
    @vite('resources/js/app.js') <!-- Menggunakan Vite untuk mengimpor JS -->
</body>
</html>
