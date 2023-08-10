
// import React from 'react';
// import "./header.css";

// const Header=() =>{
//   const handleSignUp=()=>{
//     // console.log('h');
    
//   }
//   return (
//    <div className='container'>
//     <div className='leftContainer'>
//     <text className=''>Bro AI</text>
//     <text className=''> Home</text>
//     <text className=''> Pricing</text>
//     <text className=''> About Me</text>
//     <text className=''> Contact</text>
//     </div>
//     <div className='btnConatiner'>
//     <button onClick={handleSignUp}>
//       Sign Up
//     </button>
//     <button onClick={handleSignUp}>
//       Click Me
//     </button>
//     </div>
//    </div>

//   );
// }

// export default Header;
import React from 'react';
import styled from 'styled-components';
import { appColor } from '../../assets/index.tsx';


interface HeaderProps {
  btnStyle: Object,
  onClick: () => void;
  text: string;
}



const ButtonContainer = styled.div`
  display: flex;
  padding-top:10px;
  
`;

const Button = styled.button`
  background-color: ${appColor.btnColor};; /* Custom background color */
  color: white;
  border: none;
  padding: 10px 30px;
 
  cursor: pointer;
  border-radius:20px
  
`;

const CustomButton: React.FC<HeaderProps> = ({
btnStyle,
  onClick,
  text
}) => {
  return (
      <ButtonContainer>
        <Button style={btnStyle} onClick={onClick}>{text}</Button>
      </ButtonContainer>
   
  );
};

export default CustomButton;

