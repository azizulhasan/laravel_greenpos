import React, { Component } from 'react'

export default class ProductModal extends Component {
    render() {
        return (
            <div>
<div className="modal fade " id="product_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add New Product</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <form id="validationform" method='post' encType="multipart/form-data" action="{{url('dashboard/products')}}" data-parsley-validate="" noValidate="">

       
                    <div className="form-group row">
                        <div className="col-12">
                            <input type="text"  name="name" required="" placeholder="Product Title" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <input type="number"  name="price" required="" placeholder="Product Price" className="form-control"/>
                        </div>
                        <div className="col-4">
                            <input type="number"  name="old_price" required="" placeholder="Product Old Price" className="form-control"/>
                        </div>
                        <div className="col-4">
                            <input type="number"  name="discount_percent" required="" placeholder="Discount Percent" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12">
                            <textarea name="detail" className="form-control" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-3">
                            <select name="category_id" id="category_id"  className="form-control">
                                <option value="0">Select Category</option>
                                
                            </select>
                        </div>
                        <div className="col-3">
                            <select name="sub_category_id" id="sub_category_id" className="form-control">
                            <option value="">Select Sub Category</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select name="unit_id"  className="form-control">
                                <option value="0">Select Unit</option>
                                
                            </select>
                        </div>
                        <div className="col-3">
                            <select name="brand_id"  className="form-control">
                                <option value="0">Select Brand</option>
                               
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-6 "> 
                            <select name="size_id" className="form-control">
                                <option value="0">Select Size</option>
                                
                            </select>
                        </div>
                        <div className="col-6 ">
                            <select name="color_id"   className="form-control">
                                <option value="0">Select Color</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 ">
                        <label htmlFor="default_picture"> Default Picture</label>
                            <input type="file"  name="default_picture" required=""   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group p-0 m-0 row">
                        <div className="col-12 p-0 m-0">
                    <label htmlFor="upload_file"> Gallery Picture Max 4 Image</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8">
                        <input type="file" id="upload_file" name="upload_file[]"  multiple />
                        </div>
                        <div className="col-4">
                        <input type="button" id="remove_image" className="btn btn-danger" value="Remove Image"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12 ">
                            <ul id="image_preview"></ul>
                        </div>
                    </div>
                    </form>  
            </div>
            
      </div>
      <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" id="btn_save" className="btn btn-primary">Save</button> 
      </div>
      
    </div>
  </div>
</div>


            </div>
        )
    }
}
