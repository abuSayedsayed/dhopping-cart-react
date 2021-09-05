import React from 'react'

function CartItem(props) {
    const {imgSrc,name,price,removeItem,updateQuantity,quantity}=props
    const updateTotal=(event)=>{
        if(event.target.value<1){
            event.target.value=1
        }else if (event.target.value>50){
            event.target.value=50
        }
        updateQuantity(name,parseInt(event.target.value))
    }
    
    return (
        <div>
            <div className="row bg-light px-2 py-4 rounded">
                <div className="col-md-3">
                    <img src={imgSrc} className="d-block w-25 mx-auto" alt="" />
                </div>
                <div className="col-md-3 align-self-center">
                    <p>{name}</p>
                </div>
                <div className="col-md-2 align-self-center">
                    <input type="number" placeholder="Quantity" value={quantity} className="form-control" onChange={updateTotal} />
                </div>
                <div className="col-md-2 text-end align-self-center">
                    <p>{price}$</p>
                </div>
                <div className="col-md-1 text-end align-self-center">
                    <p>{quantity*price}$</p>
                </div>
                <div className="col-md-1 text-end align-self-center">
                    <button className="btn btn-outline-danger" onClick={()=>removeItem(name)}>&times;</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
