import {ChangeEvent, FormEvent, FunctionComponent, useRef, useState} from 'react'
import {Input, Link, Textarea} from '@nextui-org/react'
import SecondayTitle from '../../elements/SecondayTitle.tsx'
import emailjs from '@emailjs/browser'
import {IContactForm} from '../../../models/IContactForm.ts'

interface ContactProps {

}

const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

const Contact: FunctionComponent<ContactProps> = () => {
    const form = useRef<HTMLFormElement>(null);
    const defaultFormValues : IContactForm= {
        name:'',
        email:'',
        message:''
    }
    const [contactForm, setContactForm] = useState<IContactForm>(defaultFormValues)

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setContactForm({
            ...contactForm,
            [e.target.name]:e.target.value
        })
    }
    const sendEmail = (e:FormEvent) => {
        e.preventDefault();
        emailjs.sendForm(emailServiceId, emailTemplateId, form.current??"", emailPublicKey)
            .then(() => {
                setContactForm(defaultFormValues)
                console.log("Message send successfully");
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div id="contact">
                <div className="relative isolate overflow-hidden flex justify-center" >
                    <form ref={form} onSubmit={sendEmail} className="w-full sm:w-1/2 grid grid-cols-2 gap-5">
                        <SecondayTitle title={"Contact"} styling={"text-left pb-5"}/>
                        <Input
                            isClearable
                            type="text"
                            label="Name"
                            name="name"
                            variant="bordered"
                            placeholder="Name"
                            required
                            value={contactForm.name}
                            onChange={onChange}
                            onClear={() => contactForm.name = ''}
                            className="col-span-2"
                        />
                        <Input
                            isClearable
                            type="email"
                            label="Email"
                            name="email"
                            variant="bordered"
                            placeholder="Enter your email"
                            required
                            value={contactForm.email}
                            onChange={onChange}
                            onClear={() => contactForm.email = ''}
                            className="col-span-2"
                        />
                        <Textarea
                            label="Message"
                            name="message"
                            variant="bordered"
                            placeholder="Ask me anything"
                            required
                            disableAnimation
                            disableAutosize
                            value={contactForm.message}
                            onChange={onChange}
                            classNames={{
                                base: "col-span-2",
                                input: "resize-y min-h-[200px]",
                            }}
                        />
                        <div className="flex flex-row justify-end col-span-2">
                            <Input type="submit" className="text-xl" as={Link} color="primary" variant="flat" value="Confirm">Confirm</Input>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Contact
