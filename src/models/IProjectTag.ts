import {ITag} from './ITag.ts'

export interface IProjectTag {
    project_id: number,
    tag_id: number,
    tag?: ITag;
}