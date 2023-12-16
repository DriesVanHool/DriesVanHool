import {ITag} from './ITag.ts'

export interface IPostTag {
    post_id: number,
    tag_id: number,
    tag?: ITag;
}