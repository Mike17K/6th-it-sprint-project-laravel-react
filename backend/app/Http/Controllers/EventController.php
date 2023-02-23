<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    public function index() : Response {
        $event = Event::filter()->get();
        return response($event, 200);
    }

    public function store(Request $request) : Response {
        $request->validate([
            'name' => 'required|string',
        ]);

        $event = new Event;
        $event->name = $request['name'];
        $event->save();
        $event->users()->attach($request['user_ids']);
        return response($event, 201);
    }

//    show one post by id
    public function show(Event $event) : Response {
        return response($event, 200);
    }

//  update
    public function update(Request $request, Event $event) : Response {
        $request->validate([
            'name' => 'required|string',
        ]);

        $event->name = $request['name'];
        //deal with sourcing
        $event->save();

        return response($event, 200);
    }

//  delete post

    public function destroy(Event $event) : Response {
        $event->delete();
        return response($event, 204);
    }

}
