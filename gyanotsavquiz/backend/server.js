import express from 'express';
import mysql from 'mysql2';
// import cors from 'cors'
const app =express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());
// app.use(cors)
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

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})