
import {useState, useEffect, createRef} from 'react';
import { Input, InputGroupAddon } from 'reactstrap';
import { useDebounce } from './useDebounce';



export default function SimpleSearch({
    debouce,
    callback,
    placeholder
}) {

  const [query, setQuery] = useState("");
  const bounceQuery = useDebounce({ 'value' : query, 'delay' : debouce ||0 });
  const wrapperRef = createRef();

   useEffect(() => {
    callback && callback(bounceQuery);
  }, [bounceQuery]);
  

  const onChange = (value) =>{
    setQuery(value);
  }
  return (
      <div style={{
          minHeight: '32px',
          width: '100%',
          position: 'relative'
      }} ref={wrapperRef}>

        <InputGroupAddon addonType="append">
          <Input name="search" id="search-id" 
          value={query}
          placeholder={placeholder}
          onChange= {e => onChange(e.target.value)}
          />

        </InputGroupAddon>
        </div>
  )

} 