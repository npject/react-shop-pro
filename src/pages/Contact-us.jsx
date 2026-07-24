import { useContext, useState } from "react";
import { themeContext } from "context";
import ContanctUsSvg from 'assets/img/svg/undraw_contact-us_kcoa.svg?react';

function ContactUs() {
    const {color} = useContext(themeContext);
    const [inputs,setInputs] = useState({});
    const handleSubmit = (ev)=>{
        ev.preventDefault();
    };
    const handleChange = (ev)=>{
        const name = ev.target.name;
        const value = ev.target.value;
        setInputs(values=> ({...values, [name]:value}));
    };

    return(
        <>
        <div className='container' id='contact-us' data-bs-theme={color} data-theme={color}>
            <div className='row my-5 py-5'>
                <div className="col-lg-6 order-last order-lg-first d-flex flex-column justify-content-center align-items-start">
                    <h2 className='h2 mb-4'>ارتباط ما</h2>
                    <form onSubmit={handleSubmit} className="w-100" >

                        <input className="form-control" type='text' placeholder='نام' name='name' 
                        value={inputs.name} onChange={handleChange} />

                        <input className="form-control my-2" type='email' placeholder='ایمیل' name='email' 
                        value={inputs.email} onChange={handleChange} />

                        <textarea className="form-control mb-3" type='text' placeholder='پیام...' name='message' 
                        value={inputs.message} onChange={handleChange} id="input-message" />

                        <input className="btn btn-custom" type="submit" value="ارسال"  />
                    </form>
                </div>
                <div className="col-lg-6 order-first order-lg-last mb-3 mb-lg-0 d-flex align-items-center">
                    <ContanctUsSvg className='w-100 img-fluid' id='contact-us-svg' />
                </div>
            </div>
        </div>
        </>
    );
}
export default ContactUs;
