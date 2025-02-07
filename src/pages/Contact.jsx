import { useEffect, useState } from 'react';
import Info from '../components/Todo/Info';
import Count from '../components/Todo/Count';
import Red from '../components/Todo/Red';
import Red2 from '../Redux/Colors/Red';
import Block2 from '../Redux/Colors/Block';
import Blue from '../components/Todo/Blue';
import Green from '../components/Todo/Green';
import Green2 from '../Redux/Colors/Green';
import Pink from '../components/Todo/Pink';
import Blue2 from '../Redux/Colors/Blue';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function Contact() {
  // const [value, setValue] = useState(0);
  // const [color, setColor] = useState('gray');

  // const increment = () => setValue(value => value + 1);
  // const decrement = () => setValue(value => (value > 0 ? value - 1 : value));
  // const changeColor = (newColor) => setColor(newColor);
 
   
  return (
    <div>
      Contact
      {/* <Info count={value} />
      <Count clicked={increment} decrement={decrement} /> */}
      {/* <Red changeColor={changeColor} />
      <Blue changeColor={changeColor} />
      <Green changeColor={changeColor} />
      <Pink changeColor={changeColor} />
      <Block color={color} /> */}
      {/* <Block2 />
      <Blue2 />
      <Red2 />
      <Green2 />  */}

    </div>
  );
}