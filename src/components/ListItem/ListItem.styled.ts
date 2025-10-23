import styled from 'styled-components';


export const ListItemLink = styled.a.attrs({
    className: 'link'
  })`
    text-decoration: none;
    padding: 10px;
    display: block;
  
    &.done {
      color: green;
    }
  
    &.notDone {
      color: red;
    }
  
    &:hover {
      opacity: 0.2;
    }
  `