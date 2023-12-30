import {FunctionComponent, useEffect, useRef, useState} from 'react'
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from '@nextui-org/react'
import Logo from '../icons/Logo.tsx'
import ThemeSwitcher from '../utils/ThemeSwitcher.tsx'
import {IMenuItem} from '../../models/IMenuItem.ts'
import {useLocation} from 'react-router-dom'

interface NavigationProps {

}

const Navigation: FunctionComponent<NavigationProps> = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const location = useLocation();
    const lastHash = useRef('');

    //Look for anchor change to close menu
    useEffect(() => {
        if (lastHash.current !== location.hash.slice(1)) {
            setIsMenuOpen(false)
        }
    }, [location]);


    const menuItems: IMenuItem[] = [
        {
            title: "About",
            ref: "/#about",
            isActive: false,
            icon: null
        },
        {
            title: "Projects",
            ref: "/#projects",
            isActive: false,
            icon: null
        },
        {
            title: "Services",
            ref: "/#services",
            isActive: false,
            icon: null
        },
        {
            title: "Coffee corner",
            ref: "/coffee-corner",
            isActive: false,
            icon: <span className="ml-0.5">&#9749;</span>
        }
    ];

    return (
        <Navbar aria-label="Navigation" maxWidth="xl" shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="mt-5">
            {/*Home/icon & mobile toggle*/}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            {/*Desktop menu items*/}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.title}-${index}`} isActive={item.isActive}>
                        <Link className="text-xl" href={item.ref}>
                            {item.title}
                            {item.icon}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            {/*Navbar end*/}
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
                <NavbarItem>
                    <Button className="text-xl" as={Link} color="primary" href="/#contact" variant="flat">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
            {/*Mobile menu items*/}
            <NavbarMenu className="mt-10">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`mobile${item.title}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.ref}
                            size="lg"
                        >
                            {item.title}
                            {item.icon}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default Navigation
