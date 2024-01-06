import {FunctionComponent} from 'react'
import {IPost} from '../../../models/IPost.ts'
import {Avatar, Card, CardBody, CardFooter, CardHeader, Image} from '@nextui-org/react'
import dries from '../../../assets/dries.jpg'
import TagChip from '../../elements/TagChip.tsx'
import {FaLink, FaLinkedin, FaMedium, FaYoutube} from 'react-icons/fa'
import {dateToDateShort} from '../../../utils/dateFormater.ts'

interface PostsProps {
    post: IPost
}

const Post: FunctionComponent<PostsProps> = ({post}) => {

    const PostLink = () => {
        if (post.linkedin){
            return <a href={post.linkedin} className="text-primary cursor-pointer hover:text-secondary">
                        <FaLinkedin/>
                    </a>
        }else if(post.medium){
            return <a href={post.medium} className="text-primary cursor-pointer hover:text-secondary">
                <FaMedium/>
            </a>
        }else if(post.youtube){
            return <a href={post.youtube} className="text-primary cursor-pointer hover:text-secondary">
                <FaYoutube/>
            </a>
        }else if(post.url){
            return <a href={post.url} className="text-primary cursor-pointer hover:text-secondary">
                <FaLink/>
            </a>
        }else{
            return null
        }
    }

    return (
        <>
            <Card className="max-w-[700px] bg-transparent">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" color="primary" src={dries} />
                        <div className="flex align-middle gap-2 mt-3">
                            <h4 className="font-semibold leading-none text-default-600">@Dries</h4>
                            {
                                <PostLink/>
                            }
                        </div>
                    </div>
                    <h5 className="text-small tracking-tight text-default-400 mt-0 pt-0">{dateToDateShort(post.created_at)}</h5>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small ">
                    {
                        post.image ? (
                            <Image
                                alt="Post image"
                                className="h-64 object-cover rounded-xl mb-3"
                                src={post.image??""}
                                width={"100%"}
                            />
                        ):null
                    }
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
