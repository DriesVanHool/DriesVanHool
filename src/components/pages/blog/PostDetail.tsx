import {FunctionComponent, Suspense} from 'react'
import {useGetPostsBySlug} from '../../../api/posts.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {useParams} from 'react-router-dom'
import LoadingPage from '../../utils/LoadingPage.tsx'

interface PostDetailProps {

}

const PostDetail: FunctionComponent<PostDetailProps> = () => {
    const {slug} = useParams()
    const {data: post, isError: postError} = useGetPostsBySlug(slug as string)

    if (postError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }
    return (
        <Suspense fallback={<LoadingPage/>}>
            <div>
                {post?.medium}
            </div>
        </Suspense>
    )
}

export default PostDetail
