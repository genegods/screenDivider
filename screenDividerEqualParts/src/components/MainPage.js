import React from 'react'
import { DivisionData } from "../data/DivisionData";

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="grid grid-cols-3 md:w-2/5 md:mx-auto">
          {
              DivisionData.map((item,index) =>{
                  return(
                      <div key={index}
                      className={`bg-gray-400 w-full h-40 border text-5xl centered ${item.color}`}
                      >
                          <div>{item.number}</div>
                      </div>
                  )
              })
          }
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage