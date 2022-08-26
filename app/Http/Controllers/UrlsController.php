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
        try
        {
            $urls = Url::orderBy('id', 'DESC')->get();
            return response()->json($urls);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Pega as informações de cada url
     */
    public function getUrlDetails(Request $request)
    {
        try
        {
            $urlData = Url::findOrFail($request->get('urlId'));
            return response()->json($urlData);
        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }
}
