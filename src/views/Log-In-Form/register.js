import { useContext, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import { AppLog } from "../../context/logs/LogSesion"
import "./register.scss"

export default function Register () {

    const [register, setRegister] = useContext(AppLog);

    const [mov, setMov] = useState({opacity:'', display:''})
    const [newt, setNewt ] = useState({opacity:'0%', display:'none'})

    const history = useHistory()


    console.log(register);

    function movingEfect () {
        setMov({opacity:'1%'})
        setTimeout(()=>{
            setMov({display:'none'});
        }, 500)
        setTimeout(()=>{
            setNewt({opacity:'0%',display:'flex'});
        },500)
        setTimeout(()=>{
            setNewt({opacity:'100%', display:'flex'})
        }, 600)
    }

    const logged = ()=>{
        history.push('/home');
        setRegister({...register, onSesion:true})
    }

    return (
        <div className='w-screen md:h-screen h-auto bg-dark flex-col text-white'>
            <div className='w-full h-24 bg-transparent text-white flex justify-end items-center p-5 mb-2'>
                Do You Need Help?
            </div>
            <div id='log-in-box-register' className='w-full h-auto bg-transparent flex justify-center items-center'>
                    {!register.onSesion ? <div className='register-continer'>
                    <a href='/'><h1> Login and manage your tasks </h1></a>
                    <form className='register-form'>
                        <label style={{
                            position:mov.position,
                            right:mov.right,
                            opacity:mov.opacity,
                            display:mov.display
                        }}>
                            Name or Username
                            <input placeholder='@username' className='register-input'/>
                            <p className='text-sm text-red mt-2'>This field is necesary*</p>
                            <button className='m-3 font-bold	' onClick={()=>{movingEfect()}} type='button'>Nex Step {'>>'}</button>
                        </label>
                        <label style={{display:newt.display, opacity:newt.opacity}}>
                            Password
                            <input type='password' className='register-input'/>
                            <p className='text-sm text-red mt-2'>This field is necesary*</p>
                            <button className='text-green m-3 font-bold rounded' onClick={logged} type='button'>Validate{'>>'}</button>
                        </label>
                    </form>
                </div>:<div className='log-in-go-back md:h-80 h-screen p-5 text-center'>
                    <h1 className='title'> ¡ Hello ! </h1>
                    <p className='m-5 text-2xl'>Whoops! This view is not available because you have already logged in. Choose one of the following options:</p>
                    <Link className='m-2 text-green font-bold' to='/home'>Go Back</Link> <button className='m-2 text-red font-bold' onClick={()=>{setRegister({...register, onSesion:false})}}>Sign off</button>
                    </div>}
            </div>
        </div>
    )

}