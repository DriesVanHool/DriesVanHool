import {FunctionComponent} from 'react'
import Ticker from 'framer-motion-ticker'
import {Image} from '@nextui-org/react'
import {CSSProperties} from 'styled-components'
import {ICustomer} from '../../../models/ICustomer.ts'

interface CustomerCarouselProps {
    customers: ICustomer[]
}

const CustomerCarousel: FunctionComponent<CustomerCarouselProps> = ({customers}) => {

    const mask: CSSProperties =  {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black, transparent)',
    };

    return (
        <>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-3xl text-center pb-10">Trusted by</h3>
            <div id="customers" className="relative">
            <div style={mask}>
                <Ticker duration={60} direction={1}>
                    {customers.map((customer, index) => (
                        <div key={index} className="object-cover px-20"><Image src={customer.logo as string} alt={`Image ${index + 1}`} width={150} height={150}/></div>
                    ))}
                </Ticker>
            </div>
        </div>

        </>

    )
}

export default CustomerCarousel
