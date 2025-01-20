import { useSelector } from "react-redux"

export default function Block() {
    const color = useSelector((state) => state.color)

    return (
        <div style={{width: '400px', height: '200px', backgroundColor: color, margin: '0 auto'}}>

        </div>
    )
}
