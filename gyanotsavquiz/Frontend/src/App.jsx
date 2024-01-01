import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './Components/Question'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



function App() {
  const [questions,setQuestions] = useState([])
  const [answer,setAnswers] = useState({
    
  })
  const location = useLocation();
  const data=location.state;
  console.log(data);
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/questions/${data.category}`).then((res) => setQuestions(res.data))
  },[]);

  
  const handleChange = (event)=>{
    const name=event.target.name;
    const value = event.target.value;
    setAnswers(values => ({...values,[name]: value}))
  }
  
    
  const navigate=useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    // console.log(answer);
    axios.post('http://localhost:5000/answer',{answer,data})
    .then(res => {
      console.log(res.data);
      navigate('/result',{state:res.data})
    })
    .catch(err => console.log(err))
  }



  console.log(questions);
  if (questions.length<4)
    return (
      <div>
          <h1> Pleses wait some time.... </h1>
      </div>
    );
  return (
    <>
      <div className='w-full bg-cover h-screen'
        >
          <div className='w-full'>
            <div className='w-auto max-w-2xl mx-auto my-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/70'>
              <form action="" onSubmit={handleSubmit}>
                <div className='mt-3'>
                  <Question queNo={1} question={questions[0].question} option1={questions[0].option1} option2={questions[0].option2} option3={questions[0].option3} option4={questions[0].option4 } question_id={questions[0].question_id} handleChange={handleChange}/>
                </div>
                <div className='mt-3'>
                  <Question queNo={2} question={questions[1].question} option1={questions[1].option1} option2={questions[1].option2} option3={questions[1].option3} option4={questions[1].option4} question_id={questions[1].question_id} handleChange={handleChange}/>
                </div>
                <div className='mt-3'>
                <Question queNo={3} question={questions[2].question} option1={questions[2].option1} option2={questions[2].option2} option3={questions[2].option3} option4={questions[2].option4} question_id={questions[2].question_id}  handleChange={handleChange}/>
                </div>
                <div className='mt-3'>
                <Question queNo={4} question={questions[3].question} option1={questions[3].option1} option2={questions[3].option2} option3={questions[3].option3} option4={questions[3].option4} question_id={questions[3].question_id}  handleChange={handleChange}/>
                </div>
                <div className='mt-3'>
                <Question queNo={5} question={questions[4].question} option1={questions[4].option1} option2={questions[4].option2} option3={questions[4].option3} option4={questions[4].option4} question_id={questions[4].question_id} handleChange={handleChange}/>
                </div >
                <div className='w-full flex justify-center m-2'>
                  <button type='submit' className='w-auto bg-white p-2 rounded-lg '>Submit</button> 
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
