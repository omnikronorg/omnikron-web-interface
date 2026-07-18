import Banner from "./Banner"
import { Lightbulb, Crosshair, Eye } from "lucide-react"

function Home()
{
    return (
        <div className="bg-black text-white">

            <Banner />

            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                        <div className="text-center">
                            <Lightbulb className="w-8 h-8 mx-auto mb-8 text-white/40" strokeWidth={1} />
                            <h3 className="text-sm font-light tracking-widest uppercase text-white/30 mb-4">
                                Insight
                            </h3>
                            <p className="text-base leading-relaxed text-white/50 max-w-xs mx-auto">
                                Where data becomes clarity and every pattern tells a story
                            </p>
                        </div>

                        <div className="text-center">
                            <Crosshair className="w-8 h-8 mx-auto mb-8 text-white/40" strokeWidth={1} />
                            <h3 className="text-sm font-light tracking-widest uppercase text-white/30 mb-4">
                                Precision
                            </h3>
                            <p className="text-base leading-relaxed text-white/50 max-w-xs mx-auto">
                                Engineering systems that see what others overlook
                            </p>
                        </div>

                        <div className="text-center">
                            <Eye className="w-8 h-8 mx-auto mb-8 text-white/40" strokeWidth={1} />
                            <h3 className="text-sm font-light tracking-widest uppercase text-white/30 mb-4">
                                Vision
                            </h3>
                            <p className="text-base leading-relaxed text-white/50 max-w-xs mx-auto">
                                Building the invisible infrastructure of tomorrow
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm font-light tracking-widest text-white/20 uppercase mb-6">
                        What we do
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white/80 max-w-3xl mx-auto leading-relaxed">
                        We blend intelligence with experience to create systems that think
                    </h2>
                </div>
            </section>

        </div>
    )
}

export default Home