import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './result.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import trophy from './Images/trophy.jpg'

function Result() {
  const location = useLocation();
  const data = location.state
  console.log("result")
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate('/')
  }
  return (
    <div className="wrapper">
        <div className="modal modal--congratulations">
            <div className="modal-top">
                <img className="modal-icon u-imgResponsive" src={trophy} alt="Trophy" />
                <div className="modal-header">Congratulations</div>
                <div className="modal-subheader">You have successfully completrd the Quiz</div>

                <div className="modal-score">Your Score: <span className="final-score"> {data}</span>
                </div>
                <div className='flex justify-center mt-2'>
                  <button className='bg-blue-500 text-white rounded-lg p-2 mt' onClick={handleclick}>Home page</button>
                </div>
                
            </div>
        </div>
    </div>


    // <>
    //   {/* <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat" style="background-image: url('./Cong.gif');">

    //     <div className="modal modal--congratulations bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto mt-16">
    //       <div className="modal-top">
    //         <img className="modal-icon w-16 h-16 mx-auto mb-4" src={trophy} alt="Trophy" />
    //         <div className="modal-header text-lg font-semibold">Congratulations</div>
    //         <div className="modal-subheader text-sm text-gray-600">You have successfully completed the Quiz</div>

    //         <div className="modal-score mt-4">Your Score: <span className="final-score font-bold">{data}</span></div>
    //       </div>
    //     </div>
    //   </div> */}

    // </>
  )
}

export default Result