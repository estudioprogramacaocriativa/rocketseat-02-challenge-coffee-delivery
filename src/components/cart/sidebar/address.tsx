import {IMaskInput} from "react-imask";
import {useContext} from "react";
import {CartContext} from "../../../contexts/CartContext.tsx";

export function Address() {
    const cartContext = useContext(CartContext)

    const getAddress = (zipCode: string) => {
        const onlyNumber = zipCode.replace(/[^0-9]/g, '');

        if(onlyNumber.length === 8) {
            fetch(`https://viacep.com.br/ws/${onlyNumber}/json/`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    cartContext.handleAddress('zipCode', data.cep)
                    cartContext.handleAddress('street', data.logradouro)
                    cartContext.handleAddress('neighborhood', data.bairro)
                    cartContext.handleAddress('city', data.localidade)
                    cartContext.handleAddress('state', data.uf)

                    if (data?.erro) {
                        cartContext.handleAddress('street', '')
                        cartContext.handleAddress('neighborhood', '')
                        cartContext.handleAddress('city', '')
                        cartContext.handleAddress('state', '')
                    }
                })
        }
    }

    return (
        <form className="mt-8">
            <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="md:col-span-1">
                    <IMaskInput
                        mask="00.000-000"
                        placeholder="CEP"
                        className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                        focus:border-yellow focus:outline-0 focus:ring-yellow"
                        type="text"
                        value={cartContext.address.zipCode}
                        onBlur={event => getAddress(event.target.value)}
                    />
                </div>
                <div className="md:col-span-2">
                    <input
                        className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                        focus:border-yellow focus:outline-0 focus:ring-yellow"
                        type="text"
                        placeholder="Responsável no local"
                        value={cartContext.address?.name}
                        onBlur={(e) => cartContext.handleAddress('name', e.target.value)}
                        onChange={e => cartContext.handleAddress('name', e.target.value)}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="md:col-span-2">
                    <input
                        className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                        focus:border-yellow focus:outline-0 focus:ring-yellow"
                        type="text"
                        placeholder="Rua"
                        value={cartContext.address?.street}
                        onBlur={(e) => cartContext.handleAddress('street', e.target.value)}
                        onChange={e => cartContext.handleAddress('street', e.target.value)}
                    />
                </div>
                <div className="md:col-span-1">
                    <input
                        className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                        focus:border-yellow focus:outline-0 focus:ring-yellow"
                        type="text"
                        placeholder="Número"
                        value={cartContext.address?.number}
                        onBlur={(e) => cartContext.handleAddress('number', e.target.value)}
                        onChange={e => cartContext.handleAddress('number', e.target.value)}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mt-3">
                <input
                    className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                    focus:border-yellow focus:outline-0 focus:ring-yellow"
                    type="text"
                    placeholder="Bairro"
                    value={cartContext.address?.neighborhood}
                    onBlur={(e) => cartContext.handleAddress('neighborhood', e.target.value)}
                    onChange={e => cartContext.handleAddress('neighborhood', e.target.value)}
                />
                <input
                    className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                    focus:border-yellow focus:outline-0 focus:ring-yellow"
                    type="text"
                    placeholder="Cidade"
                    value={cartContext.address?.city}
                    onBlur={(e) => cartContext.handleAddress('city', e.target.value)}
                    onChange={e => cartContext.handleAddress('city', e.target.value)}
                />
                <input
                    className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                    focus:border-yellow focus:outline-0 focus:ring-yellow"
                    type="text"
                    placeholder="UF"
                    value={cartContext.address?.state}
                    onBlur={(e) => cartContext.handleAddress('state', e.target.value)}
                    onChange={e => cartContext.handleAddress('state', e.target.value)}
                />
            </div>

            <textarea
                className="bg-base-input mt-3 rounded-md p-3 w-full border border-base-button
                focus:border-yellow focus:outline-0 focus:ring-yellow"
                placeholder="Complemento"
                value={cartContext.address?.complement}
                onBlur={(e) => cartContext.handleAddress('complement', e.target.value)}
                onChange={e => cartContext.handleAddress('complement', e.target.value)}
            />
        </form>
    )
}
