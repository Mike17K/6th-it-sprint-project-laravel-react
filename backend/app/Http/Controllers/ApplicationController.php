<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApplicationController extends Controller
{
    public function index() : Response {
        $application = Application::all();

        return response($application, 200);
    }

    public function store(Request $request) : Response {
        $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|string',
            'branch' => 'required|string',
            'event_id'=> 'required|integer|exists:events,id',
        ]);

        $application = new Application;
        $application->name = $request['name'];
        $application->surname = $request['surname'];
        $application->email = $request['email'];
        $application->branch = $request['branch'];
        $application->event_id = $request['event_id'];
        $application->save();
        return response($application, 201);
    }

//    show one post by id
    public function show(Application $application) : Response {
        return response($application, 200);
    }

//  update
    public function update(Request $request, Application $application) : Response {
        $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|string',
            'branch' => 'required|string',
            'event_id'=> 'required|integer|exists:events,id',
        ]);

        $application = new Application;
        $application->name = $request['name'];
        $application->surname = $request['surname'];
        $application->email = $request['email'];
        $application->branch = $request['branch'];
        $application->event_id = $request['event_id'];
        $application->save();

        return response($application, 200);
    }

//  delete post

    public function destroy(Application $application) : Response {
        $application->delete();
        return response($application, 204);
    }
}
