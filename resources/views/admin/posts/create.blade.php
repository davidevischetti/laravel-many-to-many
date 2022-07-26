@extends('layouts.app')

@section('content')
<a href="{{url()->previous()}}" class="btn btn-info mb-3 ms-3">Back</a>

<div class="d-flex">
    @include('admin/partials/side-nav')

    <form class="container" action="{{route('admin.posts.store')}}" method="post">
        @csrf
        <div class="mb-3">
            <label class="form-label" for="title">title</label>
            <input class="form-control" type="text" name="title" id="title" value="{{old('title')}}">
            @error('title')
                <div class="alert alert-danger" role="alert">
                    {{$message}}
                </div>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label" for="slug">slug</label>
            <input class="form-control" type="text" name="slug" id="slug" value="{{old('slug')}}">
            @error('slug')
                <div class="alert alert-danger" role="alert">
                    {{$message}}
                </div>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label" for="image">image</label>
            <input class="form-control" type="url" name="image" id="image" value="{{old('image')}}">
            @error('image')
                <div class="alert alert-danger" role="alert">
                    {{$message}}
                </div>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label" for="content">content</label>
            <textarea class="form-control" name="content" id="content" value="{{old('content')}}"></textarea>
            @error('content')
            <div class="alert alert-danger" role="alert">
                {{$message}}
            </div>
            @enderror
        </div>
        <div class="mb-3">
            <label class="form-label" for="excerpt">excerpt</label>
            <textarea class="form-control" name="excerpt" id="excerpt" value="{{old('excerpt')}}"></textarea>
            @error('excerpt')
            <div class="alert alert-danger" role="alert">
                {{$message}}
            </div>
            @enderror
        </div>

        <div class="mb-3">

            <select name="category_id" id="category_id">
                <option disabled value="">Select the post category...</option>
                @foreach ($categories as $category)
                    <option value="{{$category->id}}">{{$category->name}}</option>
                @endforeach
            </select>
            @error('category_id')
            <div class="alert alert-danger" role="alert">
                {{$message}}
            </div>
            @enderror
        </div>

        {{-- <div class="mb-3">
            <label class="form-label" for="tag">tag</label>

            @error('tag')
            <div class="alert alert-danger" role="alert">
                {{$message}}
            </div>
            @enderror
        </div> --}}

        <button type="submit" class="btn btn-primary">Add</button>
    </form>

</div>


@endsection
