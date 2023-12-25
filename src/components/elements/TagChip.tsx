import {FunctionComponent} from 'react'
import {Chip} from '@nextui-org/react'
import {ITag} from '../../models/ITag.ts'

interface TagChipsProps {
    tag?: ITag | null
}

const TagChip: FunctionComponent<TagChipsProps> = ({tag}) => {
    return (
        <Chip size="sm">{tag?.name}</Chip>
    )
}

export default TagChip
