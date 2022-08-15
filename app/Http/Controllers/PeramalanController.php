<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forecast;
use App\Models\Aktual;

class PeramalanController extends Controller
{

    protected $forecast;

    public function __construct()
    {
        $this->forecast = new Forecast();
    }
    
    public function getWma(Request $request)
    {
        $bulan = Aktual::select('bulan')->where('barang_id', $request->barang_id)->get()->pluck('bulan')->all();
        $tahun = Aktual::select('tahun')->where('barang_id', $request->barang_id)->get()->pluck('tahun')->all();
        $terjual = Aktual::select('terjual')->where('barang_id', $request->barang_id)->get()->pluck('terjual')->all();

        // $aktual = Aktual::all();

        $data = [
            'bulan' => $bulan,
            'tahun' => $tahun,
            'nilai' => $terjual,
        ];

        // return $data;

        return response()->json($this->forecast->wma($data), 200);
    }
}
