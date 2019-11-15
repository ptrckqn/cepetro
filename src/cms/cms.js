import CMS from "netlify-cms-app"

import IndexPagePreview from "./previewTemplates/indexPagePreview"
import AboutPagePreview from "./previewTemplates/aboutPagePreview"
import ContactPagePreview from "./previewTemplates/contactPagePreview"
import NewsPagePreview from "./previewTemplates/newsPagePreview"
import NewsPostPreview from "./previewTemplates/newsPostPreview"
CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
CMS.registerPreviewTemplate("news", NewsPagePreview)
CMS.registerPreviewTemplate("newspost", NewsPagePreview)
