import CMS from "netlify-cms-app"

import IndexPagePreview from "./previewTemplates/indexPagePreview"
import AboutPagePreview from "./previewTemplates/aboutPagePreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
