import Background from '@/components/background';
import Home from "@/app/sections/home";
import About from "@/app/sections/about";
import Experience from "@/app/sections/experience";
import Contact from "@/app/sections/contact";
import Footer from "@/app/sections/footer";

const Page = () => {
    return (
        <section>
            <div className="fixed inset-0 w-full h-screen -z-10">
                <Background
                    mouseForce={20}
                    cursorSize={150}
                    isViscous={false}
                    viscous={80}
                    colors={["#0b13f4","#2ab7f4","#821aea"]}
                    autoDemo
                    autoSpeed={0.1}
                    autoIntensity={1.3}
                    isBounce
                    resolution={0.75}
                />
            </div>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
            <Footer/>

        </section>
    );
};

export default Page;