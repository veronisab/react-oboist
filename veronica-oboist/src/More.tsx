import {ReactNode, useState} from 'react'

type MoreProps = {
    children: ReactNode;
    text: string;
}
export default function More(props: MoreProps) {
    const [more, setMore] = useState(false)

    return (
        <>
                <div className="click-more" onClick={() => setMore(prev => !prev)}>{!more ? (props.text || 'read more') : ('read less')}</div>
                {more && (
                <div className="more">{props.children}</div>
        )}
    </>
    )
}