import { ArrowLeftIcon } from "lucide-react"

function FarmLiquidityProvider({setCurrentPage}:any)
{
    return (
        <div>
            <h2>Farm Liquidity Provider</h2>

            <a href="/products" onClick={(e) => {
                e.preventDefault()
                history.pushState(null, '', '/products')
                setCurrentPage('products')
            }}>
                <ArrowLeftIcon />
                <span>Products</span>
            </a>
        </div>
    )
}

export default FarmLiquidityProvider