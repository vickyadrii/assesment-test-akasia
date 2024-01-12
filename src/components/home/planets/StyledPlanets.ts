import styled from "styled-components";

export const StyledPlanets = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }

  .planets {
    min-height: 100vh;
    &__list {
      padding: 8px;
      border-bottom: 1px solid #fff;
      cursor: pointer;
      transition: all 200ms ease-in;
      &:hover {
        background-color: #000000;
      }
    }
  }
`;
