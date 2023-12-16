import {FunctionComponent} from 'react'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {useGetPosts} from '../../../api/posts.ts'

interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {
    const {data: posts, isError: postError} = useGetPosts()

    if (postError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }

    return (
        <>
            <div id="posts">
                {
                    posts?.map(post => (
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
                    ))
                }
            </div>
        </>

    )
}

export default Blog
