import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { NewsPageTemplate } from "../../templates/news-page"

const NewsPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <NewsPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
      />
    </CSSInjector>
  )
}
export default NewsPagePreview
