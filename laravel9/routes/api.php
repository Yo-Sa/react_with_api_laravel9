<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('posts', PostController::class);

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');

// Route::middleware(['api','cors'])->group(function () {
//     Route::get('/posts', 'PostController@index');
//     Route::get('/posts/{post}', 'PostController@show');
//     Route::post('/posts', 'PostController@store');
//     Route::get('sample', function () { echo 'sample api'; });
// });
