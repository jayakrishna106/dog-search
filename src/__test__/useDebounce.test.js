import { waitFor, fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../components/useDebounce';

const TestComponent = ({tm}) =>{
const [currentValue, setCurrentValue] = useState("INIT");
const text = useDebounce({ 'value' : currentValue, 'delay' : tm });

return(
    <div>
        <h1>{text}</h1>
        <input data-testid="input"
        onChange={e => setCurrentValue(e.target.value)}
        />
    </div>
    )
}

export const delay = (ms) => new Promise(r => {setTimeout(()=>r(true), ms)})

describe("useDebounce hook", () =>{
    it("should update text after 300ms by default, since debounced", async() => {
        const {queryByText, getByText, getByTestId} = render(<TestComponent />);
        await waitFor(() => getByText("INIT"));
        fireEvent.change(getByTestId("input"), {target: {value : "New"}});
        expect(queryByText("New")).toBeFalsy();
        await waitFor(() => expect(queryByText("New")).toBeTruthy())
    });
    it("should update text after 600ms, since debounced", async() => {
        const {queryByText, getByText, getByTestId} = render(<TestComponent ms={600}/>);
        await waitFor(() => getByText("INIT"));
        fireEvent.change(getByTestId("input"), {target: {value : "New"}});
        await expect(queryByText("New")).toBeFalsy();
        await waitFor(() => expect(queryByText("New")).toBeFalsy())
        await waitFor(() => queryByText("New"));
    })
})


