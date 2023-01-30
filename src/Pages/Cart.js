import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'

const Cart = () => {
  
  const cartStore = useSelector(store=>store.cartStore)
  const cartItems = cartStore.cart_items
  
  const dispatch = useDispatch()

  return (
    <div>
        <Navbar/>
        <h3 className='text-center text-decoration-underline'>Cart Items</h3>
        <div className='container-fliud mx-5 my-2'>
        {
          cartItems && cartItems.length > 0 ?
          <table className='table text-center align-middle table-hover'>
            <thead className='m-2'>
              <tr >
                <th>S.no.</th>
                <th>Product Image</th>
                <th>Product Info</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map((items,i) => {
                  return <tr key={items.product.id}>
                    <td>{i+1}</td>
                    <td>
                      <img src={items.product.item_image} style={{height: "120px"}}/>
                    </td>
                    <td>
                      <h4>{items.product.item_name}</h4>
                    </td>
                    <td>
                      <h4>$ {items.product.item_price}</h4>
                    </td>
                    <td>
                      <button className='btn btn-danger p-2 '
                        onClick={()=>{
                          dispatch({type: "REMOVE_FROM_CART", payload: items.id})}}
                      >Remove</button>
                    </td>
                  </tr>
                })
              }
              <tr colspan={4}>
                <button className='btn btn-warning py-2 px-4'
                  onClick={()=>{
                    dispatch({type: "EMPTY_THE_CART"})
                  }}
                >Empty</button>
              </tr>
            </tbody>
          </table> :
          <div className='alert alert-danger p-5 m-4 text-center'>No Cart Items</div>
        }
        </div>
    </div>
  )
}

export default Cart