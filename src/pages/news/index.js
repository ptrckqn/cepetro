import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../../components/layout'
import Cards from '../../components/cards'

const NewsPage = () => {
    return(
        <Layout>
            <Helmet title="CEPetro - News"/>
            <Cards />
        </Layout>
    )
}

export default NewsPage