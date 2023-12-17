import {FunctionComponent} from 'react'
import {Input, Textarea} from '@nextui-org/react'

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    return (
<>
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-3xl text-center pb-10">Contact</h3>
        <div id="contact" className="relative isolate overflow-hidden flex justify-center" >
            <form className="w-full sm:w-1/2 grid grid-cols-2 gap-5">
                <Input
                    isClearable
                    type="text"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                    className="col-span-2 sm:col-span-1"
                />
                <Input
                    isClearable
                    type="text"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                    className="col-span-2 sm:col-span-1"
                />
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
                        input: "resize-y min-h-[40px]",
                    }}
                />
            </form>
        </div>
    </>
    )
}

export default Contact
