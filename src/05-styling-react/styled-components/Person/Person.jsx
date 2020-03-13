import React from "react";
import styled from "styled-components";
import "./Person.css";

const person = props => {
  const { name, age, children, click, changed } = props;
  const StyledDiv = styled.div`
    width: 60%;
    margin: 10px auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px) {
      width: 450px;
    }
  `;

  return (
    <StyledDiv>
      <p onClick={click}>
        Im a {name}! and I am {age} years old
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
  );
};
export default person;
