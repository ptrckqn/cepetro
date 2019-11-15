import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { NewsPostTemplate } from "../../templates/news-post"

const NewsPostPreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <NewsPostTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        description={entry.getIn(["data", "description"])}
        date="11/11/1111"
        image={entry.getIn(["data", "image"])}
        html={entry.getIn(["data", "body"])}
        id={entry.getIn(["data", "id"])}
      />
    </CSSInjector>
  )
}
export default NewsPostPreview
