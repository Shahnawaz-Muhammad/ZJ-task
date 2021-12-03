import React, { useState } from 'react';

import { products } from '../data/products';

import CartItems from '../components/CartItems';

const CartScreen = ({ prod }) => {
  const [cartItem, setCartItem] = useState(products);
  return (
    <section className='cart-items-wrapper pt-5 pb-5'>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' class=''>
                Image
              </th>
              <th scope='col'>Product Name</th>
              <th scope='col'>price</th>
              <th scope='col' style={{ width: '15%' }}>
                Qty
              </th>
              <th scope='col'>Action</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          {cartItem.map((item) => {
            return <CartItems key={item.productId} {...item} />;
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span>Total Price: </span>
              <span>
                <strong>pkr</strong>
              </span>
            </td>
          </tr>
        </table>
        <div className='container total-price text-end mb-5'>
          <div className='cart-exit-btn d-flex justify-content-center'>
            <button className='btn btn-primary'>continue shopping</button>
            <input
              type='button'
              className='btn btn-primary mx-3'
              value='checkout'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartScreen;
