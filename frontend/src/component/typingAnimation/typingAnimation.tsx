import React, { useState, useEffect } from 'react';

const defaultTextStyle = {
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold',
    paddingTop: '10px',
    paddingBottom: '10px',
  };
const TypingAnimation = ({ text, typingSpeed = 100,textStyle= defaultTextStyle}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let animationTimeout;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex < text.length-1) {
        animationTimeout = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    typeNextCharacter();

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [text, typingSpeed]);

  return <span style={textStyle} >{displayText}</span>;
};

export default TypingAnimation;
