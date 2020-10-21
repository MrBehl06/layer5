import styled from "styled-components";

export const LogoListWrapper = styled.div`
    ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -10px -16px;

    & > li {
      height: 32px;
      margin: 10px 16px;

      & img {
        max-height: 32px;
        max-width: 96px;
      }
    }
  }
`;
