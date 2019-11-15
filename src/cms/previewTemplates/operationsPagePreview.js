import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { OperationsPageTemplate } from "../../templates/operations-page"

const OperationsPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <OperationsPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        showcase={widgetsFor("showcase").toJS().data}
      />
    </CSSInjector>
  )
}
export default OperationsPagePreview
