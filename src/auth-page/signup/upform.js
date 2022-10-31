import { useRef } from 'react';
import './auth-form.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Upform (){
    
    const emailRef = useRef()
    function handlerSubmit(e){
        e.preventDefault()
        fetch('https://boxherr.herokuapp.com/signup',{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({
                email:emailRef.current.value
            })
        })
        .then(res =>  res.ok && res.json())
        .then(data => {
            if(data.Users){
                toast.success(data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                localStorage.setItem("token",JSON.stringify(data.Users.token))
                window.location.reload()
                console.log(data)
            }else{
                toast.error("User already exsist", {
                    position: toast.POSITION.TOP_RIGHTa
                });
            }
        })
    }
    return (
        <>
            <div className='auth-form'>
            <h1 className="auth-form__head">Sign up with E-mail Address</h1>

            <div className="auth-form__form">
                <p className="auth-form__email">E-mail address</p>
                <form method="POST" action="#" onSubmit={handlerSubmit}>
                    <div className='auth-form__wrraper'>
                        <input className="auth-form__input"  type={'email'} placeholder="Please insert e-mail address." required ref={emailRef}/>
                        <button className="auth-form__btn" type="submit">Next</button>
                    </div>
                </form>
            </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default Upform;