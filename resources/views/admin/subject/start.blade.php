<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $iqTest->name }}</title>
    @vite('resources/css/app.css') <!-- Menggunakan Vite untuk mengimpor CSS -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let timerElement = document.getElementById('timer');
            let remainingTime = {{ $timer->remaining_time }};

            const countdown = setInterval(() => {
                remainingTime--;
                timerElement.innerText = remainingTime;

                if (remainingTime <= 0) {
                    clearInterval(countdown);
                    alert('Time is up!');
                }
            }, 1000);
        });
    </script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 class="text-2xl font-bold text-gray-700 mb-4">{{ $iqTest->name }}</h1>
        <p class="text-lg font-semibold text-blue-600">Remaining Time: <span id="timer">{{ $timer->remaining_time }}</span> seconds</p>
    </div>
    @vite('resources/js/app.js')
</body>
</html>
