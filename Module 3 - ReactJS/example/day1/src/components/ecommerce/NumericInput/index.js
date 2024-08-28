import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

function NumericInput({ value, onChange, min, max }) {
    /**
     * 
     *  min, max [18:00]
     * 
     */

    // const [currentNumber, setCurrentNumber] = useState(0);

    const handleIncrease = (isIncrease) => {
        const increaseNumber = isIncrease ? (1) : -1
        if (isIncrease && value === max) {
            return
        }
        if (!isIncrease && value === min) {
            return
        }
        onChange(Number(value) + increaseNumber)
    }

    return <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => handleIncrease(false)}><RemoveIcon /></Button>
        <Input value={value} onKeyDown={(event) => {
            console.log('event', event.key)
            if (!(/[0-9]/.test(event.key) || "Backspace" == event.key)) {
                return event.preventDefault()
            }
            /**
             *  Logic to handle user input [17:30]
             *  have 1 number already: [0, 1]
             *      backspace: value return to 1
             *      number: currentNumber + event.key
             *  have more than 1 number: [10,25,300]
             *      backspace: remove last number
             *      number: currentNumber + event.key
             * 
             * 
             * [ ] TODO: Enhance to allow change in the cursor position
              * */
            if (/[0-9]/.test(event.key)) {
                const newNumber = value.toString() + event.key.toString();
                if (newNumber > max) {
                    return onChange(max)
                }
                onChange(value.toString() + event.key.toString())
            } else {
                if (value.toString().length == 1) {
                    onChange(min)
                } else {

                    onChange(Number(value.toString().slice(0, value.toString().length - 1)))
                }
            }

        }} style={{ maxWidth: 50 }} />
        <Button onClick={() => handleIncrease(true)}><AddIcon /></Button>
    </ButtonGroup>
}

export default NumericInput