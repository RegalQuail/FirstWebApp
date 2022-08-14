import { useLayoutEffect, useRef } from "react";

function App() {

    const myBtn = useRef(null);

    useLayoutEffect(() => {
        const rect = myBtn.current.getBoundingClientRect();

        console.log(box.height);
        
    })

    return <><button ref={ref}></button></>

}