import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 20px auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  color: var(--white);
  font-size: var(--fontBig);
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;