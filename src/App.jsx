
import { Suspense, use, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Tickets from './Component/Tickets/Tickets'
import Status from './Component/Status/Status'
import Footer from './Component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const ticketsFetch = async () => {
  const res = await fetch("tickets.json")
  return res.json()
}
const ticketsPromise = ticketsFetch()
function App() {
  const ticketsData = use(ticketsPromise)
  const [processedTickets, setProcessedTickets] = useState(ticketsData)
  
  const [progress, setProgress] = useState([])
  const [resolved, setResolved] = useState([])
  // console.log(resolved);
  
// console.log(progress);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5] ">
        <div className=" max-w-7xl mx-auto px-2 md:px-0">
          {/* banner section */}
          <Banner progress={progress} resolved={resolved}></Banner>

            {/* Customer ticket */}
          <div className="flex md:flex-row flex-col-reverse gap-5 pb-10">
            <Suspense fallback={<h2>Tickets is loading ....</h2>}>
              <Tickets 
              progress={progress} 
              setProgress={setProgress} 
              processedTickets={processedTickets}></Tickets>
            </Suspense>
              {/* Status section */}
            <div className=" w-full md:w-1/3">
              <Status 
              setProcessedTickets={setProcessedTickets}
              processedTickets={processedTickets}
              setProgress={setProgress} 
              setResolved={setResolved} 
              resolved={resolved} 
              progress={progress} ></Status>
            </div>

          </div>
        </div>
        {/* footer Section */}
        <div className="bg-black">
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
