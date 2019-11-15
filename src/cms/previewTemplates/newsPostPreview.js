import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { NewsPostTemplate } from "../../templates/news-post"

const NewsPostPreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      {console.log(entry.getIn(["data"]))}
      <NewsPostTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        description={entry.getIn(["data", "description"])}
        date={entry.getIn(["data", "date"])}
        image={entry.getIn(["data", "image"])}
        html={entry.getIn(["data", "html"])}
        id={entry.getIn(["data", "id"])}
      />
    </CSSInjector>
  )
}
export default NewsPostPreview
