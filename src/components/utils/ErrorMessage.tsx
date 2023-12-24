import {FunctionComponent, PropsWithChildren, useState} from 'react'
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/react'

const ErrorMessage: FunctionComponent<PropsWithChildren> = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <Modal backdrop={"opaque"} isOpen={isOpen} onClose={()=>setIsOpen(false)} classNames={{base: "border-warning bg-warning text-foreground"}}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Oops... something went wrong</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}

export default ErrorMessage
