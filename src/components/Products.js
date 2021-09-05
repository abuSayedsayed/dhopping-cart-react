import React from 'react'
import ImgTwo from '../image/banner_01.png'
import ImgOne from '../image/banner_02.png'
import ImgThree from '../image/collection_01.png'
import ImgFour from '../image/collection_02.png'
import ProductItem from './ProductItem'

function Products(props) {
	const { updateProducts } = props
	return (
		<div>
			<div className="container py-5 my-5">
				<div className="row">
					<div className="col-md-3">
						<ProductItem
							updateProducts={updateProducts}
							name="I Phone 11"
							price="$64"
							imgSrc={ImgOne}
						/>
					</div>
					<div className="col-md-3">
						<ProductItem
							updateProducts={updateProducts}
							name="I Phone 13"
							price="$643"
							imgSrc={ImgTwo}
						/>
					</div>
					<div className="col-md-3">
						<ProductItem
							updateProducts={updateProducts}
							name="I Phone 12"
							price="$3643"
							imgSrc={ImgThree}
						/>
					</div>
					<div className="col-md-3">
						<ProductItem
							updateProducts={updateProducts}
							name="I Phone 10"
							price="$366"
							imgSrc={ImgFour}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
