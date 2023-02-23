<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            /*
             'title' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'thumbnail' => $this->faker->imageUrl,
            'user_id' => 1,
//            we have to seed categories before categories
             * */
            'name'=> $this->faker->name,
            'surname'=> $this->faker->word,
            'email'=> $this->faker->email,
            'branch' => $this->faker->word,//LC + rnd word!
            'event_id' =>  1,//LC + rnd word!
        ];
    }
}
