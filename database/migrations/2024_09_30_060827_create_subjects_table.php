<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectsTable extends Migration
{
    public function up()
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->id(); // ID unik untuk
            $table->string('subject_name', 255); // Nama subjek ujian
            $table->integer('timer_hours')->default(0); // Jam untuk timer
            $table->integer('timer_minutes')->default(0); // Menit untuk timer
            $table->integer('timer_seconds')->default(0); // Detik untuk timer
            $table->timestamps(); // Kolom untuk menyimpan waktu dibuat dan diperbarui
        });

    }


    public function down()
    {
        Schema::dropIfExists('subjects');
    }
}
