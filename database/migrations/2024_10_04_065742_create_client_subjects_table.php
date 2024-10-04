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
        Schema::create('client_subjects', function (Blueprint $table) {
            $table->increments('id'); // Primary key
            $table->unsignedInteger('client_id'); // Foreign Key dari clients
            $table->unsignedInteger('subject_id'); // Foreign Key dari subjects
            $table->timestamps(); // Created at dan updated at

            // Menambahkan constraint foreign key
            $table->foreign('client_id')->references('id_client')->on('clients')->onDelete('cascade');
            $table->foreign('subject_id')->references('id_subject')->on('subjects')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_subjects');
    }
};
