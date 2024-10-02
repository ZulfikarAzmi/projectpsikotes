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
            $table->bigIncrements('id'); // ID unik untuk relasi
            $table->unsignedBigInteger('client_id'); // ID client
            $table->unsignedBigInteger('subject_id'); // ID subject
            $table->timestamps();

            // Mendefinisikan foreign key
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
