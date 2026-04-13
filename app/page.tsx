import React from 'react';
import Background from '@/app/components/react-bits/Background';
import Home from "@/app/sections/Home";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";

const Page = () => {
    return (
        <section>
            <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
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
            <Contact/>

        </section>
    );
};

export default Page;