
export default function WordCounter({ text }) {
    return (
        <div className='textInformer'>
            <p>Characters: {text.length}</p>
            <p>Words: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
            <p>Time: {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes</p>
        </div>
    )
}