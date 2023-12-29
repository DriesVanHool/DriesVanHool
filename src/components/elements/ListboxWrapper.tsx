import {FunctionComponent, PropsWithChildren} from 'react'

interface ListboxWrapperProps extends PropsWithChildren{
    styling?: string|null
}
const ListboxWrapper: FunctionComponent<ListboxWrapperProps> = ({children, styling}) => {
    return (
        <div className={`border-small px-1 py-2 rounded-lg border-primary-50 ${styling}`}>
            {children}
        </div>
    )
}

export default ListboxWrapper
