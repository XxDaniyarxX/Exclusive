import { useDispatch } from 'react-redux';
import { changeColor } from '../count/colorSlice';

export default function Red() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(changeColor('green'))}>
      Green
    </button>
  );
}