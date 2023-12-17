import {FunctionComponent} from 'react'
import Logo from '../icons/Logo.tsx'
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem} from '@nextui-org/react'
import {IService} from '../../models/IService.ts'

interface ServiceDropDownMenuProps {

}

const ServiceDropdown: FunctionComponent<ServiceDropDownMenuProps> = () => {

    const services: IService[] = [
        {
            title: "Fullstack",
            description: "Dit is een korte beschrijving",
            ref: "#",
            icon: <Logo/>
        },
        {
            title: "Web development",
            description: "Dit is een korte beschrijving",
            ref: "#",
            icon: <Logo/>
        },
        {
            title: "Front end",
            description: "Dit is een korte beschrijving",
            ref: "#",
            icon: <Logo/>
        },
        {
            title: "Other",
            description: "Dit is een korte beschrijving",
            ref: "#",
            icon: <Logo/>
        },
    ]

    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-xl"
                        endContent={<Logo/>}
                        radius="sm"
                        variant="light"
                    >
                        Services
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {services.map((service, index) => (
                    <DropdownItem
                        key={`service${index}`}
                        description={service.description}
                        startContent={<Logo/>}
                    >
                        {service.title}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default ServiceDropdown
