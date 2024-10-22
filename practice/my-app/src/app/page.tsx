import Dropdown from "./components/Dropdown";


export default function Home() {
  return (
    <div>
      <Dropdown />
      <section id="home" className="p-8">
        <h1 className="text-3xl">Home Section</h1>
        <p>Welcome to the Home section.</p>
      </section>

      <section id="about" className="p-8">
        <h1 className="text-3xl">About Section</h1>
        <p>This is the About section.</p>
      </section>

      <section id="projects" className="p-8">
        <h1 className="text-3xl">Projects Section</h1>
        <p>Check out some of our projects here.</p>
      </section>
    </div>
  );
}
