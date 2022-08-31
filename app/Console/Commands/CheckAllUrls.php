<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\HttpController;

class CheckAllUrls extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:CheckAllUrls';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check all urls if they are watched.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $Http = new HttpController;
        $Http->startRobot();
    }
}
