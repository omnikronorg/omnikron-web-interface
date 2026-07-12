import type { ProductsNavItem } from "../../types/navigation"

function Products({setCurrentPage}:any)
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
            <h2 className="p-6 text-4xl font-bold">Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mx-auto max-w-7xl px-4">
                {
                productCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-xl/30 overflow-hidden hover:bg-slate-200 hover:shadow-xl/15">
                        <a 
                        href={card.parentHref + card.href}
                        onClick={(e) =>{
                            e.preventDefault()
                            history.pushState(null, '', card.parentHref + card.href)
                            setCurrentPage(card.pageId)
                        }}
                        >
                            <div className="p-4">
                                <h3 className="text-gray-900 mt-3 text-2xl text-center">{card.label}</h3>
                                <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                                <span className="text-blue-500 text-sm font-medium mt-4 block">
                                    Read More
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products