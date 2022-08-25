<?php

use App\Http\Controllers\UrlsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('get/url/list', [UrlsController::class, 'getUrlList'])->name('url.list');
