import { ArrowLeftIcon } from "lucide-react"
import medicalDiagnosisImage from '../../../assets/medical-diagnosis.png'

function AiMedicalDiagnoses(props:any)
{
    return (
        <div>
            <a href="/products" onClick={(e) => {
                e.preventDefault()
                history.pushState(null, '', '/products')
                props.setCurrentPage('products')
            }}>
                <div className="flex gap-2 pl-2 pt-2 hover:text-blue-500">
                    <ArrowLeftIcon />
                    <span>Products</span>
                </div>
            </a>

            <h2 className="p-6 text-4xl font-bold">AI Medical Diagnoses</h2>
            <h3 className="text-center text-3xl">AI Agents for Medical Diagnostics</h3>
            <h4 className="text-center text-2xl p-3">The Future of Healthcare: AI Agents Redefining Medical Diagnosis</h4>
            <div className="p-3">
                <p className="">
                    AI agents for medical diagnostics are software programs that use artificial intelligence to analyze medical data and help doctors diagnose diseases. These AI models process patient symptoms, medical history, lab results, and imaging data to provide accurate diagnoses.
                </p>

                <img src={medicalDiagnosisImage} className="max-w-350 m-auto" />

            </div>

        </div>
    )
}

export default AiMedicalDiagnoses