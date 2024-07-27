import { CodesandboxLogo, Coffee, ShoppingCart, Timer } from 'phosphor-react'
import hero from '../../assets/hero.svg'
import bgHero from '../../assets/hero-background.svg'

export function Hero() {
    return (
        <section
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <div className="max-w-6xl flex-col-reverse lg:flex-row m-auto flex items-center justify-between gap-14 w-full mt-16 py-20 px-4">
                <div>
                    <header>
                        <h1 className="text-xl sm:text-4xl font-bold text-base-title font-roboto">
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <p className="mt-5 text-base-subtitle">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                    </header>

                    <ul className="grid sm:grid-cols-2 gap-8 mt-12">
                        <li>
                            <div className="flex items-center gap-3">
                                <p className="bg-yellow-dark rounded-full w-12 h-12 flex items-center justify-center">
                                    <ShoppingCart size={22} style={{color: 'white'}}/>
                                </p>
                                <span className="text-base-title text-sm">Compra simples e segura</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <p className="bg-base-subtitle rounded-full w-12 h-12 flex items-center justify-center">
                                    <CodesandboxLogo size={22} style={{color: 'white'}}/>
                                </p>
                                <span className="text-base-title text-sm">Embalagem mantém o café intacto</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <p className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center">
                                    <Timer size={22} style={{color: 'white'}}/>
                                </p>
                                <span className="text-base-title text-sm">Entrega rápida e rastreada</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <p className="bg-purple-dark rounded-full w-12 h-12 flex items-center justify-center">
                                    <Coffee size={22} style={{color: 'white'}}/>
                                </p>
                                <span className="text-base-title text-sm">O café chega fresquinho até você</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <img src={hero} alt=""/>
            </div>
        </section>
    )
}
