<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Url;

class UrlsController extends Controller
{
    // GET URL list from database

    public function getUrlList()
    {
        try {
            $url = Url::orderBy('id','DESC')->get();
            return response()->json($url);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
