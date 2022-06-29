<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeramalanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peramalan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barang_id')->nullable();
            $table->char('bulan_peramalan')->nullable();
            $table->char('tahun_peramalan')->nullable();
            $table->char('nilai_1')->nullable();
            $table->char('nilai_2')->nullable();
            $table->char('nilai_3')->nullable();
            $table->char('total_pengeluaran')->nullable();
            $table->char('total_wma')->nullable();
            $table->char('total_error')->nullable();
            $table->char('total_mad')->nullable();
            $table->char('total_mse')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peramalan');
    }
}
