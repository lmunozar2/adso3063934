<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Pet;
use App\Models\Adoption;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    // My Profile
    public function myprofile()
    {
        $user = User::find(Auth::user()->id);
        //dd($user->toArray());
        return view('customer.myprofile')->with('user', $user);
    }

    public function updatemyprofile(Request $request)
    {
        // dd($request->all());
        $validation = $request->validate([
            'document'  => ['required', 'numeric', 'unique:' . User::class . ',document,' . $request->id],
            'fullname'  => ['required', 'string'],
            'gender'    => ['required'],
            'birthdate' => ['required', 'date'],
            'phone'     => ['required'],
            'email'     => ['required', 'lowercase', 'email', 'unique:' . User::class . ',email,' . $request->id],
        ]);
        if ($validation) {
            //dd($request->all());
            if ($request->hasFile('photo')) {
                $photo = time() . '.' . $request->photo->extension();
                $request->photo->move(public_path('images'), $photo);
                if ($request->originphoto != 'no-photo.png') {
                    unlink(public_path('images/') . $request->originphoto);
                }
            } else {
                $photo = $request->originphoto;
            }
        }

        $user = User::find($request->id);
        $user->document  = $request->document;
        $user->fullname  = $request->fullname;
        $user->gender    = $request->gender;
        $user->birthdate = $request->birthdate;
        $user->photo     = $photo;
        $user->phone     = $request->phone;
        $user->email     = $request->email;
        $user->save();

        if ($user->save()) {
            return redirect('dashboard')->with('message', 'My profile was successfully edited!');
        }
    }


    // My Adoptions
    public function myadoptions()
    {
        $adopts = Adoption::where('user_id', Auth::user()->id)->get();
        //dd($adopts->toArray());
        return view('customer.myadoptions')->with('adopts', $adopts);
    }

    public function showadoption(Request $request)
    {
        $adopt = Adoption::find($request->id);
        //dd($adopt->toArray());
        return view('customer.showadoption')->with('adopt', $adopt);
    }


    // Make Adoption 
    public function listpets()
    {
        $pets = Pet::where('status', 0)->orderBy('id', 'DESC')->paginate(20);
        return view('customer.makeadoption')->with('pets', $pets);
    }

    public function confirmadoption(Request $request)
    {
        $pet = Pet::find($request->id);
        //dd($adopt->toArray());
        return view('customer.confirmadoption')->with('pet', $pet);
    }

    public function makeadoption(Request $request)
    {
         // Validar datos
    $validation = $request->validate([
        'pet_id'  => ['required', 'numeric', 'exists:pets,id'],
        'user_id' => ['required', 'numeric', 'exists:users,id'],
    ]);

    if ($validation)
    {
        // 1. Verificar si la mascota ya está adoptada
        $pet = Pet::find($request->pet_id);

        if ($pet->status === 1) {
            return redirect()->back()->with('error', 'Esta mascota ya fue adoptada.');
        }

        // 2. Crear objeto Adoption como haces con User
        $adopt = new Adoption();
        $adopt->pet_id  = $request->pet_id;
        $adopt->user_id = $request->user_id;

        // 3. Guardar adopción
        if ($adopt->save())
        {
            // 4. Actualizar estado de la mascota
            $pet->status = 1;
            $pet->save();

            return redirect('myadoptions')->with('success', '¡Mascota adoptada correctamente!');
        }
    }

    return redirect()->back()->with('error', 'No se pudo completar la adopción.');
    }

    public function search(Request $request)
    {
        $pets = Pet::kinds($request->q)->orderBy('id', 'DESC')->paginate(20);
        return view('customer.search')->with('pets', $pets);
    }
}