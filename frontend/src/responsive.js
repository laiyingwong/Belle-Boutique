import { css } from 'styled-components';

export const mobile = (props) => {
  // only screen here is used to prevent older browsers that do not support media queries with media features from applying the specified styles
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
