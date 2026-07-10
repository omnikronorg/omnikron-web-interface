import { ArrowLeftIcon } from "lucide-react"

function DecentralizedExchange(props:any)
{
    return (
        <div>
            <h2>Decentralized Exchange (DEX)</h2>

            <a href="/products" onClick={(e) => {
                e.preventDefault()
                history.pushState(null, '', '/products')
                props.setCurrentPage('products')
            }}>
                <ArrowLeftIcon />
                <span>Products</span>
            </a>
        </div>
    )
}

export default DecentralizedExchange