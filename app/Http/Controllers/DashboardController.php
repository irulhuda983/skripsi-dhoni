<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aktual as DataAktual;
use App\Models\Barang;

class DashboardController extends Controller
{
    
    public function grafik()
    {
        $periode = DataAktual::select('bulan', 'tahun')->distinct()->get();
        $aktual = DataAktual::get();

        $label = [];
        $colors = [];
        $nilai = [];

        foreach($periode as $item){
            $terjual = $aktual->where('bulan', $item->bulan)->where('tahun', $item->tahun)->pluck('terjual')->sum();
            array_push($label, date('m-Y', strtotime('01-'.$item->bulan.'-'.$item->tahun)));
            array_push($colors, '#FFFFFF');
            array_push($nilai, $terjual);
        }

        $data = [
            'colors' => $colors,
            'label' => $label,
            'terjual' => $nilai,
        ];

        return response()->json($data, 200);
        
    }

    public function total()
    {
        $aktual = DataAktual::get();

        $terjual = $aktual->pluck('terjual')->sum();
        $stok = $aktual->pluck('stok')->sum();
        $barang = Barang::count();

        $data = [
            'barang' => $barang,
            'terjual' => $terjual,
            'stok' => $stok,
        ];

        return response()->json($data, 200);
    }
}
