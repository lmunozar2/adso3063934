<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;


class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pets = Pet::orderBy('id', 'desc')->paginate(10);

        return view('pets.index')->with('pets', $pets);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pet $pet)
    {
        return view('pets.show')->with('pet', $pet);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pet $pet)
    {
        return view('pets.edit')->with('pet', $pet);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pet $pet)
    {
        // dd($request->all());
       $validation = $request->validate([
            'weight'        => ['required', 'numeric'],
            'name'          => ['required', 'string', 'max:255'],
            'kind'          => ['required'],
            'age'           => ['required'],
            'breed'         => ['required'],
            'location'      => ['required'],
        ]);
        if($validation)
        {
            // dd($request->all());
            if($request->hasFile('image')) {
                $image = time().'.'.$request->image->extension();
                $request->image->move(public_path('images'), $image);
                if($request->originImage != 'no-image.jpg');
                {
                    unlink(public_path('images/'). $request->originImage);
                }
            } else {
                    $image = $request->originImage;
                }

        }

        $pet->weight            = $request->weight;
        $pet->name              = $request->name;
        $pet->kind              = $request->kind;
        $pet->age               = $request->age;
        $pet->breed             = $request->breed;
        $pet->location          = $request->location;
        $pet->image             = $image;
        if($pet->save())
        {
            return redirect('pets')->with('message', value: 'The pet: '.$pet->name.' has been updated successfully.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
}
