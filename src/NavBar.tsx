import React from 'react';
import Title from './Title.tsx';
import Button from './Button.tsx';

interface Props {
  title: string;
  button: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ title, button }) => {
  const handleClick = () => {
    // Handle click logic here
    console.log('Button clicked!');
  };

  return (
    <nav>
      <Title text={title} />
      {button}
      <Button onClick={handleClick}>Create an account</Button>
      <Button onClick={handleClick}>Log in</Button>
    </nav>
  );
};

export default NavBar;