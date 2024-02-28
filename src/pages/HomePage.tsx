import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import JustArrived from '../parts/homepage/JustArrived'
import BrowseRoom from '../parts/homepage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage() {
    return (
        <>
            <Header theme='white' position='absolute'/>
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
