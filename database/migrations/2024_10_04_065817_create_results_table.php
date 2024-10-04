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
        Schema::create('results', function (Blueprint $table) {
            $table->increments('id_result'); // Primary key
            $table->unsignedInteger('user_id'); // Foreign Key dari pengguna
            $table->unsignedInteger('subject_id'); // Foreign Key dari subjects
            $table->integer('score'); // Nilai ujian
            // $table->timestamp('completed_at')->nullable(); // Waktu penyelesaian ujian (opsional)
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('user_id')->references('id_user')->on('pengguna')->onDelete('cascade');
            $table->foreign('subject_id')->references('id_subject')->on('subjects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
