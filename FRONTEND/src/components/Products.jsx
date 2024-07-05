import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Products = (  ) => {

    const [ lista, setLista] = useState([]);

    useEffect( ()  =>  {

        const getProduct = async () =>{
            const endPoint = 'https://dummyjson.com/products';
            const response = await fetch(endPoint);
            const json = await response.json();
            setLista( json.products)
            console.log(json)
        }

        getProduct();

    }, [])

    return ( 
        <div className="page">
            <h2> Productos</h2>
            <p>
                Agregar la lista  de Productos
            </p>

            {
                lista.map( product => (
                    <div className="card">
                        <h4>{ product.title }</h4>
                        <img src={product.thumbnail} alt="" />
                        <Link to={`/products/${product.id}`}> Ver Detalle </Link>
                    </div>
                ))
            }
        </div>
    )
    }
    export default Products