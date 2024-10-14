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
        Schema::create('answers', function (Blueprint $table) {
            $table->increments('id_answer'); // Primary key
            $table->unsignedInteger('user_id'); // Foreign Key dari pengguna
            $table->unsignedInteger('question_id'); // Foreign Key dari questions
            $table->unsignedInteger('selected_option'); // Opsi yang dipilih oleh user
            $table->string('answer_image', 255)->nullable(); // Path atau URL gambar jawaban
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('user_id')->references('id_user')->on('pengguna')->onDelete('cascade');
            $table->foreign('question_id')->references('id_question')->on('questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('answers');
    }
};
