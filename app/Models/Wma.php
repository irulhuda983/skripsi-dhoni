<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wma extends Model
{
    use HasFactory;

    public function bobot()
    {
        $bulan_lalu = 3;
        $dua_bulan = 2;
        $tiga_bulan = 1;

        $bobot = array_sum([$bulan_lalu, $dua_bulan, $tiga_bulan]);

        return [
            'bulan_lalu' => $bulan_lalu,
            'dua_bulan' => $dua_bulan,
            'tiga_bulan' => $tiga_bulan,
            'bobot' => $bobot,
        ];
    }

    public function wma($data)
    {
        $bulan = $data['bulan'];
        $nilai = $data['nilai'];

        $data = [];
        $jml = [];

        for($i = 0; $i < count($nilai); $i++){
            if($i < 3){
                $data[$bulan[$i]] = 0;
            }else{
                $data[$bulan[$i]] = $this->rumusWma($nilai[$i - 3], $nilai[$i - 2], $nilai[$i - 1]);
                array_push($jml, $data[$bulan[$i]]);
            }
        }

        return [
            'data' => $data,
            'jml' => array_sum($jml),
        ];
    }

    public function rumusWma($x1, $x2, $x3)
    {
        $bobot = $this->bobot();

        $hitung = ( ((int) $x3* (int) $bobot['bulan_lalu']) + ( (int) $x2 * (int) $bobot['dua_bulan']) + ( (int) $x1 * (int) $bobot['tiga_bulan']) ) / (int) $bobot['bobot'];

        return round($hitung,2);
    }
}
