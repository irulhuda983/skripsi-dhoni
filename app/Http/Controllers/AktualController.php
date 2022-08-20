<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aktual;
use App\Http\Resources\AktualResource;

class AktualController extends Controller
{
    public function index(Request $request)
    {
        $data = Aktual::paginate($request->limit ?? 10);

        return AktualResource::collection($data);
    }

    public function show(Aktual $aktual)
    {
        return new AktualResource($aktual);
    }

    public function store(Request $request)
    {
        $request->validate([
            'barang_id' => 'required',
            'bulan' => 'required',
            'tahun' => 'required',
            'stok' => 'required',
            'terjual' => 'required',
            'sisa' => 'required',
            'kondisi' => 'required',
        ]);

        $aktual = Aktual::create([
            'barang_id' => $request->barang_id,
            'bulan' => $request->bulan,
            'tahun' => $request->tahun,
            'stok' => $request->stok,
            'terjual' => $request->terjual,
            'sisa' => $request->sisa,
            'kondisi' => $request->kondisi,
        ]);

        return response()->json([
            'success' => true,
            'data' => new AktualResource($aktual),
        ], 200);
    }

    public function update(Request $request, Aktual $aktual)
    {
        $request->validate([
            'barang_id' => 'required',
            'bulan' => 'required',
            'tahun' => 'required',
            'stok' => 'required',
            'terjual' => 'required',
            'sisa' => 'required',
            'kondisi' => 'required',
        ]);

        $aktual->update([
            'barang_id' => $request->barang_id,
            'bulan' => $request->bulan,
            'tahun' => $request->tahun,
            'stok' => $request->stok,
            'terjual' => $request->terjual,
            'sisa' => $request->sisa,
            'kondisi' => $request->kondisi,
        ]);

        return response()->json([
            'success' => true,
        ], 200);
    }

    public function destroy(Aktual $aktual)
    {
        $aktual->delete();

        return response()->json([
            'success' => true,
        ], 200);
    }
}
