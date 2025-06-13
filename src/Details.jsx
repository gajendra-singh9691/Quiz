import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Details = () => {
    let data = useSelector(state=>state.Users)
    data = data.user
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [age,setage] = useState('')

    const sumbmitdata = (e) =>{
        e.preventDefault()
        if (age < 15) {
            toast.error('You are under 15 years of age so you are not eligible for the test.')
            return
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].email == email) {
                toast.error('you have already given the test.');
                return
            }
        }
        let obj = {
            name : name,
            email : email,
            age : age,
            test_number : 0
        }
        setname('')
        setemail('')
        setage('')
        dispatch({type:'add_user',payload: obj});
        localStorage.setItem("Quiz",JSON.stringify(obj));
        navigate('/questions');
    }
  return (
    <div  className='min-h-screen flex items-center bg-[url(./image/login.jpg)] bg-center bg-cover'>
      <form onSubmit={sumbmitdata} className='flex flex-col justify-center items-center gap-2 w-full '>
        <h1 className='text-4xl font-extrabold'>Fill this form</h1>
        <input className='w-full border-1 rounded-md px-4 py-1 sm:w-1/4' type="text" placeholder='Enter Name' required onChange={(e)=>setname(e.target.value)} value={name}/>
        <input className='w-full border-1 rounded-md px-4 py-1 sm:w-1/4' type="email" placeholder='Enter Email' required onChange={(e)=>setemail(e.target.value)} value={email}/>
        <input className='w-full border-1 rounded-md px-4 py-1 sm:w-1/4' type="number" placeholder='Enter Age' required onChange={(e)=>setage(e.target.value)} value={age}/>
        <input className='w-full border-1 rounded-md px-4 py-1 sm:w-fit' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Details
