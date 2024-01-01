import React from 'react'
import { useLocation } from 'react-router-dom'
import './result.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import trophy from './trophy.jpg'

function Result() {
  const location = useLocation();
  const data=location.state
  console.log("result")
  return (
    // <div className="wrapper">
    //     <div className="modal modal--congratulations">
    //         <div className="modal-top">
    //             <img className="modal-icon u-imgResponsive" src={trophy} alt="Trophy" />
    //             <div className="modal-header">Congratulations</div>
    //             <div className="modal-subheader">You have successfully completrd the Quiz</div>
    
    //             <div className="modal-score">Your IQ for : <span className="final-score"> {data}</span>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    
    
    <>
     <div className="wrapper">
      <div className="modal modal--congratulations">
        <div className="modal-top">
          <img className="modal-icon img-fluid" src={trophy} alt="Trophy" />
          <div className="modal-header h3">Congratulations</div>
          <div className="modal-subheader">You have successfully completed the Quiz</div>
          <div className="modal-score d-flex justify-content-center align-items-center font-weight-bold border p-3">
            Your Score: <span className="final-score">0</span>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Result