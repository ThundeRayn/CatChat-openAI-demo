import './App.css'
import Chatbot from './components/pages/Chatbot'

function App() {

  return (
    <>
      <div 
        className='flex flex-col items-center justify-center h-screen
       bg-gradient-to-r from-orange-200 to-orange-100'>
        <Chatbot />
      </div>
    </>
  )
}

export default App
