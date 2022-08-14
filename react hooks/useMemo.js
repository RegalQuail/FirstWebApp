import { useMemo, useState } from "react"

function App() {
    
    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count])

    return <></>
}