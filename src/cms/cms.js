import CMS from "netlify-cms-app"

import IndexPagePreview from "./previewTemplates/indexPagePreview"
import AboutPagePreview from "./previewTemplates/aboutPagePreview"
import ContactPagePreview from "./previewTemplates/contactPagePreview"
import NewsPagePreview from "./previewTemplates/newsPagePreview"
import NewsPostPreview from "./previewTemplates/newsPostPreview"
import OperationsPagePreview from "./previewTemplates/operationsPagePreview"
import ResponsibilityPagePreview from "./previewTemplates/responsibilityPagePreview"
import PlPagePreview from "./previewTemplates/plPagePreview"
import PlPostPreview from "./previewTemplates/plPostPreview"
CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
CMS.registerPreviewTemplate("news", NewsPagePreview)
CMS.registerPreviewTemplate("newspost", NewsPostPreview)
CMS.registerPreviewTemplate("operations", OperationsPagePreview)
CMS.registerPreviewTemplate("responsibility", ResponsibilityPagePreview)
CMS.registerPreviewTemplate("pl", PlPagePreview)
CMS.registerPreviewTemplate("wolin", PlPostPreview)
