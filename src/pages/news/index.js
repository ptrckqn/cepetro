import React from 'react'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import Cards from '../../components/cards'

const NewsPage = () => {
    return(
        <Layout headingImage='/images/uploads/mark-koch-kirln3jjvnu-unsplash.jpg'>
            <SEO title="News"/>
            <Cards />
        </Layout>
    )
}

export default NewsPage