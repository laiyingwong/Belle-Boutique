import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);

  // whenever the category changes, the function in useEffect will fire and we'll fetch the products that fall into selected category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/products');
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  console.log(products);
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
