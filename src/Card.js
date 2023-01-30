import React from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ item }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        let cart_item = {
            id: Date.now(),
            product: item
        }
        dispatch({type: "ADD_TO_CART", payload: cart_item})
        toast.success("Item added to Cart")
    }

  return (
    <div>
        <div className="col">
        <ToastContainer theme='colored' position='top-right'></ToastContainer>
        <div className="card p-3 m-2" style={{height:"370px"}}>
            <img src={item.item_image} className="card-img-top p-3" height="300px" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">{item.item_name}</h5>
                <h3 className="card-title">$ {item.item_price}</h3>
                <button className='btn btn-warning w-100 p-2 m-1' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card