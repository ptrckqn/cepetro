import CMS from "netlify-cms-app"

import IndexPagePreview from "./previewTemplates/indexPagePreview"
import AboutPagePreview from "./previewTemplates/aboutPagePreview"
import ContactPagePreview from "./previewTemplates/contactPagePreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
