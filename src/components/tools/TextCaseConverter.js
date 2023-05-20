export default function TextCaseConverter({ text }) {

    const toUpper = () => {
        let a = text.toUpperCase();
        document.querySelector(".TextAreaSection").value = a
    }

    const toLower = () => {
        let a = text.toLowerCase();
        document.querySelector(".TextAreaSection").value = a
    }

    const firstLetterCapital = () => {
        let a = sentenceCase(text)
        document.querySelector(".TextAreaSection").value = a
    }

    function sentenceCase(input, lowercaseBefore) {
        input = (input === undefined || input === null) ? '' : input;
        if (lowercaseBefore) { 
            input = input.toLowerCase(); 
        }
        return input.toString().replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
            return separator + char.toUpperCase();
        });
    }

    return (
        <div className='toggle'>
            <button className='btn' onClick={toUpper}>Upper Case</button>
            <button className='btn' onClick={toLower}>Lower Case</button>
            <button className='btn' onClick={firstLetterCapital}>First starting letter Capital</button>
        </div>
    )
}