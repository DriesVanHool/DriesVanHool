import {FunctionComponent} from 'react'

interface SecondayTitleProps {
    title: string
    styling?: string | null
}

const SecondayTitle: FunctionComponent<SecondayTitleProps> = ({title, styling}) => {
    return (
        <h2 className={`text-5xl font-bold tracking-tight text-foreground sm:text-5xl ${styling}`}>{title}</h2>
    )
}

export default SecondayTitle
