import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import Game from '../../Models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência aclamado, onde o agente especial Leon Kennedy enfrenta horrores grotescos em uma vila rural europeia enquanto tenta resgatar a filha do presidente dos Estados Unidos.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência aclamado, onde o agente especial Leon Kennedy enfrenta horrores grotescos em uma vila rural europeia enquanto tenta resgatar a filha do presidente dos Estados Unidos.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência aclamado, onde o agente especial Leon Kennedy enfrenta horrores grotescos em uma vila rural europeia enquanto tenta resgatar a filha do presidente dos Estados Unidos.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4 é um jogo de terror de sobrevivência aclamado, onde o agente especial Leon Kennedy enfrenta horrores grotescos em uma vila rural europeia enquanto tenta resgatar a filha do presidente dos Estados Unidos.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
