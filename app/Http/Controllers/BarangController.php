<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Http\Resources\BarangResource;

class BarangController extends Controller
{
    public function index(Request $request)
    {
        $barang = Barang::orderBy('created_at', 'DESC')->paginate($request->limit ?? 10);

        return BarangResource::collection($barang);
    }

    public function show($id)
    {
        $barang = Barang::find($id);

        return new BarangResource($barang);
    }

    public function opt()
    {
        return response()->json(Barang::all(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'kode_barang' => 'required',
            'nama_barang' => 'required',
        ]);

        $barang = Barang::create([
            'kode_barang' => $request->kode_barang,
            'nama_barang' => $request->nama_barang,
            // 'harga' => $request->harga,
        ]);

        return response()->json([
            'success' => true,
            'data' => new BarangResource($barang),
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $barang = Barang::find($id);

        $request->validate([
            'kode_barang' => 'required',
            'nama_barang' => 'required',
        ]);

        $barang->update([
            'kode_barang' => $request->kode_barang,
            'nama_barang' => $request->nama_barang,
            // 'harga' => $request->harga,
        ]);

        return response()->json([
            'success' => true,
            'data' => new BarangResource($barang),
        ], 200);
    }

    public function destroy($id)
    {
        $barang = Barang::find($id);

        $barang->delete();

        return response()->json([
            'success' => true,
            'data' => $barang,
        ], 200);
    }
}
