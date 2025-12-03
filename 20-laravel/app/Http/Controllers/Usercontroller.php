<?php

namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UsersExport;
use App\Imports\UsersImport;

class Usercontroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$users = User::all();
        $users = User::orderBy('id', 'desc')->paginate(20);
        //dd($users->toArray());
        return view('users.index')->with('users', $users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return view('users.create');  
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       // dd($request->all());
       $validation = $request->validate([
            'document' => ['required', 'numeric', 'unique:' .User::class],
            'fullname' => ['required', 'string', 'max:255'],
            'gender' => ['required'],
            'birthdate' => ['required', 'date'],
            'photo' => ['required', 'image'],
            'phone' => ['required'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed'],
        ]);
        if($validation)
        {
            //dd($request->all());
            if($request->hasFile('photo')) {
                $photo = time().'.'.$request->photo->extension();
                $request->photo->move(public_path('images'), $photo);
            }
        }

        $user =new User();
        $user->document  = $request->document;
        $user->fullname  = $request->fullname;
        $user->gender    = $request->gender;
        $user->birthdate = $request->birthdate;
        $user->photo     = $photo;
        $user->phone     = $request->phone;
        $user->email     = $request->email;
        $user->password  = bcrypt($request->password);

        if($user->save()) {
            return redirect('users')->with('message', value: 'The user: '.$user->fullname.' has been created successfully.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(user $user)
    {
       return view('users.show')->with('user',$user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(user $user)
    {
        return view('users.edit')->with('user',$user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, user $user)
    {
        // dd($request->all());
       $validation = $request->validate([
            'document' => ['required', 'numeric', 'unique:' .User::class.',document,'. $user->id],
            'fullname' => ['required', 'string', 'max:255'],
            'gender' => ['required'],
            'birthdate' => ['required', 'date'],
            'phone' => ['required'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class. ',email,'. $user->id],
        ]);
        if($validation)
        {
            //dd($request->all());
            if($request->hasFile('photo')) {
                $photo = time().'.'.$request->photo->extension();
                $request->photo->move(public_path('images'), $photo);
                if($request->originphoto != 'no-photo.png') {
                    unlink(public_path('images/').$request->originphoto);
                }
                else {
                    $photo = $request->originphoto;
                }
            }
        }

        $user->document  = $request->document;
        $user->fullname  = $request->fullname;
        $user->gender    = $request->gender;
        $user->birthdate = $request->birthdate;
        $user->photo     = $photo;
        $user->phone     = $request->phone;
        $user->email     = $request->email;

        if($user->save()) {
            return redirect('users')->with('message', value: 'The user: '.$user->fullname.' has been edited successfully.');
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user $user)
    {
        if($user->photo != 'no-photo.png') {
            unlink(public_path('images/').$user->photo);
        }
        if($user->delete() ) {
            return redirect('users')->with('message', 'The user: '.$user->fullname.' has been deleted successfully.');
        }
    }

    public function search(Request $request) {
        $users = User::names($request->q)->paginate(20);
        return view('users.search')->with('users', $users);
    }

    // Export Users PDF 
    public function pdf() {
        $users = User::all();
        $pdf = PDF::loadView('users.pdf', compact('users'));
        return $pdf->download('allusers.pdf');
    }

    // Export Users EXCEL 
    public function excel() {
        return Excel::download(new UsersExport, 'allusers.xlsx');
    }

    // Import Users EXCEL
    public function import(Request $request) {
        $file = $request->file('file');
        Excel::import(new UsersImport, $file);
        return redirect()->back()->with('message', 'Users imported successfully');
    }
}
