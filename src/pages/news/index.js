import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../../components/layout'
import Cards from '../../components/cards'

const NewsPage = () => {
    return(
        <Layout headingImage='/images/uploads/mark-koch-kirln3jjvnu-unsplash.jpg'>
            <Helmet title="CEPetro - News"/>
            <Cards />
        </Layout>
    )
}

export default NewsPage