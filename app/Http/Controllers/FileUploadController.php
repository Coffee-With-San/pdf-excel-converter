<?php

namespace App\Http\Controllers;

use Smalot\PdfParser\Parser;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        // dd($request->all());
        $in = new Parser();
        $re = $in->parseFile($request->file);
        dd($re->getText());
    }
}
