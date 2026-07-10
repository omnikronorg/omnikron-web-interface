import { ArrowLeftIcon } from "lucide-react"

function AiMedicalDiagnoses(props:any)
{
    return (
        <div>
            <h2>AI Medical Diagnoses</h2>

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

export default AiMedicalDiagnoses