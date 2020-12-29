import React, { Component } from 'react'

export default class EditCategoryModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
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
                                    <form id="editCategoryForm"  onSubmit={this.props.updatecategoryHandler}  data-parsley-validate="" noValidate="">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input id="edit_category_id" type='text' value="" hidden />
                                                <input type="text" onChange={this.props.onChangeHandler} name="edit_category_name" id="edit_category_name" required="" placeholder="Category Name Title" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input type="text" onChange={this.props.onChangeHandler} name="edit_category_slug" id="edit_category_slug" required="" placeholder="Category Slug" className="form-control"/>
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
             END EDIT CATEGORY modal
            /////////////////////////////// */}

            </>
        )
    }
}
