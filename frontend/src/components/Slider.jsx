import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  // the following lines will center the arrows vertically
  top: 0;
  bottom: 0;
  margin: auto;
  // if the direction is left, the distance between the arrow and the left boundry of the container (it's positioned against) will be 10, and vice versa
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  // we want all properties to transition with ease effect for 1.5s
  transition: all 1.5s ease;
  // translateX(0): repositions an element to its original place
  // translateX(-100vw): moves an element on the x-axis to the left by 100vw
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-style: solid;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    // 1st image (index 0), 2nd image (index 1), 3rd image (index 2)
    if (direction === 'left') {
      // when navigating the left arrow, if the current image is the 2nd/3rd (idx 1/2) one, transition back to the one before (-1), otherwise (on the 1st image) rotate to the 3rd (idx 2) image
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      // when navigating the right arrow, if the current image is the 1st/2nd (idx 0/1) one, transition back to the next one in line (+1), otherwise (on the 3rd image) rotate back to the 1st (idx 0) image
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => {
            return (
              <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Button>SHOP NOW</Button>
                </InfoContainer>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
