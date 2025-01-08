
import './App.css'
import {RouterProvider} from 'react-router-dom'
import {myRouter} from './routers.jsx'

export default function App() {

  return (
    <>
      <div className='app'>
        <RouterProvider router={myRouter} />
      </div>
    </>
  )
}



