import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <div key={item.id}>
            <CategoryItem item={item} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Categories;
