<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AnswerController extends Controller
{
    public function index() : Response {
        $answer = Answer::all();
        //$post = Post::all();
        return response($answer, 200);
    }

    public function store(Request $request) : Response {
        $request->validate([
            'application_id'=> 'required|integer|exists:applications,id',
            'question_id'=> 'required|integer|exists:questions,id',
            'text'=> 'required|text',
        ]);

        $answer = new Answer;
        $answer->application_id = $request['application_id'];
        $answer->question_id = $request['question_id'];
        $answer->text = $request['text'];
        $answer->save();
        return response($answer, 201);
    }

//    show one post by id
    public function show(Answer $answer) : Response {
        return response($answer, 200);
    }

//  update
    public function update(Request $request, Answer $answer) : Response {
        $request->validate([
            'application_id'=> 'required|integer|exists:applications,id',
            'question_id'=> 'required|integer|exists:questions,id',
            'text'=> 'required|text',
        ]);

        $answer = new Answer;
        $answer->application_id = $request['application_id'];
        $answer->question_id = $request['question_id'];
        $answer->text = $request['text'];
        $answer->save();

        return response($answer, 200);
    }

//  delete post

    public function destroy(Answer $answer) : Response {
        $answer->delete();
        return response($answer, 204);
    }
}
