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
        Schema::create('person', function (Blueprint $table) {
            $table->bigIncrements('id_person'); // ID unik untuk person
            $table->string('name', 100);        // Nama
            $table->string('description', 255); // Deskripsi
            $table->string('institution', 100); // Institusi
            $table->date('exam_date');          // Tanggal ujian
            $table->unsignedBigInteger('client_id'); // ID client sebagai foreign key
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('client_id')->references('id_client')->on('clients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person');
    }
};
