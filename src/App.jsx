
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5] ">
        <div className=" max-w-7xl mx-auto">
            <Banner></Banner>

            <div className="">
              
            </div>
        </div>
        
      </div>
    </>
  )
}

export default App
