import {Card} from "./card.tsx";

export interface Product {
    id: string
    name: string
    description: string
    price: number
    quantity: number,
}

const productsList: Product[] = [
    {
        id: '1',
        name: 'Expresso Tradicional',
        description: 'O tradicional cafe do mundo',
        price: 9.90,
        quantity: 0
    },
    {
        id: '2',
        name: 'Expresso Americano',
        description: 'Expresso com um pouco de leite',
        price: 9.90,
        quantity: 0
    },
    {
        id: '3',
        name: 'Expresso Cremoso',
        description: 'Cafe gelado',
        price: 9.90,
        quantity: 0
    },
    {
        id: '4',
        name: 'Expresso Gelado',
        description: 'Cafe gelado',
        price: 9.90,
        quantity: 0
    },
    {
        id: '5',
        name: 'Cafe com Leite',
        description: 'Meio a meio de expresso tradicional com leite quente e manteiga',
        price: 9.90,
        quantity: 0
    },
    {
        id: '6',
        name: 'Latte',
        description: 'Uma dose de cafe com leite quente e espesso',
        price: 9.90,
        quantity: 0
    },
    {
        id: '7',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de cafe e leite',
        price: 19.90,
        quantity: 0
    },
    {
        id: '8',
        name: 'Macchiato',
        description: 'Cafe molido com um pouco de leite quente e espesso',
        price: 69.90,
        quantity: 0,
    },
    {
        id: '9',
        name: 'Mocaccino',
        description: 'Cafe gelado com calda de chocolate',
        price: 5.90,
        quantity: 0
    },
    {
        id: '10',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e cafe',
        price: 9.90,
        quantity: 0
    },
    {
        id: '11',
        name: 'Cubano',
        description: 'Cafe gelado',
        price: 39.90,
        quantity: 0
    },
    {
        id: '12',
        name: 'Havaiano',
        description: 'Cafe gelado',
        price: 19.90,
        quantity: 0
    },
    {
        id: '13',
        name: 'Ameírico',
        description: 'Cafe gelado',
        price: 29.90,
        quantity: 0,
    },
    {
        id: '14',
        name: 'Irlandes',
        description: 'Cafe gelado',
        price: 9.90,
        quantity: 0
    }
];

export function Products() {
    return (
        <section className="max-w-6xl m-auto pb-20 px-4">
            <h1 className="text-base-title font-bold font-baloo text-3xl">
                Nossos Cafés
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                {productsList.map((product) => {
                   return <Card
                       key={product.id}
                       product={product}
                   />
                })}
            </div>
        </section>
    )
}
