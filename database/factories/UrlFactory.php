<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Url>
 */
class UrlFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

            'user_id'       => $this->faker->numberBetween(1,5),
            'url'           => $this->faker->url(),
            'acessado'      => $this->faker->boolean(),
            'status_code'   => $this->faker->numberBetween(0,1),
            'corpo_html'    => $this->faker->url()
        ];
    }
}
