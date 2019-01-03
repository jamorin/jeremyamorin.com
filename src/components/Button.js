import styled from 'styled-components';

export default styled.button`
  background-color: transparent;
  border: 3px solid ${props => props.theme.main};
  border-radius: 10000px;
  color: ${props => props.theme.main};
  align-self: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.2rem 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.main};
    color: #fff;
  }
`;
