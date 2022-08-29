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
        print_r('oi HttpController');
        try {
            $this->checkUrlList();
            return print_r('vim');
        } catch (Exception $e) {
            Log::error($e);
        }
    }


    private function checkUrlList()
    {
        // Get all URL with accessed = 0
        $this->urls = Url::where('acessado', '0')->orderBy('id', 'ASC')->select(array('id', 'url'))->get();

        echo ($this->urls . '<br>');
        try {
            // make http request to url id='x'
            foreach ($this->urls as $val) {
                echo ($val);
                $var_to_see_url = $val->url;
                $id_url = $val->id;

                $response = Http::get($var_to_see_url);
                $status_code = $response->status();
                $corpo_html = $response->body();

                // change the accessed from the url id='x' to 1 and change the status_code and body_html of the url id='x'
                Url::where('id', $id_url)->update([
                    'acessado' =>  1,
                    'status_code' => utf8_encode($status_code),
                    'corpo_html' => utf8_encode($corpo_html),
                ]);
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
