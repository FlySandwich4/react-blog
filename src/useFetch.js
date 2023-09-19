import { useState } from "react";

const useFetch = () => {
    const [a, setA] = useState(0);
    const b = "hi";
    return [a, setA, b];
}
 
export default useFetch;