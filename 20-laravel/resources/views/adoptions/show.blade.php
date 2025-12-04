@extends('layouts.dashboard')

@section('title', 'Show Adoptions: Larapets 🐻‍❄')

@section( 'content')
<h1 class="text-4xl text-white flex gap-2 items-center justify-center pb-4 border-b-2 border-neutral-50 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="size-12" fill="currentColor" viewBox="0 0 256 256">
        <path
            d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z">
        </path>
    </svg>
    Show Adoptions
</h1>

{{-- Breadcrumbs --}}
<div class="breadcrumbs text-white text-sm">
    <ul>
        <li>
            <a href="{{ url('dashboard') }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm96-64a40,40,0,1,0,40,40A40,40,0,0,0,176,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,200Z">
                    </path>
                </svg>
                Dashboard
            </a>
        </li>
        <li>
            <a href="{{ url('pets') }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                    </path>
                </svg>
                Adoptions Module
            </a>
        </li>
        <li>
            <span class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z">
                    </path>
                </svg>
                Show Adoptions
            </span>
        </li>
    </ul>
</div>

{{-- Card --}}
<div class="avatar-group mt-8 -space-x-6">
    <div class="avatar">
        <div class="w-36">
            <img src="{{ asset('images/'. $adopts->user->photo) }}" />
        </div>
    </div>
    <div class="avatar">
        <div class="w-36">
            <img src="{{ asset('images/'. $adopts->pet->image) }}" />
        </div>
    </div>
</div>

    {{-- Datos --}}
    <div class="flex   rounded-box  ">
        <ul class="list bg-[#0009] mt-3 text-white rounded-box shadow-md flex">
            <li class="list-row ">
                <div>
                    <div>Name</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->name }}</div>
                </div>
            </li>

            <li class="list-row">
                <div>
                    <div>Kind</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->kind }}</div>
                </div>
            </li>

            <li class="list-row">
                <div>
                    <div>Weight</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->weigth }}</div>
                </div>
            </li>

            <li class="list-row">
                <div>
                    <div>Age</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->age }}</div>
                </div>
            </li>
        </ul>

        <ul class="list bg-[#0009] mt-4 text-white rounded-box shadow-md w-50 ">
            <li class="list-row">
                <div>
                    <div>Breed</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->breed }}</div>
                </div>
            </li>

            <li class="list-row">
                <div>
                    <div>Location</div>
                    <div class="text-xs uppercase font-semibold opacity-60">{{ $adopts->pet->location }}</div>
                </div>
            </li>

            <li class="list-row">
                <div>
                    <div>Active</div>
                    <div class="text-xs opacity-60">
                        @if($adopts->pet->active == 1)
                        <div class="badge badge-outline badge-success">Active</div>
                        @else
                        <div class="badge badge-outline badge-error">Inactive</div>
                        @endif
                    </div>
                </div>
            </li>

            <li class="list-row">
                <div class="">
                    <div>Status
                        <div class="text-xs">
                        @if($adopts->pet->status == 0)
                        <div class="badge badge-outline badge-warning">No Adopted</div>
                        @else
                        <div class="badge badge-outline badge-accent">Adopted</div>
                        @endif
                        </div>
                    </div>
                </div>
   </li>

            <li class="list-row">
                <div>
                    <div>Description</div>
                    <div class="text-xs uppercase font-semibold opacity-60 ">
                        <span class="">{{ $adopts->pet->description }}</span>
                    </div>
                </div>
            </li>
            
        </ul>
        
    </div>

</div>
@endsection