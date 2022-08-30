<?php

use App\Http\Controllers\UrlsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', function () {return view('auth/login');});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/url/list', [UrlsController::class, 'getUrlList'])->name('url.list');

Route::post('/get/individual/url/details', [UrlsController::class, 'getUrlDetails'])->name('url.details');

Route::post('/update/url/data', [UrlsController::class, 'updateUrlData']);

Route::delete('/delete/url/data/{url}', [UrlsController::class, 'destroy']);

Route::post('/store/url/data',[UrlsController::class, 'store']);

//Route::get('/admin', [HttpController::class, 'startRobot']); /*APAGAR ROTA*/
