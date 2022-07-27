@extends('layouts.app')

@section('content')
<a href="{{url()->previous()}}" class="btn btn-info mb-3 ms-3">Back</a>

<div class="d-flex">
    @include('admin/partials/side-nav')

    <div class="container">
        <img src="{{$post->image}}" alt="">
        <h1>{{$post->title}}</h1>
        <p>{{$post->content}}</p>
        <div>Category:{{$post->category->name}}</div>
        <span>Tags:</span>
        @foreach($post->tags as $tag)
            <span>{{ $tag->name }}</span>
            @if(!$loop->last) , @endif
        @endforeach
    </div>

    <div id="buttons">
        <button class="btn btn-success mb-3"><a href="{{route('admin.posts.edit', ['post' => $post])}}">Edit</a></button>
        <button class="btn btn-danger js-delete"><a>Delete</a></button>
    </div>

    <section class="overlay d-none">

            <form class="popup" action="{{route('admin.posts.destroy', ['post'=> $post])}}" method="post">
            @csrf
            @method('delete')
            <h4>Vuoi eliminare questo elemento?</h4>
            <button type="submit" class="btn btn-success js-yes">SI</button>
            <button type="button" class="btn btn-danger js-no">NO</button>
            </form>

    </section>

</div>


@endsection
