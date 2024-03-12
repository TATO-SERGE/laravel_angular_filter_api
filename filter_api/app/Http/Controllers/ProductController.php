<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
   public function products(){

    $products =Product::select()->get();
    //return $products ;
    //return response()->json(array('products'=>$products));
    //return response()->json(['aproducts'=>$products]);
        if (!empty($products)) {
            return response()->json([
                "Products"=>$products,
                "Message"=>"Products Loaded succesfully!",
                "Status" => 200
            ]);
        }else 
        {
            return response()->json(['Message'=>'Pas de produit disponible dans la base de donnees']);
        }
    }

    public function FetchMultiProds(Request $request){

      if($request->isMethod('post')){

            $data = $request->input();

            foreach($data as $key =>$value){
                $items= Product::join('product_sub_categories','products.id','=','product_sub_categories.product_id')
                ->whereIn('products.id', $data['selected_categories'])
                ->get(['product_sub_categories.title','product_sub_categories.description','product_sub_categories.price']);
            }
            $result=json_encode($items,true);
            return $result;
           
       
       
      }
    }
}

