import { useCallback } from "react";

function App() {
    
    const [count, setCount] = useState(60);

    const showCount = useCallback(() => {
        alert(`Count ${count}`)
    }, [count])

    return <> <SomeChild handler={showCount} /> </>;
}