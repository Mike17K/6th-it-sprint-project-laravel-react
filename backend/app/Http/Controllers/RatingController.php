<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RatingController extends Controller
{

    public function index() : Response {
        $rating = Rating::filter()->get();
        return response($rating, 200);
    }

    public function store(Request $request) : Response {
        $request->validate([
            'user_id'=> 'required|integer|exists:users,id',
            'application_id'=> 'required|integer|exists:application,id',
            'rating'=> 'required|float|between:0,5',
        ]);

        $rating = new Rating;
        $rating->event_id = $request['event_id'];
        $rating->text = $request['text'];
        $rating->save();
        return response($rating, 201);
    }

//    show one post by id
    public function show(Rating $rating) : Response {
        return response($rating, 200);
    }

//  update
    public function update(Request $request, Rating $rating) : Response {
        $request->validate([
            'event_id'=> 'required|integer|exists:events,id',
            'text'=> 'required|string',
        ]);

        $rating = new Rating;
        $rating->event_id = $request['event_id'];
        $rating->text = $request['text'];
        $rating->save();

        return response($rating, 200);
    }

//  delete post

    public function destroy(Rating $rating) : Response {
        $rating->delete();
        return response($rating, 204);
    }
}
