import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { ResponsibilityPageTemplate } from "../../templates/responsibility-page"

const ResponsibilityPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <ResponsibilityPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        highlights={widgetsFor("highlights").toJS().data}
      />
    </CSSInjector>
  )
}
export default ResponsibilityPagePreview
