import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = (  ) => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect( ()  =>  {
            const getProduct = async () =>{
            const endPoint = `https://dummyjson.com/products/${id}`;
            const response = await fetch(endPoint);
            const json = await response.json();
            console.log(json)

            setProduct( json)
        }

       
        getProduct();
 

    }, [id])




    return ( 
        <div className="page">
            <div className="card">
                <h2> { product?.title }{id}</h2>
                <p>
                    {product?.description }
                </p>
                <img src={ product?.images[0] }  alt="" />
            </div>

        </div>
    )
    }
    export default Details