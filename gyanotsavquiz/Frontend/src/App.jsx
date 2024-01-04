import { useState, useEffect } from 'react'
import './App.css'
import Question from './Components/Question'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



function App() {
  const [questions, setQuestions] = useState([])
  const [answer, setAnswers] = useState({})
  const [time, setTime] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  const location = useLocation();
  const data = location.state;
  console.log(data);
  useEffect(() => {
    axios.get(`http://localhost:5000/questions/${data.category}`).then((res) => setQuestions(res.data))
    setTime(new Date())
    console.log(time);
  }, []);



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAnswers(values => ({ ...values, [name]: value }))
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(answer);
    let endTime = new Date()
    console.log(endTime);
    const completeTime = Math.floor(endTime.getTime() - time.getTime()) / 1000;
    axios.post('http://localhost:5000/answer', { answer, data, completeTime })
      .then(res => {
        console.log(res.data);
        navigate('/result', { state: res.data })
      })
      .catch(err => console.log(err))
  }



  console.log(questions);
  // useEffect(()=>{
  //   let interval=null;
  //   if(isActive){
  //     interval=setInterval(()=>{
  //       setTimer((time)=>time+10)
  //     },10)
  //   }
  //   else{
  //     clearInterval(interval)
  //   }
  // },[isActive])
  if (questions.length < 4)
    return (
      <div>
        <h1> Pleses wait some time.... </h1>
      </div>
    );

  return (
    <>
      <div className='w-full bg-cover h-screen'>
        <div className='w-full'>
          <div className='w-auto max-w-2xl mx-auto my-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-black/70'>
            {/* <div> <Timer time={time} /></div> */}
            <form action="" onSubmit={handleSubmit}>
              <div className='mt-3'>
                <Question queNo={1} question={questions[0].question} option1={questions[0].option1} option2={questions[0].option2} option3={questions[0].option3} option4={questions[0].option4} question_id={questions[0].question_id} handleChange={handleChange} />
              </div>
              <div className='mt-3'>
                <Question queNo={2} question={questions[1].question} option1={questions[1].option1} option2={questions[1].option2} option3={questions[1].option3} option4={questions[1].option4} question_id={questions[1].question_id} handleChange={handleChange} />
              </div>
              <div className='mt-3'>
                <Question queNo={3} question={questions[2].question} option1={questions[2].option1} option2={questions[2].option2} option3={questions[2].option3} option4={questions[2].option4} question_id={questions[2].question_id} handleChange={handleChange} />
              </div>
              <div className='mt-3'>
                <Question queNo={4} question={questions[3].question} option1={questions[3].option1} option2={questions[3].option2} option3={questions[3].option3} option4={questions[3].option4} question_id={questions[3].question_id} handleChange={handleChange} />
              </div>
              <div className='mt-3'>
                <Question queNo={5} question={questions[4].question} option1={questions[4].option1} option2={questions[4].option2} option3={questions[4].option3} option4={questions[4].option4} question_id={questions[4].question_id} handleChange={handleChange} />
              </div >
              <div className='mt-3'>
                <Question queNo={6} question={questions[5].question} option1={questions[5].option1} option2={questions[5].option2} option3={questions[5].option3} option4={questions[5].option4} question_id={questions[5].question_id} handleChange={handleChange} />
              </div >
              <div className='mt-3'>
                <Question queNo={7} question={questions[6].question} option1={questions[6].option1} option2={questions[6].option2} option3={questions[6].option3} option4={questions[6].option4} question_id={questions[6].question_id} handleChange={handleChange} />
              </div >
              <div className='mt-3'>
                <Question queNo={8} question={questions[7].question} option1={questions[7].option1} option2={questions[7].option2} option3={questions[7].option3} option4={questions[7].option4} question_id={questions[7].question_id} handleChange={handleChange} />
              </div >
              <div className='mt-3'>
                <Question queNo={9} question={questions[8].question} option1={questions[8].option1} option2={questions[8].option2} option3={questions[8].option3} option4={questions[8].option4} question_id={questions[8].question_id} handleChange={handleChange} />
              </div >
              <div className='mt-3'>
                <Question queNo={10} question={questions[9].question} option1={questions[9].option1} option2={questions[9].option2} option3={questions[9].option3} option4={questions[9].option4} question_id={questions[9].question_id} handleChange={handleChange} />
              </div >
              <div className='w-full flex justify-center m-2'>
                <button type='submit' className='w-auto bg-blue-500 p-2 rounded-lg hover:bg-blue-900 text-white'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
