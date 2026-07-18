function Banner()
{
    return (
        <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">

            <div className="relative z-10 text-center px-6">

                <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white animate-fade-in">
                    Omnikron
                </h1>

                <div className="mt-8 w-12 h-px bg-white/20 mx-auto animate-fade-in-up"></div>

                <div className="mt-8 flex items-center justify-center text-lg md:text-xl font-light tracking-widest text-white/40 uppercase animate-fade-in-up">
                    <div className="slider-wrapper">
                        <span>Beyond</span>
                        <div className="slider">
                            <div className="slider-inner">
                                <div className="slider-text">the surface</div>
                                <div className="slider-text">the code</div>
                                <div className="slider-text">the data</div>
                                <div className="slider-text">the surface</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Banner