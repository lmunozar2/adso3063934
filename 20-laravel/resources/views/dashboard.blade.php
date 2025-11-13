@extends('layouts.dashboard')
@section('title', 'Dashboard: Larapets🐕‍🦺')

@section('content')
    <h1>Dashboard</h1>
    <h2>{{ Auth::user()->fullname }}</h2>
    <h3>You're logged in!</h3>
    
   
@endsection