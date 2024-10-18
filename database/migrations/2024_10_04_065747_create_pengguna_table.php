<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pengguna', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name', 100); // Nama Pengguna
            $table->string('description', 255); // Keterangan tentang user
            $table->string('institution', 100); // Nama institusi
            $table->date('exam_date'); // Tanggal pengerjaan ujian
            $table->unsignedBigInteger('client_id'); // Ubah menjadi nullable
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengguna');
    }
};
