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
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('id_question'); // Primary key
            $table->unsignedInteger('subject_id'); // Foreign Key dari subjects
            $table->string('question_text', 255)->nullable(); // Teks Soal
            $table->string('question_image', 255)->nullable(); // Path atau URL gambar soal
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('subject_id')->references('id_subject')->on('subjects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
