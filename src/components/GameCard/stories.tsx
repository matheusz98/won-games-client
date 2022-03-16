import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
    title: 'GameCard',
    component: GameCard,
    args: {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/random/300x140',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 200,00'
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)