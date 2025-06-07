import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Question = () => {
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const [questionNO, setquestionNO] = useState(0);
    const testnumber = useRef(0);

    let option1 = useRef();
    let option2 = useRef();
    let option3 = useRef();
    let option4 = useRef();

    const data = useSelector(state => state.Questions.questionn)
    const alluser = useSelector(state => state.Users.user)
    
    let questionshow = (data[questionNO]);
    let answer = data[questionNO].answer
    
    const checkanswer = () => {
        if (option1.current.checked && answer == "option1") {
            testnumber.current += 1;
        }
        if (option2.current.checked && answer == "option2") {
            testnumber.current += 1;
        }
        if (option3.current.checked && answer == "option3") {
            testnumber.current += 1;
        }
        if (option4.current.checked && answer == "option4") {
            testnumber.current += 1;
        }
        // console.log(testnumber);
        
        option1.current.checked = false;
        option2.current.checked = false;
        option3.current.checked = false;
        option4.current.checked = false;
        

        if (questionNO + 1 === data.length) {
            const user = JSON.parse(localStorage.getItem("Quiz"));
            console.log(user);
            
            // console.log(alluser.length);
            
            for (let i = 0; i < alluser.length; i++) {
                if (alluser[i].email == user.email) {
                    console.log("going in final number change");
                    
                    alluser[i].test_number = testnumber.current;
                    user.test_number = testnumber.current;
                    let test = testnumber.current;

                    let obj = {
                        index : i,
                        test_number : test
                    }
                    Dispatch({type : 'final_number',payload: obj})
                    localStorage.setItem("Quiz",JSON.stringify(user))
                }
                else{
                    console.log("not match email");
                    console.log("Data emails "+alluser[i].email);
                    console.log("User email "+user.email);
                    
                }
                
            }
            navigate("/result");
            return;
        }
        setquestionNO(prevCount => prevCount + 1)
    }

    return (
        <div  className='flex justify-center items-center min-h-screen w-full bg-[url(./image/question.avif)] bg-center bg-cover'>
            <div className='w-full sm:w-3/4 bg-[#e3e9ea66] text-center p-4 text-white flex flex-col gap-8 rounded-md backdrop-blur-sm justify-center items-center'>
                <p className='text-3xl font-extrabold'>Question : {questionNO+1 }</p>
                <p className='text-3xl font-extrabold'>{questionshow.question}</p>
                <form className='flex w-2/3 flex-wrap'>
                    <div className='flex items-center gap-1 content-center w-1/2 justify-start'>
                        <input className='size-3 flex items-end' ref={option1} id='ans1' type="radio" name='answer' />
                        <label className='text-xl font-bold text-nowrap' htmlFor='ans1'>{questionshow.optionOne}</label>
                    </div>
                    <div className='flex items-center gap-1 content-center w-1/2 justify-end'>
                        <input className='size-3 flex items-end' ref={option2} id='ans2' type="radio" name='answer' />
                        <label className='text-xl font-bold text-nowrap' htmlFor='ans2'>{questionshow.optionTwo}</label>
                    </div>
                    <div className='flex items-center gap-1 content-center w-1/2 justify-start'>
                        <input className='size-3 flex items-end' ref={option3} id='ans3' type="radio" name='answer' />
                        <label  className='text-xl font-bold text-nowrap'htmlFor='ans3'>{questionshow.optionThree}</label>
                    </div>
                    <div className='flex items-center gap-1 content-center w-1/2 justify-end'>
                        <input className='size-3 flex items-end' ref={option4} id='ans4' type="radio" name='answer' />
                        <label  className='text-xl font-bold text-nowrap'htmlFor='ans4'>{questionshow.optionFour}</label>
                    </div>
                </form>
                <button className='border-2 w-fit text-center px-4 py-1 rounded-md' onClick={checkanswer}>Submit Answer</button>
            </div>
        </div>
    )
}

export default Question
