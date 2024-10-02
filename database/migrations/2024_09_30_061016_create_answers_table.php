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
            $table->bigIncrements('id_answer');   // ID unik untuk jawaban
            $table->unsignedBigInteger('question_id'); // ID pertanyaan sebagai foreign key
            $table->string('answer_text');        // Teks jawaban
            $table->boolean('is_correct')->default(false); // Apakah jawaban benar
            $table->timestamps();

            // Foreign key constraint
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
