import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  /* margin: 3px; */
  height: 70vh;
  position: relative;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  // cover: the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
