import React, { Component } from 'react'

export default class FilterBar extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="product-sidebar">
                <div className="product-sidebar-widget">
                    <h4 className="mb-0">E-Commerce Filter</h4>
                </div>
                <div className="product-sidebar-widget">
                    <h4 className="product-sidebar-widget-title">Category</h4>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cat-1"/>
                        <label className="custom-control-label" htmlFor="cat-1">Categories #1</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cat-2"/>
                        <label className="custom-control-label" htmlFor="cat-2">Categories #2</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cat-3"/>
                        <label className="custom-control-label" htmlFor="cat-3">Categories #3</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cat-4"/>
                        <label className="custom-control-label" htmlFor="cat-4">Categories #4</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cat-5"/>
                        <label className="custom-control-label" htmlFor="cat-5">Categories #5</label>
                    </div>
                </div>
                <div className="product-sidebar-widget">
                    <h4 className="product-sidebar-widget-title">Size</h4>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="size-1"/>
                        <label className="custom-control-label" htmlFor="size-1">Small</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="size-2"/>
                        <label className="custom-control-label" htmlFor="size-2">Medium</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="size-3"/>
                        <label className="custom-control-label" htmlFor="size-3">Large</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="size-4"/>
                        <label className="custom-control-label" htmlFor="size-4">Extra Large</label>
                    </div>
                </div>
                <div className="product-sidebar-widget">
                    <h4 className="product-sidebar-widget-title">Brand</h4>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brand-1"/>
                        <label className="custom-control-label" htmlFor="brand-1">Brand Name #1</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brand-2"/>
                        <label className="custom-control-label" htmlFor="brand-2">Brand Name #2</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brand-3"/>
                        <label className="custom-control-label" htmlFor="brand-3">Brand Name #3</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brand-4"/>
                        <label className="custom-control-label" htmlFor="brand-4">Brand Name #4</label>
                    </div>
                </div>
                <div className="product-sidebar-widget">
                    <h4 className="product-sidebar-widget-title">Color</h4>
                    <div className="custom-control custom-radio custom-color-blue ">
                        <input type="radio" id="color-1" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="color-1">Blue</label>
                    </div>
                    <div className="custom-control custom-radio custom-color-red ">
                        <input type="radio" id="color-2" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="color-2">Red</label>
                    </div>
                    <div className="custom-control custom-radio custom-color-yellow ">
                        <input type="radio" id="color-3" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="color-3">Yellow</label>
                    </div>
                    <div className="custom-control custom-radio custom-color-black ">
                        <input type="radio" id="color-4" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="color-4">Black</label>
                    </div>
                </div>
                <div className="product-sidebar-widget">
                    <h4 className="product-sidebar-widget-title">Price</h4>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="price-1"/>
                        <label className="custom-control-label" htmlFor="price-1">$$</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="price-2"/>
                        <label className="custom-control-label" htmlFor="price-2">$$$</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="price-3"/>
                        <label className="custom-control-label" htmlFor="price-3">$$$$</label>
                    </div>
                </div>
                <div className="product-sidebar-widget">
                    <a href="#" className="btn btn-outline-light">Reset Filter</a>
                </div>
            </div>
        </div>
        )
    }
}
