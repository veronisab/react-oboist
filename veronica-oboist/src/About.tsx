import {useState} from 'react'

export default function About(props) {
    const [more, setMore] = useState(false)
    return (
        <>
        <div className="about" onClick={() => setMore(prev => !prev)}>
                {props.mainText}
                {more && (
        <div>{props.moreText}</div>
        )}
        </div>
    </>)
}