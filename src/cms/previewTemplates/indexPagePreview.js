import React from "react"
import cssInjector from "../cssInjector"
import { LandingPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry, widgetsFor }) => (
  <cssInjector>
    <LandingPageTemplate
      title={entry.getIn(["data", "title"])}
      hero={entry.getIn(["data", "hero"])}
      locations={widgetsFor("locations").toJS().data}
      highlights={widgetsFor("highlights").toJS().data}
      map={widgetsFor("map").toJS().data}
      news={widgetsFor("news").toJS().data}
    />
  </cssInjector>
)

export default IndexPagePreview
