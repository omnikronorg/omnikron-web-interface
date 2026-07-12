import { ArrowLeftIcon, StethoscopeIcon, BrainCircuitIcon, BarChart3Icon, DollarSignIcon, ActivityIcon, ScanIcon, AmbulanceIcon, GlobeIcon, ShieldCheckIcon, ChevronRightIcon, MicroscopeIcon, HeartPulseIcon, FileTextIcon, BotIcon, ImageIcon, ClipboardListIcon, ArrowRightIcon } from "lucide-react"
import medicalImageData from '../../../assets/medical-image-data.png'
import pneumoniaDiagnosisTrainingImage from '../../../assets/Pneumonia-Diagnosis-Training.png'
import TrainingAccuracyImage from '../../../assets/Training-Accuracy.png'
import TrainingLossImage from '../../../assets/Training-Loss.png'
import PredictionPneumoniaImage from '../../../assets/Prediction-Pneumonia.png'
import PredictionNormalImage from '../../../assets/Prediction-Normal.png'

const benefits = [
    {
        icon: BrainCircuitIcon,
        title: "Faster Diagnoses",
        description: "AI processes medical images in seconds, dramatically reducing wait times from days to minutes and enabling quicker clinical decisions."
    },
    {
        icon: BarChart3Icon,
        title: "Higher Accuracy",
        description: "Deep learning models achieve expert-level accuracy in detecting anomalies, reducing false negatives and supporting radiologists with a second opinion."
    },
    {
        icon: DollarSignIcon,
        title: "Cost Reduction",
        description: "Automate routine screening workflows, lower operational costs, and reallocate skilled professionals to complex cases that need human expertise."
    },
    {
        icon: ActivityIcon,
        title: "Scalability",
        description: "Deploy across multiple facilities simultaneously — from small clinics to large hospital networks — without compromising diagnostic quality or speed."
    }
]

const useCases = [
    {
        icon: ScanIcon,
        title: "Radiology",
        description: "Chest X-rays, CT scans, and MRIs analyzed for pneumonia, nodules, fractures, and other pathologies with high sensitivity and specificity."
    },
    {
        icon: MicroscopeIcon,
        title: "Pathology",
        description: "Digital pathology slides examined for cellular abnormalities, cancer staging, and tissue classification using convolutional neural networks."
    },
    {
        icon: AmbulanceIcon,
        title: "Emergency Triage",
        description: "Rapid assessment of critical findings in trauma and emergency settings, prioritizing life-threatening conditions for immediate attention."
    },
    {
        icon: GlobeIcon,
        title: "Remote Diagnostics",
        description: "Enables diagnostic capabilities in underserved and remote areas where access to specialist radiologists is limited or unavailable."
    }
]

function AiMedicalDiagnoses({setCurrentPage}:any)
{
    return (
        <div className="min-h-screen bg-white">

            {/* ─── Navigation Back ─── */}
            <div className="mx-auto px-4 pt-4 pb-4">
                <a href="/products" onClick={(e) => {
                    e.preventDefault()
                    history.pushState(null, '', '/products')
                    setCurrentPage('products')
                }}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                    <ArrowLeftIcon className="" />
                    <span>Products</span>
                </a>
            </div>

            {/* ─── Hero ─── */}
            <section className=" relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <HeartPulseIcon className="w-4 h-4" />
                            <span>AI & Data Science Product</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            AI Medical Diagnoses
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-blue-200/90 font-light mt-3">
                            AI Agents for Medical Diagnostics
                        </p>
                        <p className="text-lg md:text-xl text-gray-300/80 mt-4 leading-relaxed max-w-2xl">
                            The Future of Healthcare: AI Agents Redefining Medical Diagnosis — empowering clinicians with deep learning to detect diseases earlier and with greater confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Overview ─── */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                What Are AI Agents for Medical Diagnostics?
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
                                AI agents for medical diagnostics are sophisticated software programs that harness artificial intelligence to analyze complex medical data and assist physicians in diagnosing diseases with unprecedented precision.
                            </p>
                            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
                                These AI models process patient symptoms, medical history, lab results, and medical imaging data — delivering accurate, actionable diagnoses that support clinical decision-making and improve patient outcomes.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            {/* ── Flow Chart: AI Diagnostic Pipeline ── */}
                            <div className="w-full max-w-md lg:max-w-lg">
                                {/* Box 1: Medical Report */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-50 border-2 border-blue-300 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <FileTextIcon className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                        <span className="text-sm font-semibold text-blue-800 block">Medical Report</span>
                                        <span className="text-xs text-blue-600/70">Patient symptoms, history & lab results</span>
                                    </div>
                                </div>

                                {/* Down Arrow */}
                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-400 rotate-90" />
                                </div>

                                {/* Box 2: AI Agents */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <BotIcon className="w-5 h-5 text-indigo-600" />
                                            <span className="text-sm font-semibold text-indigo-800">AI Agents</span>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-indigo-600/80">
                                            <span>🫀 Cardiologist</span>
                                            <span>🫁 Pulmonologist</span>
                                            <span>🧠 Psychologist</span>
                                        </div>
                                        <div className="mt-1 text-[11px] text-indigo-500/70 font-medium tracking-wide">
                                            Large Language Model
                                        </div>
                                    </div>
                                </div>

                                {/* Down Arrow */}
                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-400 rotate-90" />
                                </div>

                                {/* Box 3: Specialist AI Models */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <ImageIcon className="w-5 h-5 text-emerald-600" />
                                            <span className="text-sm font-semibold text-emerald-800">AI Models for Image/Data Verification</span>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-emerald-600/80">
                                            <span>📷 Echocardiogram</span>
                                            <span>🩻 Chest X-Ray</span>
                                            <span>🧠 MRI Images</span>
                                        </div>
                                        <div className="mt-1 text-[11px] text-emerald-500/70 font-medium tracking-wide">
                                            Specialist AI Model
                                        </div>
                                    </div>
                                </div>

                                {/* Down Arrow */}
                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-400 rotate-90" />
                                </div>

                                {/* Box 4: AI Report */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <ClipboardListIcon className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                                        <span className="text-sm font-semibold text-amber-800 block">AI Report</span>
                                        <span className="text-xs text-amber-600/70">Diagnostic summary & confidence scores</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Key Benefits ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Key Benefits for Healthcare Providers
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                            Why leading medical institutions are adopting AI-powered diagnostic tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── How It Works ─── */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <StethoscopeIcon className="w-4 h-4" />
                            <span>Pipeline</span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            How Medical AI Models Are Trained
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                            Specialized medical models are trained through a rigorous multi-stage pipeline — from broad domain knowledge to highly specific clinical tasks.
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="mb-16">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                    Real-World Data (RWD) Collection
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    Accessing real, de-identified clinical information, images, and data utilizing specific, secure medical search engines, institutional repositories, and public research datasets.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                                    RWD is routinely captured via electronic health records, wearable devices, and sensors to drive actionable predictive models and operational optimization.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <img
                                src={medicalImageData}
                                alt="Medical data collection"
                                className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-16">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                    Categorized Training
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    An artificial computer brain — a Machine Learning (ML) model specialized in classification — is created. The AI is taught to systematically sort data into predefined labels, for example categorizing a chest X-ray as <strong>"NORMAL"</strong> or <strong>"PNEUMONIA"</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <img
                                    src={pneumoniaDiagnosisTrainingImage}
                                    alt="Pneumonia diagnosis training visualization"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <img
                                    src={TrainingAccuracyImage}
                                    alt="Training accuracy chart"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <img
                                    src={TrainingLossImage}
                                    alt="Training loss chart"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                    Model Implementation
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    The created model is then rigorously tested and validated with unseen data to determine its potential for day-to-day clinical use. This phase ensures reliability, generalization, and safety before deployment.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-2 text-center">Prediction: Pneumonia Detected</p>
                                <img
                                    src={PredictionPneumoniaImage}
                                    alt="Pneumonia prediction result"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-2 text-center">Prediction: Normal</p>
                                <img
                                    src={PredictionNormalImage}
                                    alt="Normal prediction result"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Use Cases ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Clinical Use Cases
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                            Our AI diagnostic models are applicable across a wide range of medical specialties.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── Compliance & Security ─── */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                                <ShieldCheckIcon className="w-4 h-4" />
                                <span>Compliance & Security</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                Built for the Regulated Medical Environment
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-gray-900">HIPAA Compliance</span>
                                        <p className="text-sm text-gray-600">Designed to meet HIPAA privacy and security requirements for protected health information (PHI).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-gray-900">Data Encryption</span>
                                        <p className="text-sm text-gray-600">End-to-end encryption for data at rest and in transit, with strict access controls and audit logging.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-gray-900">FDA Regulatory Pathway</span>
                                        <p className="text-sm text-gray-600">Models developed following FDA-recognized standards for SaMD (Software as a Medical Device) clearance.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-gray-900">GDPR Readiness</span>
                                        <p className="text-sm text-gray-600">Data processing compliant with GDPR requirements for European healthcare deployments.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full max-w-md lg:max-w-lg bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                                    <ShieldCheckIcon className="w-8 h-8 text-green-600" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Enterprise-Grade Security</h3>
                                        <p className="text-xs text-gray-500">Multi-layered protection for patient data</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">HIPAA-compliant infrastructure</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">AES-256 encryption at rest & in transit</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">SOC 2 Type II certified data centers</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Role-based access control (RBAC)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Full audit trail & compliance logging</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Call to Action ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Ready to Transform Your Diagnostic Workflow?
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
                        Partner with us to deploy AI-powered diagnostic agents in your healthcare facility and elevate the standard of patient care.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            onClick={(e) => {
                                e.preventDefault()
                                history.pushState(null, '', '/contact')
                                setCurrentPage('contact')
                            }}
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                        >
                            Schedule a Demo
                            <ChevronRightIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="/products"
                            onClick={(e) => {
                                e.preventDefault()
                                history.pushState(null, '', '/products')
                                setCurrentPage('products')
                            }}
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                        >
                            Explore All Products
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AiMedicalDiagnoses