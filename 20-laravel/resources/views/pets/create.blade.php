@extends('layouts.dashboard')

@section('title', 'Add Pets: Larapets 🐻‍❄')

@section( 'content')
<h1 class="text-4xl text-white flex gap-2 items-center justify-center pb-4 border-b-2 border-neutral-50 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="size-12" fill="currentColor" viewBox="0 0 256 256">
        <path
            d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z">
        </path>
    </svg>
    Add Pets
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
                Pets Module
            </a>
        </li>
        <li>
            <span class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z">
                    </path>
                </svg>
                Add Pets
            </span>
        </li>
    </ul>
</div>

<div class="card text-white md:w-[720px] w-[320px]">
    <form method="POST" action="{{ url('pets') }}" class="flex flex-col md:flex-row gap-4 mt-4"
        enctype="multipart/form-data">
        @csrf
        <div class="w-full md:w-[320px]">
            <div
                class="avatar flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-110 transition ease-in">
                <div id="upload" class="mask mask-squircle w-48">
                    <img id="preview" src="{{ asset('images/no-image.png') }}" />
                </div>
                <small class="pb-0 border-white border-b flex gap-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,123.31V184a8,8,0,0,1-16,0V123.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z">
                        </path>
                    </svg>
                    Upload image
                </small>
            </div>
            <input type="file" id="image" name="image" class="hidden" accept="image/">
        </div>

        <div class="w-full md:w-[320px]">

            {{-- Name --}}
            <label class="label text-white"><strong>Name:</strong></label>
            <input type="text" class="input bg-[#0009]" name="name" placeholder="Pancho"
                value="{{ old('name') }}" />
            @error('name')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            {{-- Kind --}}
            <label class="label text-white"><strong>Kind:</strong></label>
                <select name="kind" class="select bg-[#0009]">
                    <option value="">Select...</option>
                    <option value="Dog" @if(old('kind')=='dog' ) selected @endif>Dog</option>
                    <option value="Cat" @if(old('kind')=='cat' ) selected @endif>Cat</option>
                    <option value="Pig" @if(old('kind')=='pig' ) selected @endif>Pig</option>
                    <option value="Parrot" @if(old('kind')=='parrot' ) selected @endif>Parrot</option>
                </select>
            @error('kind')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            {{-- Weight --}}
            <label class="label text-white"><strong>Weight:</strong></label>
            <input type="text" class="input bg-[#0009]" name="weight" placeholder="16"
                value="{{ old('weight') }}" />
            @error('weight')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror
        </div>

        <div class="w-full md:w-[320px] text-white">

            {{-- Age --}}
            <label class="label text-white"><strong>Age:</strong></label>
            <input type="text" class="input bg-[#0009]" name="age" placeholder="55"
                value="{{ old('age') }}" />
            @error('age')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            {{-- Breed --}}
            <label class="label text-white"><strong>Breed:</strong></label>
            <input type="text" class="input bg-[#0009]" name="breed" placeholder="labrador"
                value="{{ old('breed') }}" />
            @error('breed')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            {{-- Location --}}
            <label class="label text-white"><strong>Location:</strong></label>
            <input type="text" class="input bg-[#0009]" name="location" placeholder="Panama" />
            @error('location')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            {{-- Description --}}
            <label class="label text-white"><strong>Description:</strong></label>
            <input type="text" class="input bg-[#0009]" name="description" placeholder="Perrito bonito" />
            @error('location')
            <small class="badge badge-error w-full mt-1 text-xs py-4">
                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)"
                            fill="currentColor" stroke-width="0"></rect>
                        <path
                            d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                            stroke-width="0" fill="currentColor"></path>
                    </g>
                </svg>
                {{ $message }}
            </small>
            @enderror

            


            <button class="btn btn-outline hover:bg-[#fff9] hover:text-white w-full mt-4">Add</button>
        </div>
    </form>
</div>
@endsection

@section( 'js')
<script>
    $(document).ready(function (){
        $('#upload').click(function (e) {
            e.preventDefault()
            $('#image').click()
        })
        $('#image').change(function (e) {
            e.preventDefault()
            $('#preview').attr('src', window.URL.createObjectURL($(this).prop('files')[0]))
        })
    })
</script>
@endsection