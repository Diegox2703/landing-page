import { 
  Header, 
  Hero, 
  Features, 
  MoreInformation,
  Testimonials,
  Form,
  Footer
} from "./components";

export default function App() {
  return (
    <main className="m-auto">
      <section className="relative bg-Navy-850 p-6 h-[420px] md:h-[640px]">
        <Header/> 
        <img 
          src="/images/illustration-intro.png" 
          alt="intro ilustration" 
          className="relative z-10 mt-12 w-[320px] md:w-[450px] mx-auto"
        />
        <img 
          src="/images/bg-curvy-mobile.svg" 
          alt="bg-curvy-mobile" 
          className="absolute bottom-0 left-0 w-full xl:hidden"
        />
        <img 
          src="/images/bg-curvy-desktop.svg" 
          alt="bg-curvy-desktop" 
          className="absolute bottom-0 left-0 w-full hidden xl:block"
        />
      </section>
      <section className="bg-Navy-900 p-6 pb-[300px]">
        <Hero/>
        <Features/>
        <MoreInformation/>
        <Testimonials/>
      </section>
      <section className="bg-Navy-950 relative p-6">
        <Form/>
        <Footer/>
      </section>
    </main>
  )
}
