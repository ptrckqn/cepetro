import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { PlPageTemplate } from "../../templates/pl-page"

const PlPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <PlPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        highlights={widgetsFor("highlights").toJS().data}
        map={widgetsFor("map").toJS().data}
        news={widgetsFor("news").toJS().data}
      />
    </CSSInjector>
  )
}
export default PlPagePreview
