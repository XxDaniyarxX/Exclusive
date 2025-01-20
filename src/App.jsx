
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './routers.jsx'
import '../src/index.css'
import { UserProvider } from './UserContext.jsx'

export default function App() {

  return (
     <UserProvider>
      <div className='app'>
        <RouterProvider router={myRouter} />
      </div>
    </UserProvider>
    
  )
}



