<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        if(count($categories)>0 ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'categories'  => $categories,
            'status' => $status,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = [
            'category_name'=> $request->category_name,
            'category_slug'=> $request->category_slug
        ];
        $id = Category::insertGetId($data);
        $category = Category::find($id);
        if($category !="" ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'category'  => $category,
            'status' => $status,
            'message' => 'Post Added Successfully !!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category = Category::find($category->id);
        if($category !="" ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'category'  => $category,
            'status' => $status
        ]);
           
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
          
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $data = [
            'category_name'=> $request->category_name,
            'category_slug'=> $request->category_slug,
            
        ];
        
        $result = Category::where(['id'=>$request->id])->update($data);
        if($result){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'status' => $status,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {   
        if($category->delete() ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'status' => $status,
        ]);
    }
}
