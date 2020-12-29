import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

export default class ProductAdd extends Component {
    
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.productSubmitHandler = this.productSubmitHandler.bind(this);
        this.removeProductyHandler = this.removeProductyHandler.bind(this);
        this.updateProductHandler = this.updateProductHandler.bind(this);
        this.editProduct           =   this.editProduct.bind(this);
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
        this.checkGalleryLength    = this.checkGalleryLength.bind(this)
        this.productAddHandler     = this.productAddHandler.bind(this);
        this.submitUrl              = this.submitUrl.bind(this)
        
        this.state = {
            product_name: '',
            product_id : '',
            product_description:'',
            product_price:'',
            category_id: '',
            sub_category_id: '',
            featured_image:'',
            gallery:[],
            categories : [],
            products:[],
            sub_categories : [],
            dataLoaded: false,
            isDirty     : false,
        };
    }

    submitUrl(e) {
        // e.preventDefault();
        // if(this.state.product_id == ''){
        //     this.productSubmitHandler()
        //     // console.log('submit')
        // }else{
        //     this.updateProductHandler()
        //     // console.log('update')
        // }
    }

    productAddHandler(){
        // clear previous data
        document.getElementById('image_preview').innerHTML=''
        document.getElementById('product_name').value = '';
        document.getElementById('product_id').value = '';
        document.getElementById('product_description').value = '';
        document.getElementById('product_price').value = '';
        document.getElementById('category_id').value = '';
        document.getElementById('sub_category_id').value = '';
        document.getElementById('featured_image_preview').innerHTML = '';
        document.getElementById('featured_image').value = '';
        document.getElementById('gallery').value = '';
            this.setState({product_id:''})
    }

    onChangeHandler(e){
    let product_name = document.getElementById('product_name').value;
    let product_description = document.getElementById('product_description').value;
    let product_price = document.getElementById('product_price').value;
    let category_id = document.getElementById('category_id').value;
    let sub_category_id = document.getElementById('sub_category_id').value;
    let featured_image = document.getElementById('featured_image').files[0];
        this.setState({
            product_name: product_name,
            product_description:product_description,
            product_price: product_price,
            category_id: category_id,
            sub_category_id:sub_category_id,
            featured_image:featured_image,
        });
        
    }

    uploadMultipleFiles(e){
        this.setState({ gallery: [...this.state.gallery, ...e.target.files] })
        setTimeout(() => {
            this.checkGalleryLength()
        }, 100);

        console.log(this.state.gallery)
    }
    checkGalleryLength(){
        if(this.state.gallery.length !=4){
            this.setState({gallery:[]})
             document.getElementById('gallery').value='';
            alert("please upload only 4 image.")
            return false;
        }else{
            return true;
        }
    }

    productSubmitHandler(e){
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var data = new FormData();
        data.append('product_name', this.state.product_name);
        data.append('product_description',this.state.product_description );
        data.append('product_price', this.state.product_price);
        data.append('category_id',this.state.category_id );
        data.append('sub_category_id', this.state.sub_category_id);
        data.append('featured_image', this.state.featured_image);

        this.state.gallery.forEach((image_file) => {
            data.append('gallery[]', image_file);
        });
        
        axios.post('/products',data
        ).then((response) => {
            if(response.data.status === "success"){
                console.log(response)
                $('#product_modal').modal('hide');
                this.componentWillMount();
            }else{
                console.log(response);
            }
        }).catch(function (error) {
                console.log(error);
        });
    }


    componentWillMount() {
        axios.get('/products').then((response) => {
            if(response.data.status === "success"){
                this.setState({ 
                    sub_categories: response.data.sub_categories,
                    categories: response.data.categories, 
                    products: response.data.products,
                    dataLoaded:true
                });
            }else{
                this.setState({ 
                    sub_categories: response.data.sub_categories,
                    categories: response.data.categories, 
                    dataLoaded:false
                });
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
    editProduct(id){
        var product_name     = ''
        var product_price    = null;
        var description      = '';
        var category_id      = '';
        var sub_category_id  = '';
        var html             = '';
        var img_preveiw      = '';
        var featured_image   = '';
        var gallery1         = '';
        var gallery2         = '';
        var gallery3         = '';
        var gallery4         = '';
        var gallery_arr      = [];
        var images           = '';
        var product_id       = '';
        axios.get('/products/'+id).then((response) => {
            
          if(response.data.status === "success"){

            category_id = response.data.product.category_id;
            product_id = response.data.product.id;
            sub_category_id = response.data.product.sub_category_id;
            product_name = response.data.product.product_name;
            description = response.data.product.product_description;
            product_price = response.data.product.product_price;
            featured_image = response.data.product.featured_image;

            // Catch gallery image and view in html
            gallery1 = response.data.product.gallery_1;
            gallery2 = response.data.product.gallery_2;
            gallery3 = response.data.product.gallery_3;
            gallery4 = response.data.product.gallery_4;

            gallery_arr = [gallery1, gallery2, gallery3, gallery4];

            this.setState({
                product_name        : product_name,
                product_id          : product_id,
                product_description : description,
                product_price       : product_price,
                category_id         : category_id,
                sub_category_id     : sub_category_id,
                featured_image      : featured_image,
                gallery             : gallery_arr
            });
            // View gallery 
            images =  gallery_arr.map((img)=>{
                return  `<li className="nav-item"><img src="http://localhost:8000/storage/products/gallery/${img}" width="100" alt="${name}"/></li>`;
            });
            document.getElementById('image_preview').innerHTML=images
            // put value on the field.
            document.getElementById('product_name').value = product_name;
            document.getElementById('product_id').value = product_id;
            document.getElementById('product_description').value = description;
            document.getElementById('product_price').value = product_price;
            document.getElementById('category_id').value = category_id;
            document.getElementById('sub_category_id').value = sub_category_id;

            // view featured image
            img_preveiw = document.getElementById('featured_image_preview');
            html = `<img src="http://localhost:8000/storage/products/featured_image/${featured_image}" width='60' alt="${name}"/>
            `;
            img_preveiw.innerHTML  = html;   
          }else{
              console.log('no')
          }
        }).catch(function(error) {
            console.log(error);
        });
    }

    updateProductHandler(e){
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        var data = new FormData();
        data.append('product_name', this.state.product_name);
        data.append('product_id', this.state.product_id);
        data.append('product_description',this.state.product_description );
        data.append('product_price', this.state.product_price);
        data.append('category_id',this.state.category_id );
        data.append('sub_category_id', this.state.sub_category_id);
        let featued_image = document.getElementById('featured_image').files[0];
        if(featued_image != undefined) {
            data.append('featured_image', featued_image);
        }else{
            data.append('featured_image', this.state.featured_image);
        }
        this.state.gallery.forEach((image_file) => {
            data.append('gallery[]', image_file);
        });
        setTimeout(() => {
            axios.post('/products/update_product/',data
            ).then((response) => {
                console.log(response)
                if(response.data.status === "success"){
                    this.componentWillMount();
                    $('#product_modal').modal('hide');
                }else{
                    console.log('no')
                }
                }).catch(function(error) {
                    console.log(error);
            });
        }, 10);

    }


    removeProductyHandler(id){
        if(confirm('Are sure to delete this category? ')){
            axios.delete('/products/'+id).then((response) => {
          if(response.data.status === "success"){
              
            this.componentWillMount();
            alert("Product is Deleted");
          }else{
            alert("Something is Wrong!");
          }
        }).catch(function(error) {
            console.log(error);
        });
        }
    }
    render() {
        if(this.state.dataLoaded==true){
            return (
                <div>
                  <div className="row">
                    {/* <!-- ============================================================== -->
                    <!-- data table  -->
                    <!-- ============================================================== --> */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <button id="product_add" onClick={this.productAddHandler} className="" 
                                data-toggle="modal" data-target="#product_modal"
                                >
                                Add Product</button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="example" className="table table-striped table-bordered second">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Sub Category</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        this.state.products.map(product=>{
                                            return <tr data-id={product.id} key={product.id}>
                                            <td>{product.id}</td>
                                            <td>
                                                <img src={"http://localhost:8000/storage/products/featured_image/"+product.featured_image} width='40' alt={product.product_name}/>
                                            </td>
                                            <td>{product.product_name}</td>
                                            <td>{product.category_id}</td>
                                            <td>{product.sub_category_id}</td>
                                            <td>
                                                <button href="#" data-toggle="modal" data-target="#product_modal" data-id={product.id}  className="btn btn-warning btn-sm"

                                onClick={()=>this.editProduct(product.id)}
                                                ><i className="fas fa fa-edit"></i></button>
                                                <button href="#" data-id={product.id}   className="btn btn-danger btn-sm"
                                                onClick={()=>this.removeProductyHandler(product.id)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        })
                                    }
                                          
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Sub Category</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- end data table  -->
                    <!-- ============================================================== --> */}
                </div>


                    {/* <!-- ============================================================== -->
                    <!-- Product Add modal start  -->
                    <!-- ============================================================== --> */}
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
                                            <form id="productAddForm" onSubmit={(this.state.product_id)?this.updateProductHandler:this.productSubmitHandler} encType="multiform/form-data" data-parsley-validate="" noValidate="">
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input type="text" onChange={this.onChangeHandler} name="product_name" id="product_name" required="" placeholder="Product Title" className="form-control"/>
                                                        <input type="text" hidden name="product_id" id="product_id"  />

                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <textarea onChange={this.onChangeHandler} name="product_description" id="product_description" className="form-control" cols="30" rows="5"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-4">
                                                        <input type="number" onChange={this.onChangeHandler}  name="product_price" id="product_price" required="" placeholder="Product Price" className="form-control"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="category_id" id="category_id"  className="form-control">
                                                        <option value='0'>Select Category</option>
                                                        {this.state.categories.map((category)=>{
                                                            return <option value={category.id}>{category.category_name}</option>
                                                        })}
                                                        </select>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="sub_category_id" id="sub_category_id" className="form-control">
                                                            <option value='0'>Select Sub Category</option>
                                                            {this.state.sub_categories.map((sub_category)=>{
                                                                return <option value={sub_category.id}>{sub_category.sub_category_name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                    <label htmlFor="featured_image">Featured Image</label>
                                                        <input type="file" onChange={this.onChangeHandler}  name="featured_image" id="featured_image" required=""   className="form-control"/>
                                                    </div>
                                                    <div className="col-4 mt-3">
                                                        <div id="featured_image_preview"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group p-0 m-0 row">
                                                    <div className="col-12 p-0 m-0">
                                                <label htmlFor="gallery"> Gallery Picture Max 4 Image</label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                    <input type="file" onChange={this.uploadMultipleFiles} id="gallery" name="gallery[]"   multiple />
                                                    </div>
                                                    <div className="col-4">
                                                    <input type="button" id="remove_image" className="btn btn-danger" value="Remove Image"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12 ">
                                                        <ul className="nav" id="image_preview">
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" id="btn_save" className="btn btn-primary">Save</button> 
                                                </div>
                                                </form>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {/* <!-- ============================================================== -->
                    <!-- Product Add modal end  -->
                    <!-- ============================================================== --> */}

                    {/* <!-- ============================================================== -->
                    <!-- Product Edit modal start  -->
                    <!-- ============================================================== --> */}
                        {/* <div className="modal fade " id="edit_product_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <form id="productAddForm" onSubmit={this.productSubmitHandler} encType="multiform/form-data" data-parsley-validate="" noValidate="">
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input type="text" onChange={this.onChangeHandler} name="edit_product_name" id="edit_product_name" required="" placeholder="Product Title" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <textarea onChange={this.onChangeHandler} name="edit_product_description" id="edit_product_description" className="form-control" cols="30" rows="5"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-4">
                                                        <input type="number" onChange={this.onChangeHandler}  name="edit_product_price" id="edit_product_price" required="" placeholder="Product Price" className="form-control"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="edit_category_id" id="edit_category_id"  className="form-control">
                                                        <option value='0'>Select Category</option>
                                                        {this.state.categories.map((category)=>{
                                                            return <option value={category.id}>{category.category_name}</option>
                                                        })}
                                                        </select>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="edit_sub_category_id" id="edit_sub_category_id" className="form-control">
                                                            <option value='0'>Select Sub Category</option>
                                                            {this.state.sub_categories.map((sub_category)=>{
                                                                return <option value={sub_category.id}>{sub_category.sub_category_name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                        <label htmlFor="edit_featured_image">Featured Image</label>
                                                        <input type="file" onChange={this.onChangeHandler}  name="edit_featured_image" id="edit_featured_image" required=""   className="form-control"/>
                                                    </div>
                                                    <div className="col-4 mt-3">
                                                        <div id="edit_featured_image_preview"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group p-0 m-0 row">
                                                    <div className="col-12 p-0 m-0">
                                                <label htmlFor="edit_gallery"> edit_Gallery Picture Max 4 Image</label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                    <input type="file" onChange={this.uploadMultipleFiles} id="edit_gallery" name="edit_gallery[]"   multiple />
                                                    </div>
                                                    <div className="col-4">
                                                    <input type="button" id="eidt_remove_image" className="btn btn-danger" value="Remove Image"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12 ">
                                                        <ul className="nav" id="edit_image_preview">
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" id="edit_btn_save" className="btn btn-primary">Update</button> 
                                                </div>
                                                </form>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    {/* <!-- ============================================================== -->
                    <!-- Product Edit modal end  -->
                    <!-- ============================================================== --> */}



            </div>

                    )
            }else{
                return (
                    <div>
                    <div className="row">
                        {/* <!-- ============================================================== -->
                        <!-- data table  -->
                        <!-- ============================================================== --> */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-header">
                                    <button id="product_add" className="" 
                                    data-toggle="modal" data-target="#product_modal"
                                    >
                                    Add Category</button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped table-bordered second">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Sub Category</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h1>There is no Producct</h1>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Sub Category</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ============================================================== -->
                        <!-- end data table  -->
                        <!-- ============================================================== --> */}
                    </div>

                    {/* <!-- ============================================================== -->
                        <!-- Product else modal start  -->
                        <!-- ============================================================== --> */}
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
                                            <form id="productAddForm" onSubmit={this.productSubmitHandler} encType="multiform/form-data" data-parsley-validate="" noValidate="">
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input type="text" onChange={this.onChangeHandler} name="product_name" id="product_name" required="" placeholder="Product Title" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <textarea onChange={this.onChangeHandler} name="product_description" id="product_description" className="form-control" cols="30" rows="5"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-4">
                                                        <input type="number" onChange={this.onChangeHandler}  name="product_price" id="product_price" required="" placeholder="Product Price" className="form-control"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="category_id" id="category_id"  className="form-control">
                                                        <option value='0'>Select Category</option>
                                                        {this.state.categories.map((category)=>{
                                                            return <option value={category.id}>{category.category_name}</option>
                                                        })}
                                                        </select>
                                                    </div>
                                                    <div className="col-4">
                                                        <select onChange={this.onChangeHandler} name="sub_category_id" id="sub_category_id" className="form-control">
                                                            <option value='0'>Select Sub Category</option>
                                                            {this.state.sub_categories.map((sub_category)=>{
                                                                return <option value={sub_category.id}>{sub_category.sub_category_name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                    <label htmlFor="featured_image">Featured Image</label>
                                                        <input type="file" onChange={this.onChangeHandler}  name="featured_image" id="featured_image" required=""   className="form-control"/>
                                                    </div>
                                                    <div className="col-4 mt-3">
                                                        <div id="featured_image_preview"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group p-0 m-0 row">
                                                    <div className="col-12 p-0 m-0">
                                                <label htmlFor="gallery"> Gallery Picture Max 4 Image</label>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-8">
                                                    <input type="file" onChange={this.uploadMultipleFiles} id="gallery" name="gallery[]"   multiple />
                                                    </div>
                                                    <div className="col-4">
                                                    <input type="button" id="remove_image" className="btn btn-danger" value="Remove Image"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12 ">
                                                        <ul className="nav-item" id="image_preview">
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" id="btn_save" className="btn btn-primary">Save</button> 
                                                </div>
                                                </form>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    {/* <!-- ============================================================== -->
                    <!-- Product else modal end  -->
                    <!-- ============================================================== --> */}

                
                </div>
           )
        }

    }
}
