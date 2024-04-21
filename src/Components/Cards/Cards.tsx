import { Card } from "../Card/Card"
import './Cards.css'

interface Icards {
    cards: {
        id: number,
        name: string,
        content: string,
        created: number
        avatar: string
    }[]
}

export const Cards = ({ cards }: Icards) => {
  return (
    <ul className="cards">
        {cards.map((card) => <li className="card-item" id={card.id.toString()} key={card.id}><Card data={card}/></ li>)}
    </ul>
  )
}
