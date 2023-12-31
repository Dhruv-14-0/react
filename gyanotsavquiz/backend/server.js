import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'
const app =express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(express.json());
app.use(cors())
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "quiz",
  });



app.get('/',(req,res)=>{
    res.send("Hi");
})
const randomIntArrayInRange = (min, max, n = 1) =>{
  let a=[]
  while (a.length<n) {
    let rand=Math.floor(Math.random() * (max - min + 1)) + min
    if(!a.includes(rand)){
      a.push(rand)
    }
  }
  return a;
}

app.get("/questions", async(req, res) => {

    let arr=randomIntArrayInRange(1,9,5)
    try {
        const data = await connection.promise().query( 
          `SELECT question_id,question,option1,option2,option3,option4 from questions where question_id in (${arr})`
        );
        console.log(arr);
        res.status(200).json(data[0]);
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
});

app.post("/answer",async(req,res)=>{
  // console.log(req.body);
  const queId=Object.keys(req.body)
  const ans=Object.values(req.body)
  console.log(queId);
  console.log(ans);
  const data = await connection.promise().query( 
    `SELECT correct_option from questions where question_id in (${queId})`
  );
  console.log(data[0]);
  let correct_answers=0

  for(let i=0;i<5;i++){
    if(data[0][i].correct_option==ans[i]) correct_answers++;
  }
  console.log(correct_answers);
})

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})