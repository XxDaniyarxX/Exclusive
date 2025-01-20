import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTimer } from "../../Redux/count/countSlice"

export default function Count({ clicked, decrement }) {
  const {timer} = useSelector((state) => state.check)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={clicked}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <h2>{timer}</h2>
      <button onClick={() => dispatch(addTimer())}>Click Redux</button>
    </div>
  )
}

 
