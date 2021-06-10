import {useState, useEffect} from "react"; 

export function useDebounce(
    value
){
    const[debouncedValue, setDeouncedValue]= useState(value);
    let delay = value.delay;
    useEffect(() => {
        const handler = setTimeout(() => {
            setDeouncedValue(value);
        }, delay);
        return () => {clearTimeout(handler);
        }
    }, [value, delay]);
    return debouncedValue.value;
}
    