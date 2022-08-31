<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\Log;
use App\Models\Url;
use Illuminate\Support\Facades\Http;


class HttpController extends Controller
{

    private $urls;

    public function startRobot()
    {
        try {
            $this->checkUrlList();
        } catch (Exception $e) {
            echo $e->getMessage();
            Log::channel('robot_url')->error($e);
        }
    }


    private function checkUrlList()
    {
        // Get all URL with accessed = 0
        $this->urls = Url::where('acessado', '0')->orderBy('id', 'ASC')->select(array('id', 'url'))->get();

        try {
            // make http request to url id='x'
            foreach ($this->urls as $val) {
                echo ($val);
                $var_to_see_url = $val->url;
                $id_url = $val->id;

                $response = Http::get($var_to_see_url);
                $status_code = $response->status();
                $corpo_html = $response->body();
                try {


                    // change the accessed from the url id='x' to 1 and change the status_code and body_html of the url id='x'
                    Url::where('id', $id_url)->update([
                        'acessado' =>  1,
                        'status_code' => utf8_encode($status_code),
                        'corpo_html' => utf8_encode($corpo_html),
                    ]);

                    //log
                    Log::channel('robot_url')->info("Acessado os dados da URL {$var_to_see_url} ");
                } catch (Exception $e) {
                    echo $e->getMessage();
                    Log::channel('robot_url')->error($e);
                }
            }
            return;
        } catch (Exception $e) {
            echo $e->getMessage();
            Log::channel('robot_url')->error($e);
        }
    }
}
