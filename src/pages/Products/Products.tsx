import type { ProductsNavItem } from "../../types/navigation"

function Products(props:any)
{
    const productCards: ProductsNavItem[] = [
        {
            label: "AI Medical Diagnoses", 
            description: "Identifying Medical Diagnoses by Image-Based Deep Learning.",
            href: "/ai-medical-diagnoses",
            parentHref: "/products",
            groupLabel: "AI & Data Science",
            pageId: "ai-medical-diagnoses"
        },
        {
            label: "Decentralized Exchange (DEX)", 
            description: "Multichain DEX (Uniswap like) enabling the swapping of ERC-20 tokens via liquidity pools.",
            href: "/decentralized-exchange",
            parentHref: "/products",
            groupLabel: "Blockchain",
            pageId: "decentralized-exchange"
        },
        {
            label: "Farm Liquidity Provider", 
            description: "Yield Farming - DEX Liquidity Pools & Farms.",
            href: "/farm-liquidity-provider",
            parentHref: "/products",
            groupLabel: "Blockchain",
            pageId: "farm-liquidity-provider"
        }
    ]

    return (
        <div>
            <h2>Products</h2>

            <ul>
                {
                productCards.map((card, index) => (
                    <li key={index}>
                        <a 
                        href={card.parentHref + card.href}
                        onClick={(e) =>{
                            e.preventDefault()
                            history.pushState(null, '', card.parentHref + card.href)
                            props.setCurrentPage(card.pageId)
                        }}
                        >
                            {card.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products