import styled from "styled-components";

export const StyledWishlist = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 20px;

  .wishlist {
    min-height: 100vh;
    &__list {
      padding: 8px;
      border-bottom: 1px solid #fff;
      transition: all 200ms ease-in;
      &:hover {
        background-color: #000000;
      }
    }
  }
`;
