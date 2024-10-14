<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Subjects</title>
    @vite('resources/css/app.css')
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
         .sidebar-expanded {
            width: 16rem;
        }
        .sidebar-collapsed {
            width: 4rem;
            justify-content: center;
        }
        .toggle-arrow {
            transform: rotate(180deg);
        }
        .sidebar-items {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .sidebar-items-collapsed {
            justify-content: center;
        }
        .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 1.25rem; /* Tailwind's space-x-5 translates to 1.25rem */
    }

    .card {
        width: 24rem; /* Fixed width for consistency */
        transition: all 0.3s ease;
    }

    .card:hover {
        transform: scale(1.05);
    }

     /* Dropdown Styles */
        .dropdown {
            position: absolute;
            top: 40px; /* Adjust this based on your card height */
            right: 0;
            z-index: 10; /* Ensure dropdown appears above other elements */
        }
        .dropdown-menu {
            display: none; /* Hide by default */
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .dropdown-menu:not(.hidden) {
    display: block; /* Show when the 'hidden' class is not applied */
}

    </style>
</head>
<body class="bg-gray-100">
    <div class="flex justify-start ml-6 mt-6 space-x-5">
        <!-- Sidebar -->
        <div id="sidebar" class="bg-blue-400 text-white h-[600px] sidebar-collapsed transition-all duration-300 ease-in-out flex flex-col shadow-sm rounded-xl relative">
            <!-- Toggle Button (posisi kanan) -->
            <div class="absolute top-4 right-4">
                <button id="toggleButton" class="text-white hover:text-gray-400 focus:outline-none">
                    <i id="arrowIcon" class="bi bi-arrow-right h-6 w-6 transition-transform duration-300"></i>
                </button>
            </div>
            <!-- Navbar Items -->
            <ul class="flex-1 px-3 mt-10 pt-5 sidebar-items">
                <li class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-white">
                    <i class="bi bi-file-earmark-text h-6 w-6"></i>
                    <span class="overflow-hidden transition-all w-0 ml-3" id="dashboard-text">Dashboard</span>
                </li>
                <li class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-white">
                    <i class="bi bi-list-task h-6 w-6"></i>
                    <span class="overflow-hidden transition-all w-0 ml-3" id="profile-text">Profile</span>
                </li>
                <li class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-white">
                    <i class="bi bi-gear h-6 w-6"></i>
                    <span class="overflow-hidden transition-all w-0 ml-3" id="settings-text">Settings</span>
                </li>
            </ul>
            <!-- Logout Button -->
            <div class="border-t flex p-3 justify-center">
                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="text-white flex items-center">
                        <i class="bi bi-box-arrow-right h-6 w-6"></i>
                        <span id="logout-text" class="overflow-hidden w-0 ml-2 transition-all">Logout</span>
                    </button>
                </form>
            </div>
        </div>

        <!-- Main Content (Cards) -->
        <div class="card-container p-5">
            @foreach ($subjects as $subject)
                <!-- Card for each subject -->
                <div class="max-w-sm relative rounded-3xl w-96 h-[280px] border-2 shadow-lg">
                    <!-- Ellipsis Button -->
                    <div class="absolute top-4 right-4">
                         <!-- Dropdown Toggle Button -->
                        <button onclick="toggleDropdown(event, {{ $subject->id }})" class="absolute top-4 right-4">
                            &#x2026; <!-- Ellipsis icon -->
                        </button>

                        <!-- Dropdown Menu -->
                        <div id="dropdown-menu-{{ $subject->id }}" class="dropdown-menu hidden absolute right-4 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                            <ul>
                                <li>

                                    <a href="javascript:void(0)" type="button" onclick="openEditModal({{ $subject->id }})" class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Edit</a>
                                </li>
                                <li>
                                    <a href="#" onclick="event.preventDefault(); document.getElementById('delete-form-{{ $subject->id }}').submit();" type="button"  class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                                        Hapus
                                    </a>

                                    <!-- Form tersembunyi untuk DELETE -->
                                    <form id="delete-form-{{ $subject->id }}" action="{{ route('subjects.destroy', $subject->id) }}" method="POST" style="display: none;">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Card Content -->
                    <h5 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-black mt-6 ml-6">{{ $subject->subject_name }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 my-4 ml-6">Waktu: {{ $subject->timer_hours }} Jam {{ $subject->timer_minutes }} Menit {{ $subject->timer_seconds }} Detik
                        <br />Jumlah Soal: {{ $subject->question_count }}</p>
                    <!-- Manage Button -->
                    <div class="flex justify-center my-6">
                        <a href="/tabel_soal/{{ $subject->id }}" class="bg-black text-white px-4 py-2 mt-10 w-80 rounded-2xl text-center hover:bg-gray-800">Kelola</a>
                    </div>
                </div>
            @endforeach

            <!-- Card for Add New Exam -->
            <div class="max-w-sm relative rounded-3xl w-96 h-[280px] border-2 shadow-lg flex flex-col items-center justify-center">
                <svg class="w-24 h-24 mb-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <button class="bg-black text-white px-4 py-2 w-80 mt-6 rounded-2xl text-center hover:bg-gray-800" data-toggle="modal" data-target="#modalCreate">Tambah Ujian</button>
            </div>
        </div>
    </div>

    <script>
        const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('toggleButton');
        const arrowIcon = document.getElementById('arrowIcon');

        // Text elements to show/hide
        const dashboardText = document.getElementById('dashboard-text');
        const profileText = document.getElementById('profile-text');
        const settingsText = document.getElementById('settings-text');
        const logoutText = document.getElementById('logout-text');

        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-expanded');
            sidebar.classList.toggle('sidebar-collapsed');

            if (sidebar.classList.contains('sidebar-expanded')) {
                arrowIcon.classList.add('toggle-arrow');
                arrowIcon.classList.replace('bi-arrow-right', 'bi-arrow-left');

                // Show text when expanded
                dashboardText.classList.remove('w-0');
                dashboardText.classList.add('w-42', 'ml-3');

                profileText.classList.remove('w-0');
                profileText.classList.add('w-42', 'ml-3');

                settingsText.classList.remove('w-0');
                settingsText.classList.add('w-42', 'ml-3');

                logoutText.classList.remove('w-0');
                logoutText.classList.add('w-42', 'ml-3');
            } else {
                arrowIcon.classList.remove('toggle-arrow');
                arrowIcon.classList.replace('bi-arrow-left', 'bi-arrow-right');

                // Hide text when collapsed
                dashboardText.classList.add('w-0');
                dashboardText.classList.remove('w-42', 'ml-3');

                profileText.classList.add('w-0');
                profileText.classList.remove('w-42', 'ml-3');

                settingsText.classList.add('w-0');
                settingsText.classList.remove('w-42', 'ml-3');

                logoutText.classList.add('w-0');
                logoutText.classList.remove('w-42', 'ml-3');
            }
        });

        function openEditModal(subjectId) {
    // Mencari modal dengan ID berdasarkan subjectId dan menghapus kelas hidden untuk menampilkan modal
    const modal = document.getElementById(`modalEdit${subjectId}`);
    modal.classList.remove('hidden');
}

function closeModalEdit(subjectId) {
    // Mencari modal dengan ID berdasarkan subjectId dan menambahkan kelas hidden untuk menutup modal
    const modal = document.getElementById(`modalEdit${subjectId}`);
    modal.classList.add('hidden');
}



        function toggleDropdown(event, id) {
            event.stopPropagation(); // Prevent event from bubbling up
            const dropdown = document.getElementById(`dropdown-menu-${id}`);

            // Hide all dropdowns first
            document.querySelectorAll('.dropdown-menu').forEach((menu) => {
                if (menu !== dropdown) {
                    menu.classList.add('hidden'); // Hide other dropdowns
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle('hidden'); // Show/hide the dropdown
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-menu').forEach((menu) => {
                menu.classList.add('hidden'); // Hide all dropdowns
            });
        });

    </script>
<div class="modal fade bd-example-modal-lg hidden" id="modalCreate" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50">
        <div class="relative p-8 w-full max-w-lg bg-white rounded-2xl">

            <button class="absolute top-4 right-4" onclick="closeModal()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <form id="popupForm" action="{{ route('subjects.store') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label class="block mb-2 text-left">Nama Ujian</label>
                    <input
                        type="text"
                        name="subject_name"
                        class="w-full p-2 border rounded-lg bg-gray-200"
                        placeholder="Ujian Pertama" required
                    />
                </div>

                <div class="mb-4">
                    <label class="block mb-2 text-left">Set Timer</label>
                    <div class="flex space-x-2">
                        <input
                            type="number"
                            name="timer_hours"
                            id="timer_hours"
                            class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                            placeholder="HH" required
                        />
                        <span>:</span>
                        <input
                            type="number"
                            name="timer_minutes"
                            id="timer_minutes"
                            class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                            placeholder="MM" required
                        />
                        <span>:</span>
                        <input
                            type="number"
                            name="timer_seconds"
                            id="timer_seconds"
                            class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                            placeholder="SS" required
                        />
                    </div>
                </div>

                <p id="errorMessage" class="text-red-500 text-sm mb-4 hidden"></p>

                <button
                    type="submit"
                    class="w-32 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 ml-40"
                >
                    Buat
                </button>
            </form>

        </div>
    </div>
</div>

@foreach ($subjects as $edit)
    <div class="modal fade bd-example-modal-lg hidden" id="modalEdit{{ $edit->id }}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50">
            <div class="relative p-8 w-full max-w-lg bg-white rounded-2xl">

                <button class="absolute top-4 right-4" onclick="closeModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <form id="editForm{{ $edit->id }}" action="{{ route('subjects.update', $edit->id) }}" method="POST">
                    @csrf
                    @method('PUT')

                    <div class="mb-4">
                        <label class="block mb-2 text-left">Nama Ujian</label>
                        <input
                            type="text"
                            name="subject_name"
                            id="edit_subject_name{{ $edit->id }}"
                            class="w-full p-2 border rounded-lg bg-gray-200"
                            placeholder="Nama Ujian" required
                            value="{{ $edit->subject_name }}"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block mb-2 text-left">Set Timer</label>
                        <div class="flex space-x-2">
                            <input
                                type="number"
                                name="timer_hours"
                                id="edit_timer_hours{{ $edit->id }}"
                                class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                                placeholder="HH" required
                                value="{{ $edit->timer_hours }}">
                            <span>:</span>
                            <input
                                type="number"
                                name="timer_minutes"
                                id="edit_timer_minutes{{ $edit->id }}"
                                class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                                placeholder="MM" required
                                value="{{ $edit->timer_minutes }}"
                            >
                            <span>:</span>
                            <input
                                type="number"
                                name="timer_seconds"
                                id="edit_timer_seconds{{ $edit->id }}"
                                class="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                                placeholder="SS" required
                                value="{{ $edit->timer_seconds }}"
                            >
                        </div>
                    </div>

                    <p id="editErrorMessage{{ $edit->id }}" class="text-red-500 text-sm mb-4 hidden"></p>

                    <button
                        type="submit"
                        class="w-32 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 ml-40"
                    >
                        Perbarui
                    </button>
                </form>

            </div>
        </div>
    </div>
@endforeach


<script>
    // Menangani pembukaan modal
    const addExamButton = document.querySelector('[data-toggle="modal"]');
    addExamButton.addEventListener('click', () => {
        const modal = document.getElementById('modalCreate');
        modal.classList.remove('hidden'); // Buka modal
    });

    // Function untuk menutup modal
    const closeModal = () => {
        const modal = document.getElementById('modalCreate');
        modal.classList.add('hidden'); // Tutup modal
        // Reset form saat modal ditutup
        document.getElementById('popupForm').reset();
    };

</script>


</body>
</html>
