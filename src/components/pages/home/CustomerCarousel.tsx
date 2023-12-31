import {FunctionComponent} from 'react'
import Ticker from 'framer-motion-ticker'
import {Image} from '@nextui-org/react'
import {CSSProperties} from 'styled-components'
import {ICustomer} from '../../../models/ICustomer.ts'
import SecondayTitle from '../../elements/SecondayTitle.tsx'

interface CustomerCarouselProps {
    customers: ICustomer[]
}

const CustomerCarousel: FunctionComponent<CustomerCarouselProps> = ({customers}) => {

    const mask: CSSProperties =  {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
    };

    return (
        <>
            <SecondayTitle title={"Trusted by"} styling={"text-center pb-10"}/>
            <div id="customers" className="relative">
            <div style={mask}>
                <Ticker duration={60} direction={1}>
                    {customers.map((customer, index) => (
                        <div key={index} className="object-cover px-20 flex items-center justify-center h-full w-full"><Image src={customer.logo as string} alt={`Image ${index + 1}`} width={150} height={150}/></div>
                    ))}
                </Ticker>
            </div>
        </div>

        </>

    )
}

export default CustomerCarousel
