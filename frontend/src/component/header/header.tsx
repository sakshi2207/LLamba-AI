import React from 'react';
import styled from 'styled-components';
import CustomButton from '../customButton/customButton.tsx';
import { useNavigate } from 'react-router-dom';



interface HeaderProps {
  props: Object
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightpurple; /* Custom background color */
  padding-top: 10px;
  padding-bottom: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
`;
const Heading = styled.div`
  padding: 0 10px;
  cursor: pointer;
  font-weight:700;
  color: white
`;
const Option = styled.div`
  padding: 0 10px;
  cursor: pointer;
  color: white
`;


const Header: React.FC<HeaderProps> = () => {

  const navigate = useNavigate();

const onHomePress=()=>{
  navigate('/home');
}

const onPricingPress=()=>{
  navigate('/Home');
}
const onAboutPress=()=>{
  navigate('/about');
}
const onContactPress=()=>{
  navigate('/contact');
}
const onLoginPress=()=>{
  navigate('/login');
}
const onSignupPress=()=>{
  navigate('/signup');
}
  return (
    <HeaderContainer>
      <OptionsContainer>
      <Heading >AI APP</Heading>
        <Option onClick={onHomePress}>Home</Option>
        <Option onClick={onPricingPress}>Pricing</Option>
        <Option onClick={onAboutPress}>About Us</Option>
        <Option onClick={onContactPress}>Contact</Option>
      </OptionsContainer>
      
        <CustomButton onClick={onLoginPress} text="Login"/>
        <CustomButton onClick={onSignupPress} text="Signup"/>
     
    </HeaderContainer>
  );
};

export default Header;

