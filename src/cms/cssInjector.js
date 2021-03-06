import React from "react"
import { StyleSheetManager } from "styled-components"

const CSSInjector = ({ children }) => {
  const iframe = document.querySelector("#nc-root iframe")
  const iframeHeadEle = iframe && iframe.contentDocument.head

  if (!iframeHeadEle) {
    return null
  }

  return (
    <StyleSheetManager target={iframeHeadEle}>{children}</StyleSheetManager>
  )
}

export default CSSInjector
