<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Url;

class UrlsController extends Controller
{
    // Pega a lista de URL do banco de dados.

    public function getUrlList()
    {
        try {
            $urls = Url::orderBy('id', 'DESC')->get();
            return response()->json($urls);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Pega as informações de cada URL
     */
    public function getUrlDetails(Request $request)
    {
        try {
            $urlData = Url::findOrFail($request->get('urlId'));
            return response()->json($urlData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Atualiza a URL
     */
    public function updateUrlData(Request $request)
    {
        try {
            $urlId = $request->get('urlId');
            $urlName = $request->get('urlName');
            $urlAcessado = $request->get('urlAcessado');

            Url::where('id', $urlId)->update([
                'url' => $urlName,
                'acessado' => $urlAcessado
            ]);

            return response()->json([
                'url' => $urlName,
                'acessado' => $urlAcessado
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Deleta URL
     */

    public function destroy(Url $url)
    {
        try {
            $url->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Salva nova URL
     */

    public function store(Request $request)
    {
        try {
            $urlName = $request->get('urlName');
            $urlAcessado = $request->get('urlAcessado');

            URL::create([
                'url'   =>  $urlName,
                'acessado'          =>  $urlAcessado
            ]);

            return response()->json([
                'url'   =>  $urlName,
                'acessado' =>  $urlAcessado
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
