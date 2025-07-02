import React, { useState } from 'react'
import Key from './Key';
const Calculator = () => {
    const keys = [
        "AC",
        "C",
        "%",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        ".",
        "0",
        "EQUALS",
    ]

    const [showResult, setShowResult] = useState(false);
    const [display, setDisplay] = useState("");
    const maxchar = 15;
    function CalculatorResult() {

        if (display.length !== 0) {

            try {
                let calresult = eval(display);
                calresult = parseFloat(calresult.toFixed(3));
                setShowResult(true);
                setDisplay(calresult.toString());


            }

            catch (error) {
                setDisplay("error");
            }

        }

        else setDisplay("");
    }

    function isOperator(char) {
        return ["/", "%", "*", "+", "-"].includes(char);
    }


    function handle(value) {
        setShowResult(false);


        if (value === "AC") {
            setDisplay("");
        }

        else if (value === "C") {
            setDisplay(display.slice(0, -1));

        }

        else if (isOperator(value)) {
            if (display == "" || isOperator(display[display.length - 1])) return;
            setDisplay(display + value);
        }

        else if (value === "EQUALS") {
            CalculatorResult();

        }
        else if (display.length >= maxchar) {
            alert("Only 15 Characters are allowed ")
        }
        else {
            setDisplay(display + value);
        }
    }

    const operation = "text-[1rem]";
    const result = "text-[1.5rem]";

    return (
        <div className='bg-black flex flex-col gap-4 p-4 rounded-2xl min-w-[320px]'>
            <div className='overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4 rounded-[10px]'>
                <div className={`${showResult ? result : operation}`}>
                    {display}
                </div>
            </div>
            <div className='grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]'>
                {keys.map((item, index) => (

                    <Key

                        label={item}
                        key={index}
                        keyclass={item === 'EQUALS' && 'equals'}
                        onbuttonclick={handle}



                    />

                ))

                }

            </div>

        </div>
    )
}

export default Calculator