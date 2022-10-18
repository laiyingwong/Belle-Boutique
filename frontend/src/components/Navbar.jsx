import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-image: linear-gradient(to right, #cbe1ef, #c5e1ef);
  /* background-color: #ede8e1; */
  height: 60px;
  ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: 'Playfair Display SC', serif;
  font-size: 35px;
  color: #3c5067;
  letter-spacing: 2px;
  font-weight: bolder;
  text-decoration: none;
  &:hover {
    color: #fcfef6;
  }
  ${mobile({ fontSize: '16px' })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  ${mobile({ flex: 2, justifyContent: 'center' })};
`;

const MenuItem = styled.div`
  color: #3c5067;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #fcfef6;
  }
  ${mobile({ fontSize: '12px', marginLeft: '10px' })};
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <MenuItem>Homepage</MenuItem>
            </Link>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <MenuItem>Products</MenuItem>
            </Link>
          </Left>
          <Center>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Logo>BELLE BOUTIQUE</Logo>
            </Link>
          </Center>
          <Right>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <MenuItem>Sign Up</MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <MenuItem>Log In</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
