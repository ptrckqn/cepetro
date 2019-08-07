import CMS from 'netlify-cms-app'
import LandingPagePreview from './preview-templates/LandingPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ResponsibilityPagePreview from './preview-templates/ResponsibilityPagePreview'
import NewsPagePreview from './preview-templates/NewsPagePreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('index', LandingPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('responsibility', ResponsibilityPreview)
CMS.registerPreviewTemplate('news', NewsPagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
