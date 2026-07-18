import { ArrowLeftIcon, BrainCircuitIcon, BarChart3Icon, DollarSignIcon, ActivityIcon, ScanIcon, AmbulanceIcon, GlobeIcon, ShieldCheckIcon, ChevronRightIcon, MicroscopeIcon, HeartPulseIcon, FileTextIcon, BotIcon, ImageIcon, ClipboardListIcon, ArrowRightIcon, LayersIcon, ServerIcon, CpuIcon, StethoscopeIcon } from "lucide-react"
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

const modalities = [
    {
        icon: ScanIcon,
        title: "Chest X-Ray",
        findings: ["Pneumonia & Lung Infections", "Cardiac Enlargement", "Pleural Effusion", "Tumors & Nodules"],
        description: "Comprehensive thoracic analysis detecting pulmonary, cardiac, and structural abnormalities."
    },
    {
        icon: HeartPulseIcon,
        title: "Echocardiogram",
        findings: ["Cardiovascular Disease", "Valve Abnormalities", "Ventricular Function", "Cardiomyopathy"],
        description: "Cardiac ultrasound analysis for structural and functional heart assessment."
    },
    {
        icon: MicroscopeIcon,
        title: "MRI",
        findings: ["Brain Tumors & Lesions", "Neurological Diseases", "Spinal Cord Abnormalities", "Soft Tissue Pathology"],
        description: "Advanced magnetic resonance imaging for detailed soft tissue and neurological diagnostics."
    }
]

const useCases = [
    {
        icon: ScanIcon,
        title: "Medical Imaging Triage",
        description: "Prioritize critical findings across chest X-rays, echocardiograms, and MRI scans — flagging urgent cases for immediate radiologist review."
    },
    {
        icon: MicroscopeIcon,
        title: "Multi-Modality Diagnostics",
        description: "Apply trained CNN models across different imaging modalities — from thoracic radiology to cardiac ultrasound and neurological MRI."
    },
    {
        icon: AmbulanceIcon,
        title: "Clinical Decision Support",
        description: "AI-powered second opinion system that augments physician expertise with quantitative analysis and confidence scoring."
    },
    {
        icon: GlobeIcon,
        title: "Remote & Scalable Deployment",
        description: "Containerized architecture enabling deployment across cloud, on-premise, or edge infrastructure worldwide."
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
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span>Products</span>
                </a>
            </div>

            {/* ─── Hero ─── */}
            <section className="relative overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                            <HeartPulseIcon className="w-4 h-4" />
                            <span>AI & Data Science Product</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            AI Medical Diagnoses
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-light mt-3">
                            AI Agents for Medical Diagnostics
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed max-w-2xl">
                            Deep learning–powered diagnostic agents that analyze medical images — including chest X-rays, echocardiograms, and MRI scans — to assist clinicians in detecting diseases earlier and with greater confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Overview ─── */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                AI-Powered Medical Image Analysis
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
                                Our platform uses Convolutional Neural Network (CNN) models to analyze a wide range of medical images — from chest X-rays and echocardiograms to MRI scans — classifying findings and detecting abnormalities across multiple pathologies.
                            </p>
                            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
                                The trained models are served through a high-performance inference engine and integrated into clinical workflows via a dedicated application server, enabling seamless communication between AI capabilities and existing health infrastructure.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            {/* ── Flow Chart: AI Diagnostic Pipeline ── */}
                            <div className="w-full max-w-md lg:max-w-lg">
                                {/* Box 1: Medical Report */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <FileTextIcon className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                                        <span className="text-sm font-semibold text-black block">Medical Report</span>
                                        <span className="text-xs text-gray-500">Patient symptoms, history & lab results</span>
                                    </div>
                                </div>

                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-500 rotate-90" />
                                </div>

                                {/* Box 2: AI Agents + LLM */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <BotIcon className="w-5 h-5 text-blue-500" />
                                            <span className="text-sm font-semibold text-black">AI Agents</span>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-gray-600">
                                            <span>Specialist Models</span>
                                            <span>LLM Orchestration</span>
                                        </div>
                                        <div className="mt-1 text-[11px] text-blue-500/70 font-medium tracking-wide">
                                            Agents work together via Large Language Model
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-500 rotate-90" />
                                </div>

                                {/* Box 3: Multi-Modality Image Verification */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <ImageIcon className="w-5 h-5 text-blue-500" />
                                            <span className="text-sm font-semibold text-black">AI Image Verification</span>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-gray-600">
                                            <span>Chest X-Ray</span>
                                            <span>Echocardiogram</span>
                                            <span>MRI</span>
                                        </div>
                                        <div className="mt-1 text-[11px] text-blue-500/70 font-medium tracking-wide">
                                            Multi-Modality CNN Models
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center my-2">
                                    <ArrowRightIcon className="w-5 h-5 text-blue-500 rotate-90" />
                                </div>

                                {/* Box 4: AI Report */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 shadow-md text-center w-full">
                                        <ClipboardListIcon className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                                        <span className="text-sm font-semibold text-black block">AI Report</span>
                                        <span className="text-xs text-gray-500">Comprehensive diagnostic summary generated by agents + LLM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Imaging Modalities ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <StethoscopeIcon className="w-4 h-4" />
                            <span>Supported Modalities</span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            Multi-Modality Medical Imaging
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                            Our CNN models are trained across multiple imaging modalities to detect a wide spectrum of pathologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {modalities.map((modality, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                                    <modality.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-2">
                                    {modality.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                    {modality.description}
                                </p>
                                <ul className="space-y-1.5">
                                    {modality.findings.map((finding, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                            {finding}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Key Benefits ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            Key Benefits for Healthcare Providers
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                            Why medical institutions adopt AI-powered diagnostic tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-black mb-2">
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
            <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <CpuIcon className="w-4 h-4" />
                            <span>Technology Pipeline</span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            How the AI Models Are Built & Deployed
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                            From data acquisition to production inference — a complete deep learning pipeline.
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="mb-16">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-black">
                                    Data Collection & Preparation
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    Curated medical imaging datasets are collected from research repositories across multiple modalities — chest X-rays, echocardiograms, and MRI scans. Images are standardized, normalized, and prepared for model training.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                                    Each dataset is split into training and validation sets to ensure models generalize well to unseen clinical data.
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
                            <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-black">
                                    CNN Model Training
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    Convolutional Neural Networks are trained on labeled medical images to learn patterns and features associated with different pathologies. The architecture uses multiple convolutional layers with increasing depth to capture both fine details and high-level structures.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                                    Training employs optimization techniques such as adaptive learning rates and early stopping to prevent overfitting while maximizing accuracy.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <img
                                    src={pneumoniaDiagnosisTrainingImage}
                                    alt="CNN training visualization"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <img
                                    src={TrainingAccuracyImage}
                                    alt="Training accuracy chart"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
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
                            <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-black">
                                    Model Serving & Integration
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                                    Trained models are deployed through a high-performance inference server. A Java application server acts as the integration layer, routing requests from clinical interfaces to the AI engine and returning predictions with confidence scores.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                                    The entire system is containerized for portability, enabling deployment across cloud, on-premise infrastructure, or edge environments as needed.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-2 text-center">Inference Result: Abnormal Detected</p>
                                <img
                                    src={PredictionPneumoniaImage}
                                    alt="Abnormal prediction result"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-2 text-center">Inference Result: Normal</p>
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

            {/* ─── Technology Stack ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Technology Stack
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
                            Built with proven, industry-standard frameworks and tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                                <BrainCircuitIcon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Deep Learning</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                CNN models trained on multi-modality medical imaging datasets for classification and anomaly detection.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                                <BotIcon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">AI Agents + LLM</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Specialist AI agents coordinated by a Large Language Model to generate comprehensive diagnostic reports.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                                <ServerIcon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Inference Engine</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                High-performance server serving predictions. Accepts medical images and returns classification results with confidence scores.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                                <LayersIcon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Integration Layer</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Java application server bridging the AI engine with clinical interfaces, handling authentication, routing, and audit logging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Regulatory Adaptability ─── */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                                <ShieldCheckIcon className="w-4 h-4" />
                                <span>Regulatory Adaptability</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                Built for Global Regulatory Environments
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
                                Our platform is architected with a compliance-ready foundation that can be adapted to meet regulatory requirements across different jurisdictions.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-black">Data Privacy & Protection</span>
                                        <p className="text-sm text-gray-600">End-to-end encryption for data at rest and in transit, with strict access controls and audit logging.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-black">Regulatory Compliance Framework</span>
                                        <p className="text-sm text-gray-600">Architecture designed to be adaptable to local health data regulations, privacy laws, and medical device software standards worldwide.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-black">Clinical Validation</span>
                                        <p className="text-sm text-gray-600">Models are rigorously tested and validated with unseen data to ensure reliability, generalization, and safety before deployment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold text-black">Secure Infrastructure</span>
                                        <p className="text-sm text-gray-600">Role-based access control, full audit trails, and infrastructure designed to meet enterprise security requirements.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full max-w-md lg:max-w-lg bg-slate-50 rounded-2xl p-6 shadow-lg border border-slate-200">
                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
                                    <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold text-black">Enterprise-Grade Security</h3>
                                        <p className="text-xs text-gray-500">Multi-layered protection for patient data</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">End-to-end data encryption</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Role-based access control (RBAC)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Full audit trail & compliance logging</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Secure containerized deployment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Adaptable to local regulatory frameworks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Call to Action ─── */}
            <section className="hidden py-12 md:py-16 lg:py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Ready to Transform Your Diagnostic Workflow?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
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
                            className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-colors duration-200 shadow-lg"
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
                            className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors duration-200"
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