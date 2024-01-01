
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [data,setData] = useState({});

    const handleChange = (event) =>{
        setData((prev)=> ({...prev,[event.target.name]:event.target.value}))
        console.log(data);
    }

    const navigate= useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        navigate('/question' , {state:data});
    }
    
    return (
        <>
            <div className="container">
                <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                    <div className="logo">
                        <img src="" />
                    </div>
                    <form className="rounded bg-white/70 shadow p-5" onSubmit={handleSubmit}>
                        <h3 className="text-dark fw-bolder fs-4 mb-2">Welcome to our website</h3>
                        <div className="fw-normal text-muted mb-4">
                            New Here?
                            <div className="text-primary fw-bold text-decoration-none">Fill up your details here...</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="name" name="username" className="form-control" id="floatingInput" placeholder="Your Name" required onChange={handleChange}/>
                            <label for="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" id="floatingemail" placeholder="name@example.com" required onChange={handleChange}/>
                            <label for="floatingemail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" name="cs" className="form-control" id="floatingCS" placeholder="College/School" required onChange={handleChange}/>
                            <label for="floatingCS">College/School Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" name="ss" className="form-control" id="floatingSS" placeholder="Standard/Semester" required onChange={handleChange}/>
                            <label for="floatingSS">Standard(Semester if in College)</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" name="ph" className="form-control" id="floatingnum" placeholder="Phone number" required onChange={handleChange}/>
                            <label for="floatingnum">Phone Number</label>
                        </div>
                        <div className="sel">
                            <select className="form-select form-select-sm"defaultValue={"select the category"} required onChange={handleChange} name='category'>
                                <option className="">Select the category</option>
                                <option value="1">Technical</option>
                                <option value="2">General</option>
                                <option value="3">History</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary submit_btn w-100 my-4 bg-blue-500">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp