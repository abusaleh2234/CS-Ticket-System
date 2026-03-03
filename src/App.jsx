
import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Tickets from './Component/Tickets/Tickets'
import Status from './Component/Status/Status'

const ticketsFetch = async () => {
  const res = await fetch("tickets.json")
  return res.json()
}
function App() {
  const ticketsPromise = ticketsFetch()

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5] ">
        <div className=" max-w-7xl mx-auto">
          <Banner></Banner>

          <div className="flex gap-5">
            <Suspense fallback={<h2>Tickets is loading ....</h2>}>
              <Tickets ticketsPromise={ticketsPromise}></Tickets>
            </Suspense>

            <div className="w-1/3">
              <Status></Status>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
