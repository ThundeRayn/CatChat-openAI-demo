import './App.css'
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Button className='hover:cursor-pointer'>Click me</Button>
      </div>
    </>
  )
}

export default App
