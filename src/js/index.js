// on importe le fichier css/scss principal
import '../sass/main.scss'
import { generateIndexHtml, generatePhotographerPageHtml } from './factoryPages'

const pageActuelle = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

if (pageActuelle === 'index.html') {
  generateIndexHtml()
}
if (pageActuelle === 'photographer_page.html') {
  generatePhotographerPageHtml()
}
