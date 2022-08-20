<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\User;

class AuthController extends Controller
{
    
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if( !auth()->attempt($request->only('username', 'password')) ){
            return response()->json(['kredensial' => 'username atau password salah'], 401);
        }

        $user = User::where('username', $request->username)->first();

        $token = $user->createToken('token-auth')->plainTextToken;

        return response()->json([
            'user' => new UserResource($user),
            'token' => $token,
        ], 200);
    }

    public function profil(Request $request)
    {
        return new UserResource($request->user());
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'password' => 'nullable',
        ]);

        $user = $request->user();

        $user->update([
            'password' => bcrypt('root123')
        ]);

        return response()->json(['message' => 'berhasil ubah password'], 200);
    }

    public function logout(Request $request)
    {
        // $request->user()->tokens()->delete();
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'berhasil logout'
        ], 200);
    }

}
