import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import PageErrorMessage from '../parts/PageErrorMessage'

export default function NotFound() {
    return (
        <>
            <Header theme='black' position='block' />
            <PageErrorMessage title='404 Not Found' body='Looks like this page is unavailable' />
            <Sitemap />
            <Footer />
        </>
    )
}
