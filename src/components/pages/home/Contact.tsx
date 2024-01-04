import {FunctionComponent, useRef, useState} from 'react'
import {Button, Input, Textarea} from '@nextui-org/react'
import SecondayTitle from '../../elements/SecondayTitle.tsx'
import emailjs from '@emailjs/browser'
import {IContactForm} from '../../../models/IContactForm.ts'
import z, {ZodType} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import ConfettiExplosion from 'react-confetti-explosion'

const emailServiceId =  import.meta.env.VITE_EMAIL_SERVICE_ID
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

const Contact: FunctionComponent = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [messageSend, setMessageSend] = useState(false)
    //Zod schema for contact form
    const formSchema: ZodType<IContactForm> = z.object({
        name:z.string().min(1),
        email:z.string().email(),
        message:z.string().min(1),
    })

    //Zodresolver for connection between zod and react hook form
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IContactForm>({resolver:zodResolver(formSchema)})

    const sendEmail = () => {
        //Email expects a HTMLFormElement
        //Real mailing commented for testing purposes
        emailjs.sendForm(emailServiceId??'', emailTemplateId??'', formRef.current??'', emailPublicKey)
            .then(() => {
                reset()
                setMessageSend(true)
            }, (error) => {
                console.log(error);
            });
        setMessageSend(true)
        reset()
    };

    return (
        <div id="contact">
            <div className="relative isolate overflow-hidden flex justify-center" >
                <form ref={formRef} onSubmit={handleSubmit(sendEmail)} className="w-full sm:w-1/2 grid grid-cols-2 gap-5">
                    <SecondayTitle title={"Contact"} styling={"pb-3 col-span-2 text-center"}/>
                    <Input {...register("name")}
                        isClearable onClear={()=>reset({ name: '' })}
                        type="text"
                        label="Name"
                        name="name"
                        variant="bordered"
                        placeholder="Name"
                        className="col-span-2"
                       isInvalid={errors.name===null}
                       color={errors.name ? "danger" : "primary"}
                       errorMessage={errors.name && "Please enter your name"}
                    />
                    <Input {...register("email")}
                        isClearable
                        onClear={()=>reset({ email: '' })}
                        type="email"
                        label="Email"
                        name="email"
                        variant="bordered"
                        placeholder="Enter your email"
                        className="col-span-2"
                       isInvalid={errors.email===null}
                       color={errors.email ? "danger" : "primary"}
                       errorMessage={errors.email && "Please enter a valid email"}
                    />
                    <Textarea {...register("message")}
                        label="Message"
                        type="text"
                        name="message"
                        variant="bordered"
                        placeholder="Ask me anything"
                        disableAnimation
                        disableAutosize
                          isInvalid={errors.message===null}
                          color={errors.message ? "danger" : "primary"}
                          errorMessage={errors.message && "Please fill a message"}
                        classNames={{
                            base: "col-span-2",
                            input: "resize-y min-h-[200px]",
                        }}
                    />
                    <div className="col-span-2 flex justify-center">
                        <Button type="submit" className="w-full sm:w-[300px]" color="primary"
                                variant="bordered">Confirm</Button>
                    </div>
                </form>
                {
                    messageSend && (
                        <ConfettiExplosion className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                    )
                }
            </div>
        </div>
    )
}

export default Contact
