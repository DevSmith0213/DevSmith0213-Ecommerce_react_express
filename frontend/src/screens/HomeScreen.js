import data from '../../../backend/data'
import Product from '../components/Product'


export default function Homescreen(props) {   

    return (
        <div>
            <div className="row center">
                {
                    data.products.map((product)=>(
                        <Product key ={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}
