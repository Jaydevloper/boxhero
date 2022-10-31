import './error.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Error(){
    toast.error("Error!")
    return(<>
               <div className="site">
        	<div className="sketch">
        		<div className="bee-sketch red"></div>
        		<div className="bee-sketch blue"></div>
        	</div>

        <h1>404:
        	<small>Players Not Found</small></h1>
        </div>
        <ToastContainer/>
    </>)
}
export default Error