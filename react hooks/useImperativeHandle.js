import { forwardRef, useImperativeHandle, useRef } from "react";

function App() {

    const ref = useRef(null);

    return <CoolButton ref={ref}></CoolButton>
    
}

function CoolButton(props, ref) {

    const myBtn = useRef(null);

    useImperativeHandle(ref, () => ({
        click: () => {
            console.log('clicking button!');
            myBtn.current.click();
        }
    }));

    return (
        <button ref={myBtn}></button>
    );
}

CoolButton = forwardRef(CoolButton);