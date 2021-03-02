// on importe le fichier css/scss principal
import '../sass/main.scss'

// on importe la base de donnée
import data from '../assets/data/FishEyeDataFR.json'

// on inporte les functions de factory
import { createSectionPhotographers } from './elementFactory'

for (const photographer in data.photographers) {
  createSectionPhotographers(data.photographers[photographer])
}
