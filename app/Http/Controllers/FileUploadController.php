<?php

namespace App\Http\Controllers;

use Smalot\PdfParser\Parser;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {

        $head = collect([
            'CtrlNo',
            'ORSDate',
            'ORS#',
            'Office',
            'Payee',
            'Account Name',
            'Account Code',
            'Amount Remarks'
        ]);
        $in = new Parser();
        $re = $in->parseFile($request->file);
        $transfrom = explode("\n", $re->getText());
        $record = collect($transfrom);

        // $header = $record->first(function ($val, $key) {
        //     return strpos($val, 'CtrlNoORSDate') === 0;
        // });
        // $parts = explode("\t", $header);
        // $firstPart = str_replace(" ", "\t", $parts[0]);
        // $result = preg_replace('/(CtrlNo)(ORSDate)/', "$1\t$2", $firstPart);
        // $output = $result . "\t" . implode("\t", array_slice($parts, 1));
        $rec = $record->search(function (string $item, int $key) {
            return strpos($item, 'CtrlNoORSDate') === 0;
        });
        // $rec = $record->skipUntil(function (int $item, int $key) {
        //     return strpos($item, 'CtrlNoORSDate');
        // });
        dd($record->slice($rec + 1));
    }
}
