
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import './signUp.css'
import cvm from './Images/cvm.png'
import adit from './Images/adit.png'
import gyanotsav from './Images/gyanotsav.png'

function SignUp() {

    const [data, setData] = useState({});

    const handleChange = (event) => {
        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        console.log(data);
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/question', { state: data });
    }

    return (
        // <>
        //     <div className="container">
        //         <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
        //             <div className="logo">
        //                 <img src="" />
        //             </div>
        //             <form className="rounded bg-white/70 shadow p-5" onSubmit={handleSubmit}>
        //                 <h3 className="text-dark fw-bolder fs-4 mb-2">Welcome to our website</h3>
        //                 <div className="fw-normal text-muted mb-4">
        //                     New Here?
        //                     <div className="text-primary fw-bold text-decoration-none">Fill up your details here...</div>
        //                 </div>
        //                 <div className="form-floating mb-3">
        //                     <input type="name" name="username" className="form-control" id="floatingInput" placeholder="Your Name" required onChange={handleChange}/>
        //                     <label for="floatingInput">Name</label>
        //                 </div>
        //                 <div className="form-floating mb-3">
        //                     <input type="email" name="email" className="form-control" id="floatingemail" placeholder="name@example.com" required onChange={handleChange}/>
        //                     <label for="floatingemail">Email address</label>
        //                 </div>
        //                 <div className="form-floating mb-3">
        //                     <input type="text" name="cs" className="form-control" id="floatingCS" placeholder="College/School" required onChange={handleChange}/>
        //                     <label for="floatingCS">College/School Name</label>
        //                 </div>
        //                 <div className="form-floating mb-3">
        //                     <input type="text" name="ss" className="form-control" id="floatingSS" placeholder="Standard/Semester" required onChange={handleChange}/>
        //                     <label for="floatingSS">Standard(Semester if in College)</label>
        //                 </div>
        //                 <div className="form-floating mb-3">
        //                     <input type="text" name="ph" className="form-control" id="floatingnum" placeholder="Phone number" required onChange={handleChange}/>
        //                     <label for="floatingnum">Phone Number</label>
        //                 </div>
        //                 <div className="sel">
        //                     <select className="form-select form-select-sm"defaultValue={"select the category"} required onChange={handleChange} name='category'>
        //                         <option className="">Select the category</option>
        //                         <option value="1">Technical</option>
        //                         <option value="2">General</option>
        //                         <option value="3">History</option>
        //                     </select>
        //                 </div>
        //                 <button type="submit" className="btn btn-primary submit_btn w-100 my-4 bg-blue-500">Submit</button>
        //             </form>
        //         </div>
        //     </div>
        // </>
        // <div className='body'>
        //     <section className='wrapper2'>
        //         <div className="container">


        //             <form className='text-center'>
        //                 <h3>Welcome to our website</h3>
        //                 <div >
        //                     New Here?
        //                     <div>Fill up your details here...</div>
        //                 </div>
        //                 <div className="form-floating">
        //                     <input type="name" name="username" className="form-control" id="floatingInput" placeholder="Your Name" required />
        //                     <label htmlFor="floatingInput">Username</label>

        //                 </div>
        //                 <div className="form-floating">
        //                     <input type="email" name="email" className="form-control" id="floatingemail" placeholder="name@example.com" required />
        //                     <label htmlFor="floatingemail">Email address</label>
        //                 </div>
        //                 <div class="form-floating">
        //                     <input type="text" name="cs" className="form-control" id="floatingCS" placeholder="College/School" required />
        //                     <label htmlFor="floatingCS">College/School Name</label>
        //                 </div>
        //                 <div class="form-floating">
        //                     <input type="text" name="ss" className="form-control" id="floatingSS" placeholder="Standard/Semester" required />
        //                     <label htmlFor="floatingSS">Standard/Semester</label>
        //                 </div>
        //                 <div class="form-floating">
        //                     <input type="text" name="ph" className="form-control" id="floatingnum" placeholder="Phone number" required />
        //                     <label htmlFor="floatingnum">Phone Number</label>
        //                 </div>
        //                 <div className="sel">
        //                     <select className="form-select" required>
        //                         <option defaultValue class="">Select the category</option>
        //                         <option value="1">Technical</option>
        //                         <option value="2">General</option>
        //                         <option value="3">History</option>
        //                     </select>
        //                 </div>
        //                 <a href="quiz.html">
        //                     <button type="submit" className="submit_btn">Submit</button>
        //                 </a>
        //             </form>
        //         </div>
        //     </section>
        // </div>

        <div className="container mx-auto">
            {/* Form container */}
                <div className='flex h-48 justify-between'>
                    <img src={cvm} alt="Logo" width={"300px"}/>
                    {/* <img src={gyanotsav} alt="Logo" className=''/> */}
                    <img src={adit} alt="Logo" className=''/>

                </div>
            <div className="mx-auto sm:w-8/12 lg:w-6/12 xl:w-4/12 text-center">
                {/* Logo */}

                {/* Form */}
                <form className="rounded-lg bg-gray-500 bg-opacity-70 shadow-gray-500 shadow-lg p-5" onSubmit={handleSubmit} autoComplete='off'>
                    <h3 className="text-dark font-bold text-lg mb-2">Welcome to Byte Brain Challenge</h3>

                    {/* New user message */}
                    <div className="text-white mb-4">
                        New Here?
                        <div className="text-blue-500 font-bold cursor-pointer">Fill up your details here...</div>
                    </div>

                    {/* User details inputs */}
                    <div className="mb-3">
                        <input type="text" name="username" className="form-input w-full px-4 py-2 border rounded" placeholder="Your Name" required onChange={handleChange} autoComplete='off' />
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-input w-full px-4 py-2 border rounded" placeholder="name@example.com" required onChange={handleChange} autoComplete='off' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="cs" className="form-input w-full px-4 py-2 border rounded" placeholder="College/School" required onChange={handleChange} autoComplete='off' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="ss" className="form-input w-full px-4 py-2 border rounded" placeholder="Standard/Semester" required onChange={handleChange} autoComplete='off' />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="ph" className="form-input w-full px-4 py-2 border rounded" placeholder="Phone number" required onChange={handleChange} autoComplete='off' />
                    </div>

                    {/* Category selection */}
                    <div className="mb-3">
                        <select className="form-select w-full px-4 py-2 border rounded" defaultValue={"select the category"} required onChange={handleChange} name='category'>
                            <option className="">Select the category</option>
                            <option value={1}>Technical</option>
                            <option value={2}>General</option>
                            <option value={3}>History</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn-primary w-full py-2 my-4 bg-blue-500 hover:bg-blue-900 rounded-md text-white">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp