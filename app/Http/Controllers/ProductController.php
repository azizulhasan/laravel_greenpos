<?php

namespace App\Http\Controllers;

use App\Product;
use App\SubCategory;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        $sub_categories = SubCategory::all();
        $categories = Category::all();

        if(count($products)>0 ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'products'  => $products,
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
       
       
            $featured_image =  $request->file('featured_image')->getClientOriginalName();
            $featured_image =  time().'_'.$this->generateRandomString(10)."_".$featured_image;
            $request->featured_image->storeAs('products/featured_image' , $featured_image , 'public' );

            

            // gallery1
            $gallery1 =  $request->gallery[0]->getClientOriginalName();
            $gallery1=  time().'_'.$this->generateRandomString(10)."_".$gallery1;
            $request->gallery[0]->storeAs('products/gallery' , $gallery1 , 'public' );
            
            // gallery2
            $gallery2 =  $request->gallery[1]->getClientOriginalName();
            $gallery2=  time().'_'.$this->generateRandomString(10)."_".$gallery2;
            $request->gallery[1]->storeAs('products/gallery' , $gallery2 , 'public' );


            // gallery3
            $gallery3 =  $request->gallery[2]->getClientOriginalName();
            $gallery3=  time().'_'.$this->generateRandomString(10)."_".$gallery3;
            $request->gallery[2]->storeAs('products/gallery' , $gallery3 , 'public' );

            // gallery4
            $gallery4 =  $request->gallery[3]->getClientOriginalName();
            $gallery4=  time().'_'.$this->generateRandomString(10)."_".$gallery4;
            $request->gallery[3]->storeAs('products/gallery' , $gallery4 , 'public' );
        

        
         $data=[
            'product_name'       => $request->product_name,
            'product_description'=> $request->product_description,
            'product_price'      =>$request->product_price,
            'category_id'        => $request->category_id,
            'sub_category_id'    => $request->sub_category_id,
            'featured_image'     => $featured_image,
            'gallery_1'        => $gallery1,
            'gallery_2'        => $gallery2,
            'gallery_3'        => $gallery3,
            'gallery_4'        => $gallery4,

        ];
        $id = Product::insertGetId($data);
        $product = Product::find($id);
        if($product !='' ){
            $status = 'success';
        }else{
            $status = 'error';
        }
        return response()->json([
            'product'=> $product,
            'status' => $status,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
    protected function generateRandomString($length = 2) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
