import { useEffect,} from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../Redux/User/UserSlice"
import Loading from '../utils/Loading/Loading'

export default function Service() {
    const dispath = useDispatch()
    const { loading, users, error } = useSelector((state) => state.list)

    useEffect(() => {
        dispath(fetchUsers())
    }, [dispath])

    console.log(users);
    if (loading) return <Loading />
    if (error) return <h1>Error: {error}</h1>


    return (
        <div>
            <h1>Service</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <img src={user.image} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

