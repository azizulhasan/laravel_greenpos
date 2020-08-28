import React, { Component } from 'react'
import $ from 'jquery'


export default class Category extends Component {
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.categorySubmitHandler = this.categorySubmitHandler.bind(this);
        this.removeCategoryHandler = this.removeCategoryHandler.bind(this);
        this.updatecategoryHandler = this.updatecategoryHandler.bind(this);
        this.editCategory           =   this.editCategory.bind(this);
        
        this.state = {
            category_name: '',
            category_slug:'',
            categories : [],
            dataLoaded: false,
            category_id: ''
            
        };
    }

    

    onChangeHandler(e){
            let category_name = document.getElementById('category_name').value;
            let category_slug = document.getElementById('category_slug').value;
        this.setState({category_name: category_name,
            category_slug:category_slug});
    }

    categorySubmitHandler(e){
        e.preventDefault()
        const postData = {
            category_name: this.state.category_name,
            category_slug:this.state.category_slug
        }
        axios.post('/categories',postData).then((response) => {
            if(response.data.status === "success"){
                this.componentWillMount();
                $('#category_modal').modal('hide');
            }else{
                console.log(response);
            }
        }).catch(function (error) {
                console.log(error);
            });
    }


    componentWillMount() {
        axios.get('/categories').then((response) => {
            if(response.data.status === "success"){
                this.setState({ categories: response.data.categories, dataLoaded:true});
            }else{
                this.setState({ categories: [], dataLoaded:false});
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
    editCategory(id){
        
      var   name =   ''
      var slug =   ''
      var category_id=  ''
        
        axios.get('/categories/'+id).then((response) => {
          if(response.data.status === "success"){
            category_id =response.data.category.id;
            name = response.data.category.category_name;
            slug = response.data.category.category_slug;
            document.getElementById('edit_category_name').value = name;
            document.getElementById('edit_category_slug').value = slug;
            document.getElementById('edit_category_id').value = category_id;
            this.setState({category_id:category_id})
          }else{
              console.log('no')
          }
        }).catch(function(error) {
            console.log(error);
        });
    }

    updatecategoryHandler(e){
        e.preventDefault()
      let id=  document.getElementById('edit_category_id').value;
      let name=  document.getElementById('edit_category_name').value ;
      let slug=    document.getElementById('edit_category_slug').value;
      const updateData = {
        category_name: name,
        category_slug:slug,
            id          : this.state.category_id
        }


    axios.put('/categories/'+updateData.id,updateData ,
      {
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
      }).then((response) => {
        console.log(response)
          if(response.data.status === "success"){
            this.componentWillMount();
            $('#edit_category_modal').modal('hide');
          }else{
              console.log('no')
          }
        }).catch(function(error) {
            console.log(error);
        });

    }


    removeCategoryHandler(id){
        if(confirm('Are sure to delete this category? ')){
            axios.delete('/categories/'+id).then((response) => {
          if(response.data.status === "success"){
            this.componentWillMount();
          }else{
              console.log('no')
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
                                <button id="product_add" className="" 
                                data-toggle="modal" data-target="#category_modal"
                                >
                                Add Category</button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="example" className="table table-striped table-bordered second">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Category Name</th>
                                                <th>Category Slug</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        this.state.categories.map(category=>{
                                            return <tr data-id={category.id} key={category.id}>
                                            <td>{category.id}</td>
                                            <td>{category.category_name}</td>
                                            <td>{category.category_slug}</td>
                                            <td>
                                                <button href="#" data-toggle="modal" data-target="#edit_category_modal" data-id={category.id}  className="btn btn-warning btn-sm"

                                onClick={()=>this.editCategory(category.id)}
                                                ><i className="fas fa fa-edit"></i></button>
                                                <button href="#" data-id={category.id}   className="btn btn-danger btn-sm"
                                                onClick={()=>this.removeCategoryHandler(category.id)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        })
                                    }
                                          
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Category Name</th>
                                                <th>Category Slug</th>
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
                <div className="modal fade " id="category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <form id="categoryForm"  onSubmit={this.categorySubmitHandler}  data-parsley-validate="" noValidate="">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.onChangeHandler} name="category_name" id="category_name" required="" placeholder="Category Name Title" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.onChangeHandler} name="category_slug" id="category_slug" required="" placeholder="Category Slug" className="form-control"/>
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


            {/* ///////////////////////////////
            EDIT CATEGORY modal
            /////////////////////////////// */}
            <div className="modal fade " id="edit_category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit category</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <form id="editCategoryForm"  onSubmit={this.updatecategoryHandler}  data-parsley-validate="" noValidate="">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input id="edit_category_id" type='text' value="" hidden />
                                                <input type="text" onChange={this.onChangeHandler} name="edit_category_name" id="edit_category_name" required="" placeholder="Category Name Title" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.onChangeHandler} name="edit_category_slug" id="edit_category_slug" required="" placeholder="Category Slug" className="form-control"/>
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
                                    data-toggle="modal" data-target="#category_modal"
                                    >
                                    Add Category</button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped table-bordered second">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h1>There is no Category</h1>
                                                    </td>
                                                    
                                                </tr>
                                                
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
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
                    <div className="modal fade " id="category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <form id="categoryForm"  onSubmit={this.categorySubmitHandler}  data-parsley-validate="" noValidate="">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            
                                            <input type="text" onChange={this.onChangeHandler} name="category_name" id="category_name" required="" placeholder="Category Name Title" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <input type="text" onChange={this.onChangeHandler} name="category_slug" id="category_slug" required="" placeholder="Category Slug" className="form-control"/>
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
                </div>
           )
        }


    }
}
