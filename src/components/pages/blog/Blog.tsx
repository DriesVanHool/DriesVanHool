import {FunctionComponent} from 'react'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {useGetPosts} from '../../../api/posts.ts'
import Post from './Post.tsx'

interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {
    const {data: posts, isError: postError} = useGetPosts()

    if (postError) {
        return (
            <ErrorMessage>
                <p>Couldn't load data</p>
            </ErrorMessage>
        )
    }

    return (
        <>
            <div id="posts">
                {posts?.map(post => (<Post post={post}/>))}
            </div>
        </>

    )
}

export default Blog
