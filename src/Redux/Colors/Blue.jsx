import { changeColor } from "../count/colorSlice"
import { useDispatch } from "react-redux"

function Blue() {
    const dispath = useDispatch()


    return (
        <div>
            <button onClick={() => dispath(changeColor('blue'))}>Blue</button>
        </div>
    )
}

export default Blue