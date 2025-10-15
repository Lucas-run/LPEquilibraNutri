import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import TechStack from "./components/TechStack/TechStack";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <TechStack />
        <Features />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
