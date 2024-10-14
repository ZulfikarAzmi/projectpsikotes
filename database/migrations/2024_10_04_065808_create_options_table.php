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
        Schema::create('options', function (Blueprint $table) {
            $table->increments('id_option'); // Primary key
            $table->unsignedInteger('question_id'); // Foreign Key dari questions
            $table->string('option_text', 255)->nullable(); // Teks Opsi Jawaban
            $table->string('option_image', 255)->nullable(); // Path atau URL gambar opsi
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('question_id')->references('id_question')->on('questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('options');
    }
};
