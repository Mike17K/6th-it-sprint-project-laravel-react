<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{

    public function index() : Response {
        $question = Question::filter()->get();
        return response($question, 200);
    }

    public function store(Request $request) : Response {
        $request->validate([
            'event_id'=> 'required|integer|exists:events,id',
            'text'=> 'required|string',
        ]);

        $question = new Question;
        $question->event_id = $request['event_id'];
        $question->text = $request['text'];
        $question->save();
        return response($question, 201);
    }

//    show one post by id
    public function show(Question $question) : Response {
        return response($question, 200);
    }

//  update
    public function update(Request $request, Question $question) : Response {
        $request->validate([
            'event_id'=> 'required|integer|exists:events,id',
            'text'=> 'required|string',
        ]);

        $question = new Question;
        $question->event_id = $request['event_id'];
        $question->text = $request['text'];
        $question->save();

        return response($question, 200);
    }

//  delete post

    public function destroy(Question $question) : Response {
        $question->delete();
        return response($question, 204);
    }
}
