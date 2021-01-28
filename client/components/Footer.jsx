import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  margin-left: 29%;
  margin-botton: 2em;
`;
const SignUp = styled.div`
  text-align: center;
  margin-top: 5%;
  padding-top: 5%;
  border-top: 0.5px solid black;
`;
const Rltd = styled.ul`
  align-self: left;
  font-weight: bold;
  font-size: 24px;
`;
const Rlt = styled.li`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  display: inline;
  margin-left: 2em;
  font-size: 18px;
`;
const Tree = styled.img`
  height: 50px;
  display: inline;
  width: 56px;
  margin-top: 5rem;
`;
const TreeText = styled.span`
  margin: 2em;
`;
const FormInput = styled.input`
  width: 40%;
  height: 25px;
  margin-left: 1em;
  margin-top: 1em;
`;
const Submit = styled.button`
:hover {
  cursor: pointer;
  font-size: 1em;
  margin-left: 1em;
  padding: 0.7em;
  background: #c7dfd1;
  color: green;
};
font-size: 1em;
margin-left: 1em;
padding: 0.7em;
background: #225c4e;
color: white;
`;
const Email = styled.p`
  margin-left: 1em;
`;

const Footer = () => (
  <div>
    <Rltd>Related categories </Rltd>
    <br />
    <Rlt>Coolers</Rlt>
    <Rlt>YETI</Rlt>
    <Rlt>Camp Coolers</Rlt>
    <Rlt>YETI Cooler</Rlt>
    <Rlt>YETI soft sided Coolers</Rlt>
    <br />
    <Rlt>YET Hard sided coolers</Rlt>
    <Rlt>Soft sided coolers</Rlt>
    <Rlt>hard sided coolers</Rlt>
    <br />
    <Center>
      <Tree
        src="https://satchel.rei.com/media/img/footer/trees_left.svg"
        alt="logo"
      />
      <TreeText>How are we doing? Give us feedback on this page.</TreeText>
      <Tree
        src="https://satchel.rei.com/media/img/footer/trees_right.svg"
        alt="logo"
      />
    </Center>
    <SignUp>
      <h3>Sign up for REI emails</h3>
      <p>Co-op offers, events & cool new gear</p>
    </SignUp>
    <Center>
      <Email>Email:</Email>
      <FormInput type="input" placeholder="Enter your email address?" />
      <Submit type="button">Sign me up!</Submit>
    </Center>
  </div>
);

export default Footer;
