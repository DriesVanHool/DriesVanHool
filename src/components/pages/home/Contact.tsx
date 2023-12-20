import {FunctionComponent} from 'react'
import {Input, Textarea} from '@nextui-org/react'
import SecondayTitle from '../../elements/SecondayTitle.tsx'

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    return (
<div id="contact">
        <div className="relative isolate overflow-hidden flex justify-center" >
            <form className="w-full sm:w-1/2 grid grid-cols-2 gap-5">
                <SecondayTitle title={"Contact"} styling={"text-left pb-5"}/>
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                    className="col-span-2"
                />
                <Textarea
                    label="Description"
                    variant="bordered"
                    placeholder="Enter your description"
                    disableAnimation
                    disableAutosize
                    classNames={{
                        base: "col-span-2",
                        input: "resize-y min-h-[200px]",
                    }}
                />
            </form>
        </div>
    </div>
    )
}

export default Contact
