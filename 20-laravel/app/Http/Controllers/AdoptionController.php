<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adopts = Adoption::orderBy('id', 'DESC')->paginate(20);

        return view('adoptions.index')->with('adopts', $adopts);
    }

    public function show(Request $request)
    {
        $adopts = Adoption::find($request->id);
        return view('adoptions.show')->with('adopts', $adopts);
    }

   
   

   

    
    
}
