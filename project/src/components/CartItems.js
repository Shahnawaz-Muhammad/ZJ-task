import React, { useState } from 'react';
import { products } from '../data/products';

const CartItems = ({ name, price, qty, imageUrl }) => {
  let [product, setProduct] = useState(products);

  const incHandler = (p) => {
    let arr = [...product];
    p.qty++;
    setProduct(arr);
  };
  const decHandler = (p) => {
    let arr = [...product];
    p.qty--;
    if (p.qty < 1) {
      removeHandler(p);
    } else {
      setProduct(arr);
    }
  };
  const removeHandler = (p) =>
    setProduct(products.filter((prod) => p.id !== prod.id));

  return (
    <>
      <tbody>
        <tr>
          <td style={{ width: '70px' }}>
            <img
              src={imageUrl}
              className='card-img-top'
              style={{ width: '60px', height: '60px' }}
              alt='...'
            />
          </td>
          <td style={{ width: '300px' }}>{name}</td>
          <td>{price}</td>
          <td>
            <div className='input-group'>
              <button
                className='btn btn-outline-secondary'
                onClick={(p) => decHandler(p)}
                type='button'
              >
                -
              </button>
              <input
                type='text'
                className='form-control'
                // onChange={changeHandler}
                value={qty}
              />
              <button
                className='btn btn-outline-secondary'
                onClick={(p) => incHandler(p)}
                type='button'
              >
                +
              </button>
            </div>
          </td>
          <td>
            <button onClick={removeHandler} className='btn btn-danger'>
              X
            </button>
          </td>
          <td>
            <strong>PKR {price * qty}</strong>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItems;
