import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <AboutPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        highlights={widgetsFor("highlights").toJS().data}
        features={[
          widgetsFor("features").toJS()[0].data,
          widgetsFor("features").toJS()[1].data,
        ]}
      />
    </CSSInjector>
  )
}
export default AboutPagePreview
