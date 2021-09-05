import React, { useState } from 'react'
import Alert from './Alert'

function ProductItem(props) {
	const { updateProducts, name, price, imgSrc } = props
	const [alert, setAlert] = useState('none')
	const updateProductDetails = (event) => {
		const productObj = {
			name: name,
			imgSrc:imgSrc,
			price: parseInt(price.slice(1)),
			quantity:1
		}
		updateProducts(productObj)
		setAlert('block')
	}
	setTimeout(()=>{
		setAlert('none')
	},3000)
	return (
		<div>
			<div className="py-3">
			<div className={`py-2 d-${alert}`}>
                     <Alert msg="Success ! Product Added Successfully ." type="success"/>
                </div>
				<div className="card text-center">
					<div className="card-body">
						<img
							src={imgSrc}
							alt=""
							className="card-img w-50 mx-auto d-block my-2"
						/>
						<h3 className="card-title ">{name} .</h3>
						<h4 className="pt-2 text-danger">{price}</h4>
						<button
							className="btn  btn-success  my-2"
							onClick={updateProductDetails}
						>
							<i className="bi bi-bag-check-fill"></i> Add To Cart
						</button>
						<button className="btn  btn-danger my-2 ms-2">
							<i className="bi bi-collection"></i> Know More
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
