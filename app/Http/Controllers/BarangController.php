<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Http\Resources\BarangResource;

class BarangController extends Controller
{
    public function index(Request $request)
    {
        $barang = Barang::paginate($request->limit ?? 10);

        return BarangResource::collection($barang);
    }
}
