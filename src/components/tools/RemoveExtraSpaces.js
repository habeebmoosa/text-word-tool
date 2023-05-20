
export default function RemoveExtraSpaces ({text}){

    const removeSpaces = () =>{
       let a = text.split(/[ ]+/).join(" ")
       document.querySelector(".TextAreaSection").value = a
    }

    return (
        <div className='toggle'>
            <button className='btn' onClick={removeSpaces}>Remove Extra Spaces</button>
        </div>
    )
}