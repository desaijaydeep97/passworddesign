import { Button } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import "../component/PasswordGenerate.css"


function PasswordGenerate() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [specialCharacter, setSpecialCharacter] = useState(false)

    const passwordRef = useRef(null);


    const passwordGenraters = useCallback(() => {
        console.log("run");
        let pass = ""
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz';

        if (numberAllowed) str = str + "0123456789";

        if (specialCharacter) str = str + "@#$!%^&*?";

        for (let index = 1; index <= length; index++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }

        setPassword(pass);
    }, [numberAllowed, specialCharacter, length, setPassword]);


    const copypasswordTOClipbord = useCallback(() => {
        console.log(passwordRef.current.select());
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenraters()
    }, [numberAllowed, length, specialCharacter])


    return (
        <div className='content'>
            <div className='passGen'>password generater </div>
            <div>
                <input
                    type='text'
                    placeholder='Password'
                    value={password}
                    readOnly
                    ref={passwordRef}
                    className='passwordInput'
                />
                <button type='button' className='copybtn' onClick={copypasswordTOClipbord}>copy</button>


            </div>

            <div>
                <input
                    type='range'
                    min={0}
                    max={100}
                    onChange={(e) => setLength(e.target.value)} />
                <span id='length'>length: {length}</span>

                <input
                    type='checkBox'
                    onChange={() => setNumberAllowed((prev) => !prev)} />
                <span>Numbers</span>

                <input
                    type='checkBox'
                    onChange={() => setSpecialCharacter((prev) => !prev)}
                />
                <span>Characters</span>


            </div>



        </div>
    )
}

export default PasswordGenerate
