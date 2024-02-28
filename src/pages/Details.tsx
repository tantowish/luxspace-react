import React from 'react'
import Header from '../parts/Header'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../parts/details/ProductDetails'
import Suggestion from '../parts/details/Suggestion'

export default function Details() {
    return (
        <>
            <Header theme='black' position='block' />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/4", name: "Office Room" },
                { url: "/categories/4/products/3", name: "Details" },
            ]} />
            <ProductDetails />
            <Suggestion />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
