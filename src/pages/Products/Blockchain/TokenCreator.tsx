import { ArrowLeftIcon } from "lucide-react"

function TokenCreator({setCurrentPage}:any)
{
    return (
        <div>
            <h2>Token Creator</h2>

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

export default TokenCreator