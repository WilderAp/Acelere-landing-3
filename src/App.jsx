import Navbar from "./components/Navbar/Navbar";
import About from "./components/about";
import Expertise from "./components/expertise";
import Hero from "./components/hero";
import Services from "./components/services";
import Layout from "./components/ui/Layout";
import Footer from "./components/ui/footer";
import Projects from "./components/projects";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <section id="sobre">
          <Hero />
        </section>
        <section>
          <Expertise />
        </section>
        <section id="recursos">
          <Services />
        </section>
        <section id="depoimentos">
          <About />
        </section>
        <section>
          <Projects />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
