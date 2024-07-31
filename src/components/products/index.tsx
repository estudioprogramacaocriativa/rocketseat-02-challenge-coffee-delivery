import {Card} from "./card.tsx";

import ApiCoffees from '../../api/coffees.json'

export interface Product {
    id: number
    categories: string[]
    name: string
    description: string
    price: number
    quantity: number
    image: string
}

const productsList: Product[] = ApiCoffees;

export function Products() {
    return (
        <section className="max-w-6xl m-auto pb-20 px-4">
            <h1 className="text-base-title font-bold font-baloo text-3xl">
                Nossos Cafés
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mt-14">
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
