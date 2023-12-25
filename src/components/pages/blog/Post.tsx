import {FunctionComponent} from 'react'
import {IPost} from '../../../models/IPost.ts'
import {Avatar, Card, CardBody, CardFooter, CardHeader, Image} from '@nextui-org/react'
import dries from '../../../assets/dries.png'
import TagChip from '../../elements/TagChip.tsx'
import {FaLinkedin} from 'react-icons/fa'
import {dateToDateShort} from '../../../utils/dateFormater.ts'

interface PostsProps {
    post: IPost
}

const Post: FunctionComponent<PostsProps> = ({post}) => {
    return (
        <>
            <Card className="max-w-[700px] bg-transparent">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src={dries} />
                        <div className="flex align-middle gap-2 mt-3">
                            <h4 className="font-semibold leading-none text-default-600">@Dries</h4>
                            <FaLinkedin/>
                        </div>
                    </div>
                    <h5 className="text-small tracking-tight text-default-400 mt-0 pt-0">{dateToDateShort(post.created_at)}</h5>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <Image
                        alt="Post image"
                        className="object-cover rounded-xl mb-3"
                        src={post.image??""}
                        width={"100%"}
                    />
                    <p>
                        {post.text}
                    </p>
                </CardBody>
                <CardFooter className="gap-3">
                    {
                        post.tags?.map(postTag=>(
                            <TagChip key={`tag${postTag.tag?.id}`} tag={postTag.tag}/>
                        ))
                    }
                </CardFooter>
            </Card>
        </>
    )
}

export default Post
