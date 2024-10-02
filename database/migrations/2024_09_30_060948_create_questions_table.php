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
            $table->bigIncrements('id_question'); // ID unik untuk pertanyaan
            $table->string('question_text');       // Teks pertanyaan
            $table->unsignedBigInteger('subject_id'); // ID subject sebagai foreign key
            $table->timestamps();

            // Foreign key constraint
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
