<?php

namespace App\Http\Controllers;

use App\SubCategory;
use App\Category;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sub_categories = SubCategory::all();
        $categories = Category::all();

        if(count($sub_categories)>0 ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'sub_categories'  => $sub_categories,
            'categories'=> $categories,
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
            'sub_category_name'=> $request->sub_category_name,
            'sub_category_slug'=> $request->sub_category_slug,
            'category_id'       => $request->category_id
        ];
        $id = SubCategory::insertGetId($data);
        $sub_category = SubCategory::find($id);
        if($sub_category !="" ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'sub_category'  => $sub_category,
            'status' => $status,
            'message' => 'Sub Category Added Successfully !!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SubCategory $subCategory)
    {
        $sub_category = SubCategory::find($subCategory->id);
        if($sub_category !="" ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'sub_category'  => $sub_category,
            'status' => $status
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(SubCategory $subCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubCategory $subCategory)
    {
        $data = [
            'sub_category_name'=> $request->sub_category_name,
            'sub_category_slug'=> $request->sub_category_slug,
            'category_id'       => $request->edit_category_id
        ];
        
        $result = SubCategory::where(['id'=>$request->id])->update($data);
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
     * @param  \App\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubCategory $subCategory)
    {
        if($subCategory->delete() ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'status' => $status,
        ]);
    }
}
