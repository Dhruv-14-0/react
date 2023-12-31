import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'
import bodyParser from 'body-parser';

const app =express();

const port = 3000;


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(express.json());
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser for form data

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "quiz",
  });


// Define a route to serve the registration form
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

// Define a route to handle registration form submissions
app.post('/register', (req, res) => {
  const { username, email, cs, ss, ph, category } = req.body;

  // Insert the form values into the MySQL table
  connection.query(
    'INSERT INTO student (name, email, school, std, phone_number, category) VALUES (?, ?, ?, ?, ?, ?)',
    [username, email, cs, ss, ph, category],
    (error, results, fields) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Successful insertion
      return res.status(200).json({ message: 'Registration successful' });
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
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

     if(!category.equals("1"))
  {

    var table_name = "category${category}"


    //code for displaying questions
    for(var i= 1;i<=3;i++){
      document.write("level${i}")

      const query = 'SELECT COUNT(*) as rowCount FROM table_name';

      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error(error);
          return;
        }
      
        // Access the result
        const rowCount = results[0].rowCount;
        
      });

        if(i!=3)
        { var n=4}
        else
        { var n=2}

      let arr=randomIntArrayInRange(1,rowCount,n)
    try {
        const data = await connection.promise().query( 
          `SELECT question_id,question,option1,option2,option3,option4 from ${table_name} where question_id in (${arr}) and level=${i}`
        );
        console.log(arr);
        res.status(200).json(data[0]);
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }

      
      
    }
    
  }

  else
  {
    // code for category 1(technical)
  }
  /*

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
  */

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
