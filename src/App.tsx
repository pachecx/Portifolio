const App = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-full flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center p-6">
        <h1 className="text-xl font-bold">adamkeyes</h1>
        <div className="flex space-x-4">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl text-center p-12 min-h-screen flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Nice to meet you! <br /> I’m <span className="text-green-500">Matheus Pacheco</span>.
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
           I'm a front-end developer passionate about building accessible web apps that users love.
        </p>
        <button className="mt-6 border-b-2 border-green-500 hover:text-green-500">CONTACT ME</button>
      </section>

      {/* Skills */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 text-center">
        {[
          { skill: "HTML", experience: "1 Years Experience" },
          { skill: "CSS", experience: "1 Years Experience" },
          { skill: "Javascript", experience: "1 Years Experience" },
          { skill: "Typescript", experience: "1 Years Experience" },
          { skill: "Accessibility", experience: "1 Years Experience" },
          { skill: "React", experience: "1 Years Experience" },
          { skill: "Sass", experience: "1 Years Experience" },
          { skill: "Tailwind", experience: "0.6 Years Experience" },
          { skill: "Java", experience: "0.3 Years Experience" },

        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{item.skill}</h3>
            <p className="text-gray-400">{item.experience}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="w-full max-w-6xl p-12 min-h-screen">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {[
            "Design Portfolio",
            "E-learning Landing Page",
            "Todo Web App",
            "Entertainment Web App",
            "Memory Game",
            "Art Gallery Showcase",
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="h-48 bg-gray-600"></div>
              <h3 className="mt-4 text-xl font-bold">{project}</h3>
              <p className="text-gray-400">HTML | CSS | JavaScript</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="w-full max-w-6xl p-12 text-center min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-400 max-w-md mx-auto mt-4">
          I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form className="mt-6 space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="NAME" className="w-full bg-black border-b-2 border-gray-500 p-2 focus:outline-none focus:border-green-500" />
          <input type="email" placeholder="EMAIL" className="w-full bg-black border-b-2 border-gray-500 p-2 focus:outline-none focus:border-green-500" />
          <textarea placeholder="MESSAGE" className="w-full bg-black border-b-2 border-gray-500 p-2 focus:outline-none focus:border-green-500"></textarea>
          <button className="border-b-2 border-green-500 hover:text-green-500">SEND MESSAGE</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">adamkeyes</h1>
        <div className="flex space-x-4">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>
    </div>
  );
};

export default App;