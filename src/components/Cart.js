import React, { useState } from 'react';
import Alert from './Alert';
import './Cart.css';
import CartItem from './CartItem';

function Cart(props) {
    const {products,setProducts}=props
    const [alert, setAlert] = useState('none')
    const calculateTotal=()=>{
        let totalPrice=0
        products.forEach(product => {
            totalPrice+=(product.price*product.quantity)
        });
        return totalPrice
    }
    const proceedToCheckOut=()=>{
        setProducts([])
        setAlert('block')
    }
    const removeItem=(name)=>{
        const copyProductsArr=[...products]
        const deletedIndex=copyProductsArr.findIndex(product=>product.name===name)
        copyProductsArr.splice(deletedIndex,1)
        setProducts(copyProductsArr)
        setAlert('block')
    }
    const updateQuantity=(name,quantityValue)=>{
        const copyProductsArr=[...products]
        const deletedIndex=copyProductsArr.findIndex(product=>product.name===name)
        Object.assign(copyProductsArr[deletedIndex],{quantity:quantityValue})
        setProducts(copyProductsArr)
    }
    setTimeout(() => {
        setAlert('none')
    }, 3000);
    return (
        <div>
            <div className="container my-5 py-5">
                <div className={`py-2 d-${alert}`}>
                     <Alert msg="Success ! Product Removed Successfully ." type="success"/>
                </div>

            <div className="row bg-secondary pt-2 text-light rounded">
                <div className="col-md-3">
                    <p className="">Product Image</p>
                </div>
                <div className="col-md-3 align-self-center">
                    <p>Product Name</p>
                </div>
                <div className="col-md-2 align-self-center">
                    <p>Product Quantity</p>
                </div>
                <div className="col-md-2 text-end align-self-center">
                    <p>Unite Price</p>
                </div>
                <div className="col-md-2 text-end align-self-center">
                    <p>Total Price</p>
                </div>
            </div>

            {/* Adding the single cart item to the dom*/}
            {
                // eslint-disable-next-line array-callback-return
                products.map(product=>{
                     return    <CartItem key={Math.random()} updateQuantity={updateQuantity} removeItem={removeItem} price={product.price} imgSrc={product.imgSrc} quantity={product.quantity} name={product.name}/>
                })
            }

            <div className="my-3">
                <h3 className={`d-${products.length?'none':'block'} text-center py-4`}>Please Add Item's To Preview</h3>
            </div>

                <div className="py-3 my-2 text-end">
                   <h3 className="text-danger"> Total :- {products.length?calculateTotal():'00000'} $</h3>
                   <div className="d-flex justify-content-end my-3">
                       <button className="btn btn-danger " onClick={proceedToCheckOut} disabled={!products.length} >{products.length?'Proceed To Checkout':'Please Add Item\' To CheckOut'}</button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
