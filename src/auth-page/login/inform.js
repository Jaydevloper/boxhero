import { useRef } from 'react';
import '../signup/auth-form.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Inform (){
    const emailRef = useRef()
    function handlerSubmit(e){
        e.preventDefault()
        fetch('https://boxhero.onrender.com/login',{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({
                email:emailRef.current.value
            })
        })
        .then(res =>  res.ok && res.json())
        .then(data => {
            if(data.user){
                toast.success(data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                localStorage.setItem("token",JSON.stringify(data.user.token))
                window.location.reload()
                console.log(data)
            } else {
                toast.error("User already exsist!");
            }
        })
    }
    return(
        <>
             <div className='auth-form'>
            <h1 className="auth-form__head">Sign In with E-mail</h1>
            <p className='auth-form__page'>Please login with the e-mail address you signed up with.
            Sign-in code will be sent.</p>
            <div className="auth-form__form">
                <p className="auth-form__email">E-mail address</p>
                <form method="POST" action="#" onSubmit={handlerSubmit}>
                    <div className='auth-form__wrraper'>
                        <input className="auth-form__input"  type={'email'} placeholder="Please insert e-mail address." required ref={emailRef}/>
                        <button className="auth-form__btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default Inform;