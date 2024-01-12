import styled from "styled-components";

export const StyledPlanetDetails = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  .btn-wishlist {
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 12px 16px;
    font-size: 16px;
    transition: all 200ms ease-in;
    cursor: pointer;
    &:hover {
      background: #010101;
    }
  }
`;
