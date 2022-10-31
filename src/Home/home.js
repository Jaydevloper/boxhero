import { useContext} from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error/error";
import Header from "../components/header/header";
import Loading from "../components/Loading/loading";
import { Context } from "../context/context";
import './site-main.scss';

function Home (){
    const {data,search} = useContext(Context)
    return(
        <>
            <Header/>
            <main className="site-main">
                <ul className="site-main__list container">
                    {
                            data.loading && <Loading/>
                    }
                    {
                        data.error && <Error/>
                    } 
                    {    search ?
                        search.map(el =>{
                            return(
                                <>
                                    <li className="site-main__item" id={el._id} key={el._id}>
                                        <Link className="site-main__link" to={`/addmore/${el._id}`}>
                                                <div className="site-main__wrraper">
                                                    <p className="site-main__name">{el.name}</p>
                                                    <p className="site-main__page">{el.firstPrice}/{el.secondPrice}/{el.text}</p>
                                                </div>
                                                <p className="site-main__quality">{el.quantily}</p>
                                        </Link>
                                    </li>
                                </>
                            )
                        })
                            :
                        data.Data && data.Data.map(el =>{
                                return(
                                    <>
                                        <li className="site-main__item" id={el._id} key={el._id}>
                                            <Link className="site-main__link" to={`/addmore/${el._id}`}>
                                                    <div className="site-main__wrraper">
                                                        <p className="site-main__name">{el.name}</p>
                                                        <p className="site-main__page">{el.firstPrice}/{el.secondPrice}/{el.text}</p>
                                                    </div>
                                                    <p className="site-main__quality">{el.quantily}</p>
                                            </Link>
                                        </li>
                                    </>
                                )
                            })
                    }
                </ul>
            </main>
        </>
    )
}
export default Home;