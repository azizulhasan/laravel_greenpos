import React, { Component } from 'react'
import $ from 'jquery'
import { useParams } from 'react-router-dom';

export default class SubCategory extends Component {
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.subCategorySubmitHandler = this.subCategorySubmitHandler.bind(this);
        this.removeSubCategoryHandler = this.removeSubCategoryHandler.bind(this);
        this.updateSubCategoryHandler = this.updateSubCategoryHandler.bind(this);
        this.editSubCategory           =   this.editSubCategory.bind(this);
        
        this.state = {
            sub_category_name: '',
            sub_category_slug:'',
            category_id : '',
            sub_categories : [],
            categories : [],
            dataLoaded: false,
            sub_category_id: '',
            edit_category_id:''
            
        };
    }

    

    onChangeHandler(e){
            let sub_category_name = document.getElementById('sub_category_name').value;
            let sub_category_slug = document.getElementById('sub_category_slug').value;
            let category_id = document.getElementById('category_id').value;

            this.setState({sub_category_name: sub_category_name,
                sub_category_slug:sub_category_slug,
                category_id:category_id});
            
        
    }

    subCategorySubmitHandler(e){
        e.preventDefault()
        const postData = {
            sub_category_name: this.state.sub_category_name,
            sub_category_slug:this.state.sub_category_slug,
            category_id: this.state.category_id
        }
        axios.post('/sub_categories',postData).then((response) => {
            if(response.data.status === "success"){
                this.componentWillMount();
                $('#sub_category_modal').modal('hide');
            }else{
                console.log(response);
            }
        }).catch(function (error) {
                console.log(error);
            });
    }


    componentWillMount() {
        axios.get('/sub_categories').then((response) => {
            if(response.data.status === "success"){
                this.setState({ 
                    sub_categories: response.data.sub_categories,
                    categories: response.data.categories, 
                    dataLoaded:true
                });
            }else{
                this.setState({ 
                    sub_categories: [],
                    categories: response.data.categories, 
                    dataLoaded:false
                });
            }
        }).catch(function(error) {
            console.log(error);
            
        });
    };
    editSubCategory(id){
      var   name =   ''
      var slug =   ''
      var sub_category_id=  ''
      var cateId=  ''
        axios.get('/sub_categories/'+id).then((response) => {
          if(response.data.status === "success"){
            sub_category_id =response.data.sub_category.id;
            name = response.data.sub_category.sub_category_name;
            slug = response.data.sub_category.sub_category_slug;
            cateId = response.data.sub_category.category_id;
            document.getElementById('edit_sub_category_name').value = name;
            document.getElementById('edit_sub_category_slug').value = slug;
            document.getElementById('edit_sub_category_id').value = sub_category_id;
            document.getElementById('edit_category_id').value = cateId;
            this.setState({sub_category_id:sub_category_id,
                edit_category_id:cateId})
            console.log(this.state.edit_category_id)
          }else{
              console.log('no')
          }
        }).catch(function(error) {
            console.log(error);
        });
    }

    updateSubCategoryHandler(e){
        e.preventDefault()
      let name=  document.getElementById('edit_sub_category_name').value ;
      let slug=    document.getElementById('edit_sub_category_slug').value;
      const updateData = {
        sub_category_name: name,
        sub_category_slug:slug,
        edit_category_id : this.state.edit_category_id,
        id  : this.state.sub_category_id
        }
        console.log(updateData);

    axios.put('/sub_categories/'+updateData.id,updateData ,
      {
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
      }).then((response) => {
        console.log(response)
          if(response.data.status === "success"){
            this.componentWillMount();
            $('#edit_sub_category_modal').modal('hide');
          }else{
              console.log('no')
          }
        }).catch(function(error) {
            console.log(error);
        });

    }


    removeSubCategoryHandler(id){
        if(confirm('Are sure to delete this category? ')){
            axios.delete('/sub_categories/'+id).then((response) => {
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
                                <button id="sub_category_add" className="" 
                                data-toggle="modal" data-target="#sub_category_modal"
                                >
                                Add New Sub Category</button>
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
                                        this.state.sub_categories.map(sub_category=>{
                                            return <tr data-id={sub_category.id} key={sub_category.id}>
                                            <td>{sub_category.id}</td>
                                            <td>{sub_category.sub_category_name}</td>
                                            <td>{sub_category.sub_category_slug}</td>
                                            <td>
                                                <button href="#" data-toggle="modal" data-target="#edit_sub_category_modal" data-id={sub_category.id}  className="btn btn-warning btn-sm"

                                onClick={()=>this.editSubCategory(sub_category.id)}
                                                ><i className="fas fa fa-edit"></i></button>
                                                <button href="#" data-id={sub_category.id}   className="btn btn-danger btn-sm"
                                                onClick={()=>this.removeSubCategoryHandler(sub_category.id)}><i className="fas fa-trash"></i></button>
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
                <div className="modal fade " id="sub_category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Sub Category</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <form id="Sub categoryForm"  onSubmit={this.subCategorySubmitHandler}  data-parsley-validate="" noValidate="">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <select onChange={this.onChangeHandler}  name="category_id" id="category_id" className="form-control">
                                                <option value='0'>Select Category</option>
                                                {this.state.categories.map((category)=>{
                                                    return <option value={category.id}>{category.category_name}</option>
                                                })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.onChangeHandler} name="sub_category_name" id="sub_category_name" required="" placeholder="Sub Category Name Title" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.onChangeHandler} name="sub_category_slug" id="sub_category_slug" required="" placeholder="Sub Category Slug" className="form-control"/>
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
            <div className="modal fade " id="edit_sub_category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Sub Category</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <form id="editSubCategoryForm"  onSubmit={this.updateSubCategoryHandler}  data-parsley-validate="" noValidate="">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <select onChange={this.onChangeHandler}  name="edit_category_id" id="edit_category_id" className="form-control">
                                        <option value='0'>Select Category</option>
                                        {this.state.categories.map((category)=>{
                                                  return   <option value={category.id}>{category.category_name}</option>
                                                })}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input id="edit_sub_category_id" type='text' value="" hidden />
                                        <input type="text" onChange={this.onChangeHandler} name="edit_sub_category_name" id="edit_sub_category_name" required="" placeholder="Sub Category Name Title" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input type="text" onChange={this.onChangeHandler} name="edit_sub_category_slug" id="edit_sub_category_slug" required="" placeholder="Sub Category Slug" className="form-control"/>
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
                                    <button id="sub_category_add" className="" 
                                    data-toggle="modal" data-target="#sub_category_modal"
                                    >
                                    Add Sub Category</button>
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
                                                        <h1>There is no Sub Category</h1>
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
                    <div className="modal fade " id="sub_category_modal" tabIndex="-1" role="dialog" aria-labelledby="productEditModal" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Sub Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <form id="Sub categoryForm"  onSubmit={this.subCategorySubmitHandler}  data-parsley-validate="" noValidate="">
                            <div className="form-group row">
                                <div className="col-12">
                                    <select onChange={this.onChangeHandler}  name="category_id" id="category_id" className="form-control">
                                    <option value='0'>Select Category</option>
                                    {this.state.categories.map((category)=>{
                                       return  <option value={category.id}>{category.category_name}</option>
                                    })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    
                                    <input type="text" onChange={this.onChangeHandler} name="sub_category_name" id="sub_category_name" required="" placeholder="Sub Category Name Title" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <input type="text" onChange={this.onChangeHandler} name="sub_category_slug" id="sub_category_slug" required="" placeholder="Sub Category Slug" className="form-control"/>
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
