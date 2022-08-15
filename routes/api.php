<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', 'AuthController@login');
Route::get('profil', 'AuthController@profil')->middleware('auth:sanctum');
Route::post('logout', 'AuthController@logout')->middleware('auth:sanctum');

Route::prefix('barang')->middleware('auth:sanctum')->group(function(){
    Route::get('/', 'BarangController@index');
    Route::get('/{id}/show', 'BarangController@show');
    Route::post('/store', 'BarangController@store');
    Route::post('/{id}/update', 'BarangController@update');
    Route::delete('/{id}/delete', 'BarangController@destroy');
});

Route::prefix('aktual')->middleware('auth:sanctum')->group(function(){
    Route::get('/', 'AktualController@index');
    Route::get('/{aktual}/show', 'AktualController@show');
    Route::post('/store', 'AktualController@store');
    Route::post('/{aktual}/update', 'AktualController@update');
    Route::delete('/{aktual}/delete', 'AktualController@destroy');
});

Route::prefix('peramalan')->middleware('auth:sanctum')->group(function(){
    Route::get('/get-wma', 'PeramalanController@getWma');
});
