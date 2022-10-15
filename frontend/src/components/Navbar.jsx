import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
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

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '16px' })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
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
            <SearchContainer>
              <Input />
              <Search style={{ color: 'gray', fontSize: '16px' }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Belle Boutique</Logo>
          </Center>
          <Right>
            <MenuItem>Sign Up</MenuItem>
            <MenuItem>Log In</MenuItem>
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
