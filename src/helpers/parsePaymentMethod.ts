export const parsePaymentMethod = (method: string) => {
    switch (method) {
        case "credit-card":
            return "Cartão de Crédito"
        case "debit-card":
            return "Cartão de débito"
        case "money":
            return "À vista em dinheiro"
        default:
            return "Nenhum"
    }
}
