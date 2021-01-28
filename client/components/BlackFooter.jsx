import React from 'react';
import styled from 'styled-components';

const BlackBackgroundDiv = styled.div`
  background: black;
  color: white;
`;
const Whoarewe = styled.section`
  box-sizing: border-box;
  width: 33%;
  display: inline-block;
`;
const FourWay = styled.section`
  box-sizing: border-box;
  width: 25%;
  display: inline-block;
`;
const Seperator = styled.section`
  padding: 2em;
  margin: 2em;
  border-bottom: 0.5px solid white;
`;
const P1 = styled.p`
  margin-right: 1em;
`;
const P1l = styled.p`
  margin-right: 1em;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }

`;

const GreenText = styled.h2`
  color: #a1c900;
  font-weight: 600;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;
const WhiteText = styled.h2`
  color: white;
  font-weight: 600;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

const BlackFooter = () => (
  <BlackBackgroundDiv>
    <Seperator>
      <span>
        <Whoarewe>
          <GreenText>Who we are</GreenText>
          <P1>
            At REI, we believe that a life outdoors is a life well lived.
            Weve been sharing our passion for the outdoors since 1938.Read our story
          </P1>
        </Whoarewe>
      </span>
      <span>
        <Whoarewe>
          <GreenText>Become a member</GreenText>
          <P1>
            Join the REI Co-op community to get an annual dividend,
            access exclusives and give back. Lifetime membership is just $20. Learn more and join us
          </P1>
        </Whoarewe>
      </span>
      <span>
        <Whoarewe>
          <GreenText>Apply For REI Co-op Mastercard®</GreenText>
          <P1>
            Earn a $100 REI Gift Card when you apply, get approved and make any
            purchase within 60 days of card approval.Details
            Have it?Manage your card
          </P1>
        </Whoarewe>
      </span>
    </Seperator>
    <Seperator>
      <FourWay>
        <P1l>Return Policy</P1l>
        <P1l>Return Insruction</P1l>
        <P1l>Your Online Account</P1l>
        <P1l>Purchase Status</P1l>
        <P1l>Shipping Info</P1l>
        <P1l>Membership</P1l>
      </FourWay>
      <FourWay>
        <P1l>Expert Advice</P1l>
        <P1l>Classes, Tours, and Events</P1l>
        <P1l>Store Events</P1l>
        <P1l>REI adventure trips</P1l>
        <P1l>Co-op Journal</P1l>
        <P1l>Conversations</P1l>
      </FourWay>
      <FourWay>
        <P1l>Virtual Outfitting</P1l>
        <P1l>Classes, Tours, and Events</P1l>
        <P1l>Store Events</P1l>
        <P1l>REI adventure trips</P1l>
        <P1l>Co-op Journal</P1l>
        <P1l>Free Shipping Details</P1l>
      </FourWay>
      <FourWay>
        <P1l>About REI</P1l>
        <P1l>Stewardships</P1l>
        <P1l>Jobs</P1l>
        <P1l>News room</P1l>
        <P1l>Technology Blog</P1l>
        <P1l>Sell at REI</P1l>
      </FourWay>
    </Seperator>
    <Seperator>
      <span>
        <Whoarewe>
          <WhiteText>Help Center</WhiteText>
          <P1>
            Find answers online anytime.
          </P1>
          <P1>
            Ready to answer!
          </P1>
        </Whoarewe>
      </span>
      <span>
        <Whoarewe>
          <WhiteText>Live Chat</WhiteText>
          <P1>
            Mon–Fri, 5am–10pm PM
          </P1>
          <P1>
            Sat–Sun, 6am–9pm PT
          </P1>
        </Whoarewe>
      </span>
      <span>
        <Whoarewe>
          <WhiteText>Call us at: 1-800-426-4840</WhiteText>
          <P1>
            Mon–Fri, 5am–10pm PM
          </P1>
          <P1>
            Sat–Sun, 6am–9pm PT
          </P1>
        </Whoarewe>
      </span>
    </Seperator>
    <img
      alt="help"
      src="https://i.imgur.com/wmqgNqy.png"
    />
  </BlackBackgroundDiv>

);

export default BlackFooter;
