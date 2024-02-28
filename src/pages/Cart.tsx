import React from 'react'
import Header from '../parts/Header'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ShippingDetail from '../parts/cart/ShippingDetail'
import ShoppingCart from '../parts/cart/ShoppingCart'

export default function Cart() {
    return (
        <>
            <Header theme='black' position='block' />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/cart", name: "Shopping Cart" },
            ]} />

            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetail />
                    </div>
                </div>
            </section>

            <Sitemap />
            <Footer />
        </>
    )
}
