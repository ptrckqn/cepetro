import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { PlPostTemplate } from "../../templates/pl-post"

const PlPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <PlPostTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        botmap={widgetsFor("botmap").toJS().data}
        features={[
          widgetsFor("features").toJS()[0].data,
          widgetsFor("features").toJS()[1].data,
        ]}
      />
    </CSSInjector>
  )
}
export default PlPagePreview
