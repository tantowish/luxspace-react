import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import JustArrived from '../parts/homepage/JustArrived'
import BrowseRoom from '../parts/homepage/BrowseRoom'

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <BrowseRoom/>
            <JustArrived />
        </>
    )
}
