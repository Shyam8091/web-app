import styled from "styled-components";
export const InputBox = styled.input`
  outline: none;
  padding: 16px 22px;
  border: ${props=>props.size>2?"1px solid pink":"7px solid pink"};
  font-size: 18px;
  border-radius: 5px;

  &:focus
  {
    border: 2px solid royalblue;
  };
 
`;
export const Para = styled.p`
  &:hover {
    color: red;
    font-size:20px // <Thing> when hovered
  }
`;
