import React, { useState } from 'react'

import WordCounter from '../components/tools/WordCounter'
import TextCaseConverter from '../components/tools/TextCaseConverter';
import RemoveExtraSpaces from '../components/tools/RemoveExtraSpaces';


export default function Home() {

    const [text, setText] = useState("")


    const change = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        document.querySelector(".TextAreaSection").value = ""
        setText("")
    }

    const copyText = () => {
        if (text.length !== 0) {
            navigator.clipboard.writeText(text);
            alert("Text copied!")
        }
    }



    return (
        <main className='container'>
            <div className='left'>
                <textarea cols={90} rows={25} className='TextAreaSection taop' onChange={change}></textarea>
                <div className='toggle'>
                    <div className='buttons'>
                    <button className='btn' onClick={clearText}>Clear</button>
                    <button className='btn' onClick={copyText}>Copy</button>
                    </div>
                    <WordCounter text={text} />
                </div>
            </div>
            <div className='right'>
                <TextCaseConverter text={text} />
                <RemoveExtraSpaces text={text} />
            </div>
        </main>
    )
}
