<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PetsExport;
use App\Imports\PetsImport;


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
        return view('pets.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validation = $request->validate([
            'weight'        => ['required', 'numeric'],
            'name'          => ['required', 'string', 'max:255'],
            'kind'          => ['required'],
            'age'           => ['required'],
            'breed'         => ['required'],
            'location'      => ['required'],
            'description'   => ['required']
        ]);
        if ($validation) {
            // dd($request->all());
            if ($request->hasFile('image')) {
                $image = time() . '.' . $request->image->extension();
                $request->image->move(public_path('images'), $image);
            }

            $pet = new Pet();
            $pet->weight            = $request->weight;
            $pet->name              = $request->name;
            $pet->kind              = $request->kind;
            $pet->age               = $request->age;
            $pet->breed             = $request->breed;
            $pet->location          = $request->location;
            $pet->description       = $request->description;
            $pet->image             = $image;
            if ($pet->save()) {
                return redirect('pets')->with('message', value: 'The pet: ' . $pet->name . ' has been updated successfully.');
            }
        }
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
            'description'   => ['required']
        ]);
        if ($validation) {
            // dd($request->all());
            if ($request->hasFile('image')) {
                $image = time() . '.' . $request->image->extension();
                $request->image->move(public_path('images'), $image);
                if ($request->originImage != 'no-image.jpg'); {
                    unlink(public_path('images/') . $request->originImage);
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
        $pet->description       = $request->description;
        $pet->image             = $image;
        if ($pet->save()) {
            return redirect('pets')->with('message', value: 'The pet: ' . $pet->name . ' has been updated successfully.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(pet $pet)
    {
        if($pet->image != 'no-image.png') {
            unlink(public_path('images/').$pet->image);
        }
        if($pet->delete() ) {
            return redirect('pets')->with('message', 'The pet: '.$pet->name.' has been deleted successfully.');
        }
    }

    public function search(Request $request) {
        $pets = Pet::names($request->q)->paginate(20);
        return view('pets.search')->with('pets', $pets);
    }
    public function pdf() {
        $pets = Pet::all();
        $pdf = PDF::loadView('pets.pdf', compact('pets'));
        return $pdf->download('allpets.pdf');
    }

    public function excel() {
        return Excel::download(new PetsExport, 'allpets.xlsx');
    }
}
