import {FunctionComponent, PropsWithChildren} from 'react'

interface ListboxWrapperProps {
    styling?: string|null
}
const ListboxWrapper: FunctionComponent<PropsWithChildren<ListboxWrapperProps>> = ({children, styling}) => {
    return (
        <div className={`border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${styling}`}>
            {children}
        </div>
    )
}

export default ListboxWrapper
