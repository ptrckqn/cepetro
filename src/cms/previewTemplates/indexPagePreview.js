import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { LandingPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <LandingPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        locations={[
          widgetsFor("locations").toJS()[0].data,
          widgetsFor("locations").toJS()[1].data,
        ]}
        highlights={widgetsFor("highlights").toJS().data}
        map={widgetsFor("map").toJS().data}
        news={widgetsFor("news").toJS().data}
      />
    </CSSInjector>
  )
}
export default IndexPagePreview
