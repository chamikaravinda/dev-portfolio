import { HugeiconsIcon } from '@hugeicons/react';
import { GithubIcon, Linkedin01Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import ShinyText from "@/components/shinney-text";
import TextType from "@/components/text-type";

const Home = () => {
    return (
        <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="space-y-4 max-w-4xl">
                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    Open for anything exciting
                </div>
                <h1 className='text-5xl md:text-8xl lg:text-8xl font-bold bg-linear-to-r from-[#0b13f4] via-[#2ab7f4] to-[#821aea] bg-clip-text text-transparent pb-2'>
                    Zigmatron Hub
                </h1>
                <h3 className="md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                    Dev portfolio of
                </h3>
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                    <ShinyText
                        text="Chamika Jayathilaka"
                        speed={3}
                        delay={0}
                        color="#ffffff"
                        shineColor="#b5b5b5"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                    />
                </h2>
                <h3 className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                    <TextType
                        text={["Crafting scalable enterprise solutions with Java & React.Obsessed with clean and " +
                        "maintainable code and the art of making complex things simple."]}
                        typingSpeed={50}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        loop={false}
                        cursorBlinkDuration={0.5}
                    />
                </h3>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                <a
                    href="https://github.com/chamikaravinda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-3.5 bg-gradient-to-r from-[#0b13f4] via-[#2ab7f4] to-[#821aea] text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(42,183,244,0.4)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                >
                    <HugeiconsIcon icon={GithubIcon} size={20} className="group-hover:rotate-12 transition-transform" />
                    GitHub Profile
                </a>
                <div className="flex items-center gap-4">
                    <a
                        href="https://linkedin.com/in/chamikaravinda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 border border-foreground/10 bg-white/5 text-foreground hover:bg-white/10 hover:border-foreground/20 rounded-full transition-all duration-300 hover:scale-110"
                        title="LinkedIn"
                    >
                        <HugeiconsIcon icon={Linkedin01Icon} size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="p-3.5 border border-foreground/10 bg-white/5 text-foreground hover:bg-white/10 hover:border-foreground/20 rounded-full transition-all duration-300 hover:scale-110"
                        title="Email Me"
                    >
                        <HugeiconsIcon icon={Mail01Icon} size={20} />
                    </a>
                </div>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-12">
                <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">5+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">10+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">AWS</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Expert</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">Full Stack</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Developer</span>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce opacity-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default Home;