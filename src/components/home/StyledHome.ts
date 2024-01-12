import styled from "styled-components";

export const StyledHome = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 20px;

  .home {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
