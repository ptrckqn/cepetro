import React, { useEffect } from "react"
import CSSInjector from "../cssInjector"
import { ContactPageTemplate } from "../../templates/contact-page"

const ContactPagePreview = ({ entry, widgetsFor }) => {
  return (
    <CSSInjector>
      <ContactPageTemplate
        title={entry.getIn(["data", "title"])}
        hero={entry.getIn(["data", "hero"])}
        main={widgetsFor("main").toJS().data}
        secondary={[
          widgetsFor("secondary").toJS()[0].data,
          widgetsFor("secondary").toJS()[1].data,
          widgetsFor("secondary").toJS()[2].data,
        ]}
      />
    </CSSInjector>
  )
}
export default ContactPagePreview
