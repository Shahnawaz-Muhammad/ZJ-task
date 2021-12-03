//components
import Product from '../components/Product';
import { products } from '../data/products';

const HomeScreen = () => {
  return (
    <div className='py-5 bg-light'>
      <div className='container mt-2'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3'>
          {products.map((product) => (
            <Product prod={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
