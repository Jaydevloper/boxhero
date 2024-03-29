import {  useRef, useState    } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../add/components/add-product.scss';
import '../../../components/header/site-header.scss';
import { ToastContainer, toast } from 'react-toastify';
import '../../../asset/scss/visually-hidden.scss'
import 'react-toastify/dist/ReactToastify.css';
function Addproduct (){
    const navigate = useNavigate()
    const nameRef = useRef()
    const codeRef = useRef() 
    const firstRef = useRef()
    const secondRef = useRef()
    const typeRef = useRef()
    const quantilyRef = useRef()
    const [open,setOpen] = useState(false);
    function generateCode(e){
        e.preventDefault()
        codeRef.current.value = Math.floor(Math.random()*10e13)
    }
   
    function handlerSubmit(e){
        e.preventDefault();
   
        let token = localStorage.getItem("token");
        const url = `https://boxhero.onrender.com/create`;  
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                token,
                name:nameRef.current.value,
                code:codeRef.current.value,
                firstPrice:firstRef.current.value,
                secondPrice:secondRef.current.value,
                text:typeRef.current.value,
                quantily:quantilyRef.current.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.message) {
                toast.success(data.message);
                setTimeout(() =>{
                    navigate('/');
                    window.location.reload();
                },1500)
            }
            else toast.error(data.error)
        })
    }
    const logout = () =>{
        localStorage.removeItem("token");
        window.location.reload()
     }
    return(
        <>
             <header className='site-header'>
                <div className='site-header__left site-header__left--header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="32">
                <path
                     d="M39.775 8.886h3.619c1.38 0 2.452.267 3.213.8.76.533 1.142 1.496 1.142 2.89 0 .842-.178 1.507-.535 1.992-.358.486-.87.788-1.537.905.83.117 1.454.469 1.87 1.054.416.585.623 1.387.623 2.406 0 2.787-1.381 4.18-4.145 4.18h-4.25V8.886zm3.706 12.19c.702 0 1.197-.176 1.484-.527.287-.352.43-.908.43-1.668 0-.82-.149-1.408-.448-1.766-.298-.357-.805-.536-1.519-.536h-.772v4.497h.825zm-.087-6.446c.701 0 1.182-.158 1.439-.474.257-.316.387-.82.387-1.511 0-.632-.164-1.086-.492-1.36-.328-.276-.837-.413-1.528-.413h-.544v3.758h.738zm7.236 7.49c-.644-.79-.967-1.951-.967-3.485V13.33c0-1.533.323-2.687.967-3.46.643-.772 1.72-1.16 3.232-1.16 1.498 0 2.572.39 3.222 1.169.65.779.975 1.93.975 3.451v5.322c0 1.522-.325 2.678-.975 3.469-.65.79-1.724 1.186-3.222 1.186-1.512 0-2.59-.396-3.232-1.186zm4.224-1.387c.169-.333.254-.793.254-1.379v-6.726c0-.585-.085-1.04-.254-1.361-.17-.323-.5-.483-.992-.483s-.823.16-.993.483c-.17.321-.255.776-.255 1.361v6.726c0 .598.082 1.06.246 1.389.163.327.498.49 1.002.49.491 0 .821-.166.992-.5zm6.805-5.243l-2.705-6.604h2.74l1.686 4.111 1.405-4.11h2.46l-2.583 7.289 2.828 6.937h-2.705l-1.862-4.496-1.633 4.496h-2.44l2.81-7.623zm7.201-6.604h1.353v6.306h4.478V8.886h1.335v14.227h-1.335v-6.92h-4.478v6.92H68.86V8.886zm9.643 0h5.145v1.037h-3.793v5.34h3.092v.983h-3.092v5.866h3.83v1.001h-5.182V8.886zm7.007 0h3.214c1.276 0 2.184.308 2.723.922.538.616.808 1.514.808 2.697 0 .902-.147 1.645-.44 2.23-.292.586-.801.955-1.527 1.107l2.178 7.271h-1.3l-2.09-6.99h-2.23v6.99H85.51V8.886zm3.144 6.254c.855 0 1.452-.212 1.792-.633.34-.421.51-1.088.51-2.002 0-.925-.162-1.592-.484-2.002-.322-.41-.916-.615-1.782-.615h-1.845v5.252h1.81zm6.384 7.007c-.556-.76-.834-1.838-.834-3.232v-5.9c0-1.382.281-2.44.843-3.171.562-.731 1.505-1.098 2.828-1.098 1.3 0 2.23.37 2.792 1.107.562.738.844 1.792.844 3.161v5.92c0 1.392-.276 2.467-.826 3.222-.55.755-1.487 1.133-2.81 1.133-1.335 0-2.28-.38-2.837-1.142zm4.629-.693c.327-.51.491-1.257.491-2.24v-6.446c0-.983-.161-1.721-.482-2.213-.323-.491-.922-.737-1.801-.737-.89 0-1.5.243-1.826.728-.329.486-.492 1.227-.492 2.222v6.446c0 .996.163 1.745.492 2.249.327.503.936.755 1.826.755.866 0 1.463-.255 1.792-.764zM27.409 7.52c.405.234.655.667.655 1.136v14.688c0 .469-.25.902-.655 1.136L17.21 30.367l7.902-14.918-4.281 2.472 1.888-6.788-5.742 3.316-2.946 10.588 4.48-2.586-1.924 8.276-1.9 1.097a1.309 1.309 0 01-1.312 0L.655 24.48a1.31 1.31 0 01-.656-1.136V8.656c0-.469.25-.902.655-1.136L13.375.176a1.309 1.309 0 011.312 0l12.72 7.344z"
                     fill="#4F67FF" fillRule="evenodd" /></svg>
                    <div className="site-header__right">
                            <button className="site-header__btn">On Free Trial</button>
                            <Link className="site-header__help" to={'/'}>Help</Link>
                            <button className="site-header__profil" onClick={() => setOpen(!open)}></button>
                            <button className={open?'site-header__logout':'site-header__logout--close'} onClick={logout}>Log out</button>
                    </div>
                    </div>  
        </header>
            <div className="add-product">
                <div className='add-product__pro container'>
                    <Link className='add-product__product' to={'/'}>Product List</Link>
                        <h1 className='add-product__head'>Product Details</h1>
                        <div className='add-product__inform'>
                                <p className='add-product__info'>Product Info</p>
                                <div className='add-product__wrraper'>
                                </div>
                        </div>
                             <form method='POST' action='#' onSubmit={handlerSubmit}>
                                       <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                        <p className='add-product__more add-product__more--page'>*Name</p>
                                        <input className='add-product__inpt' type={'text'} placeholder={"Name"} ref={nameRef} />
                                    </div>
                                    <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                        <p className='add-product__more add-product__more--page'>Barcode</p>
                                        <input className='add-product__inpt' type={'text'} placeholder={"Barcode"}  ref={codeRef}/>
                                        <button className='add-product__generator' onClick={generateCode} >Generate</button>
                                    </div>
                                    <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                        <p className='add-product__more add-product__more--page'>Purchase Price</p>
                                        <input className='add-product__inpt' type={'number'} placeholder={"Purchase Price"} ref={firstRef} />
                                    </div>
                                    <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                         <p className='add-product__more add-product__more--page'>Sales Price</p>
                                         <input className='add-product__inpt' type={'number'} placeholder={"Sales Price"} ref={secondRef} />
                                    </div>
                                    <h2 className="add-product__quantily-head">Product Category</h2>
                                 <div className='add-product__border'>
                                    <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                        <p className='add-product__more add-product__more--page'>Type</p>
                                        <input className='add-product__inpt' type={'text'} placeholder={"Type"} ref={typeRef} />
                                    </div>
                                 </div>
                                 <h2 className="add-product__quantily-head">Quantity</h2>
                                 <div className='add-product__border'>
                                    <div className='add-product__more-wrraper add-product__more-wrraper--open'>
                                        <p className='add-product__more add-product__more--page'>*Initial Quantity</p>
                                        <input className='add-product__inpt' type={'number'} placeholder={"Initial Quantity"} ref={quantilyRef} />
                                    </div>
                                    </div>
                                 <div className='add-product__btn-wrraper'>
                                     <button className='add-product__edit'>Submit</button>
                                    <Link className='add-product__btn add-product__btn--link'  to={'/'}>Cancel</Link>
                                 </div>

                            </form>
                                
                    </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Addproduct;