<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pets = Pet::all();

        if ($pets->isEmpty()) {
            return response()->json(['message' => 'No pets founded!'], 404);
        } else {
            return response()->json([
                'message' => 'Succesfull Query',
                'pets' => $pets
            ], 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validation = $request->validate([
                'name'          => ['required', 'string', 'max:255'],
                'kind'          => ['required'],
                'weight'        => ['required', 'numeric'],
                'age'           => ['required'],
                'breed'         => ['required'],
                'location'      => ['required'],
                'description'   => ['required']
            ]);
            $pet = Pet::create($request->all());
            return response()->json([
                'message' => 'Pet was successfully added!',
                'pet' => $pet
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'Error in the request',
                'errors' => $e->errors()
            ], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $pet = Pet::find($request->id);
        if ($pet) {
            return response()->json([
                'message' => 'successful Query',
                'pet' => $pet
            ], 200);
        } else {
            return response()->json(['message' => 'No pets founded!'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $pet = Pet::find($request->id);
        if ($pet) {
            if ($pet->delete()) {
            return response()->json([
                'message' => 'Pet was successfuly deleted!',
                'pet' => $pet
            ], 200);
        }
        } else {
            return response()->json(['error'=> 'Pet not fund!'],404);
        }
    }
}
