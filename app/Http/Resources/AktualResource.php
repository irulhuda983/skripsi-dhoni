<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AktualResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'barang_id' => $this->barang_id,
            'barang' => new BarangResource($this->barang),
            'bulan' => $this->getBulan($this->bulan),
            'bulan_show' => $this->bulan,
            'tahun' => $this->tahun,
            'stok' => $this->stok,
            'terjual' => $this->terjual,
            'sisa' => $this->sisa,
            'kondisi' => $this->kondisi,
        ];
    }

    public function getBulan($bln)
    {
        $tanggal = '01-'.$bln.'-2020';
        $tgl = date('M', strtotime($tanggal));

        return $tgl;
    }
}
