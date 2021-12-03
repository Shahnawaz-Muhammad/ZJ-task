// import './Product.css';

// import { Link } from 'react-router-dom';

const Product = ({ prod }) => {
  //   const { imageUrl, name, price, description, productId } = product;

  return (
    <>
      <div className='col'>
        <div
          className='card shadow-sm'
          style={{ maxWidth: '18rem', height: '25rem' }}
        >
          <img
            src={prod.imageUrl}
            className='card-img-top'
            style={{ maxWidth: '50%', maxHeight: '70%' }}
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{prod.name}</h5>
            <p className='card-text'>{prod.description}</p>
            <p>
              Price: Rs,
              {prod.price}
              <span class='badge bg-warning text-dark'>
                {prod.countInStock}
              </span>
              <button className='btn btn-primary mt-2 mx-3 btn-small btn-sm'>
                Buy Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
