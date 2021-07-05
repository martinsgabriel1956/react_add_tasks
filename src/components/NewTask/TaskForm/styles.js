import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    font: inherit;
    padding: 0.25rem;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;
    margin-right: 2rem;

    &:focus {
      outline: none;
      border-color: #7a0144;
    }
  }
`;
