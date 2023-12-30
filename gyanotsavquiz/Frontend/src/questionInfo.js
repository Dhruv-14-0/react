import React, { useEffect, useState } from 'react'
import axios from 'axios';

function questionInfo() {
    const [questions,setQuestions] = useState([])
        console.log("in useEffect");
        // axios.get('http://localhost:5000/questions')
        //   .then((response) => {
        //     console.log("Dhruv",response);
        //     setQuestions(response.data);
        //   })
        //   .catch(error => {
        //     console.error("Sid",error);
        //   });
        fetch(`http://localhost:5000/questions`).then((res)=> {console.log(res);;res.json()}).then((res)=>setQuestions(res))
      return questions;
}

export default questionInfo