import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
