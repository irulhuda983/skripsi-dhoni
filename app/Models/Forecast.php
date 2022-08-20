<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forecast extends Model
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
        $tahun = $data['tahun'];
        $akhir_bulan = (int) $data['akhir_bulan'];
        $akhir_tahun = (int) $data['akhir_tahun'];


        $forcast = [];
        $jml_err = [];
        $jml_mad = [];
        $jml_mse = [];
        $jml_mape = [];

        for($i = 0; $i < count($nilai); $i++){
            $tgl = '01-'.$bulan[$i].'-'.$tahun[$i];
            if($i < 3){
                array_push($forcast, [
                    'bulan' => date('M', strtotime($tgl)),
                    'tahun' => $tahun[$i],
                    'aktual' => $nilai[$i],
                    'wma' => '-',
                    'error' => '-',
                    'mad' => '-',
                    'mse' => '-',
                    'mape' => '-',
                ]);

                array_push($jml_mad, 0);
            }else{
                $wma = $this->rumusWma($nilai[$i - 3], $nilai[$i - 2], $nilai[$i - 1]);
                $error = $this->rumusError($wma, $nilai[$i]); 
                $mse = $this->rumusMse($error);
                $mad = $error < 0 ? $error * -1 : $error;
                $mape = $this->rumusMape($mad, $nilai[$i]);
                array_push($forcast, [
                    'bulan' => date('M', strtotime($tgl)),
                    'tahun' => $tahun[$i],
                    'aktual' => $nilai[$i],
                    'wma' => $wma,
                    'error' => $error,
                    'mad' => $mad,
                    'mse' => $mse,
                    'mape' => $mape,
                ]);

                array_push($jml_mad, $mad);
                array_push($jml_err, $error);
                array_push($jml_mad, $mad);
                array_push($jml_mse, $mse);
                array_push($jml_mape, $mape);
            }
        }

        $index_prediksi = count($nilai);
        $prediksi = $this->rumusWma($nilai[$index_prediksi - 3], $nilai[$index_prediksi - 2], $nilai[$index_prediksi - 1]);

        $new_tanggal = '01-'.((int) $akhir_bulan + 1) .'-'.$akhir_tahun;

        if($akhir_bulan == '12'){
            $new_tanggal = '01-01-'. ((int) $akhir_tahun + 1);
        }

        array_push($forcast, [
            'bulan' => date('M', strtotime($new_tanggal)),
            'tahun' => date('Y', strtotime($new_tanggal)),
            'aktual' => '?',
            'wma' => round($prediksi, 2),
            'error' => '-',
            'mad' => '-',
            'mse' => '-',
            'mape' => '-',
        ]);

        return [
            'data' => $forcast,
            'hasil' => round($prediksi, 2),
            'periode' => date('M Y', strtotime($new_tanggal)),
            'error' => [
                'total' => round(array_sum($jml_err), 2),
            ],
            'mad' => [
                'total' => round(array_sum($jml_mad), 2),
            ],
            'mse' => [
                'total' => round(array_sum($jml_mse), 2),
            ],
            'mape' => [
                'total' => round(array_sum($jml_mape), 2),
            ],
        ];
    }

    public function rumusWma($x1, $x2, $x3)
    {
        $bobot = $this->bobot();

        $hitung = ( ((int) $x3* (int) $bobot['bulan_lalu']) + ( (int) $x2 * (int) $bobot['dua_bulan']) + ( (int) $x1 * (int) $bobot['tiga_bulan']) ) / (int) $bobot['bobot'];

        return round($hitung,2);
    }

    public function rumusError($wma, $aktual)
    {
        $hasil = ($aktual-$wma);

        return round($hasil,2);
    }

    public function rumusMse($error)
    {
        $hasil = $error * $error;

        return round($hasil,2);
    }

    public function rumusMape($mad, $aktual)
    {
        $hasil = ($mad / $aktual) * 100;

        return round($hasil,2);
    }
}
