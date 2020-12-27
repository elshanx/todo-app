import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.5rem;
  background: #fafafa;
  border: 1px solid #efefef;
  margin: 25px auto;
  padding: 25px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee;
`;

export const AddButton = styled.button`
  width: 8rem;
  padding: 15px;
  margin-left: 10px;
  border-radius: 5px;
  background: #845ec2;
  color: #fafafa;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  border: none;
  outline: none; // it doesnt work (in chrome) for some reason?

  &:disabled {
    background: #b0a8b9;
  }
`;

export const Input = styled.input`
  font-size: 1.4rem;
  width: 20rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #8869e2ba;
  border-radius: 5px;

  ${({ editing }) =>
    editing &&
    `
    font-size: 1.2rem;
  `}
`;

export const Todos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 70%;
  border-bottom: 1px solid #cecece;
  color: #333333;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  /* font-size: 50px; */

  &:focus {
    outline: 1;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;

export const Text = styled.p`
  padding: 10px;
  ${({ completed }) =>
    completed &&
    `
      font-style: italic;
      color: #4444;
      text-decoration: line-through;
    `};
`;

export const EditButton = styled.button`
  margin-left: 10px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;
