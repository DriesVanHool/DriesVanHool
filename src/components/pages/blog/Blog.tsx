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
        <div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-10">Coffee corner</h1>
            <p className="mb-10 px-6">Feel free to waste your time here and catch up on what I've been up to.</p>
            <div id="posts" className="w-full flex justify-center">
                {posts?.map(post => (<Post key={post.id} post={post}/>))}
            </div>
        </div>

    )
}

export default Blog
