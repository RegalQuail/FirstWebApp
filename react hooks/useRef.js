import { useRef } from "react";

function App() {

    const count = useRef(0)

    const myBtn = useRef(null)
    const clickIt = () => myBtn.current.click()

    return (
        <>
            <button onClick={() => count.current++}>
                {count.current}
            </button>
            
            <button ref={myBtn}></button>
        </>
    );
}

