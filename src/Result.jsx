import { useNavigate } from "react-router-dom";

const Result = () => {
    const nav = useNavigate();
    const data = JSON.parse(localStorage.getItem("Quiz"));
    const number = data.test_number;
    const detailpage = () => {
        nav('/')
    }
    return (
        <div className="min-h-screen bg-[url(./image/result.avif)] bg-center bg-cover flex justify-center items-center flex-col py-5 gap-15">
                <h1 className="text-8xl font-extrabold">Result</h1>
            <div className="flex flex-col items-center text-2xl font-bold gap-2">
                <span>Hello! {data.name}</span>
                <span>Your Number : {number}</span>
                <span>Total Number : 10</span>
                <span>You Are {number > 4 ? "Passed" : "Failed"}</span>
            </div>
                <button className='border-2 w-fit text-center px-4 py-1 rounded-md text-xl font-bold' onClick={detailpage}>Back To Home Page</button>
        </div>
    )
}

export default Result
