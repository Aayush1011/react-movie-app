import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--medGrey);
  width: 15%;
  min-width: 120px;
  height: 50px;
  border-radius: 30px;
  font-weight: 800;
  color: var(--white);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Range = styled.input`
  margin-right: 15px;
  width: 200px;
  height: 7px;
  border-radius: 5px;
  background: var(--medGrey);
`