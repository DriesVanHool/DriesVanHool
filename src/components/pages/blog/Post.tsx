import {FunctionComponent} from 'react'
import {IPost} from '../../../models/IPost.ts'

interface PostsProps {
    post: IPost
}

const Post: FunctionComponent<PostsProps> = ({post}) => {
    return (
        <>
            <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.summary}</p>
                <p>{post.category?.name}</p>
                <ul>
                    {
                        post.tags?.map(pt=>(
                            <li key={`tag${pt.tag?.id}`}>- {pt.tag?.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Post
