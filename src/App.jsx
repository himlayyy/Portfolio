import {useState} from "React";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import PortfolioItem from "./components/PortfolioItem";
import {projects} from "./data"

import './App.css'

function App() {
  const [item, setItem] = useState(projects[0]);

  const clicked = (index) => {
    setItem({})
  }

  return (
    <div className="App bg-black ">
      <Header />
      <div className="flex justify-between">
        <div className="max-w-5xl flex flex-col h-screen justify-even flex-shrink justify-center items-center content-between text-slate-500">
          <Hero />
          <ul className="flex flex-col gap-6">
              {projects.map((project, index) => {
                return <div key={index} onClick={() => setItem(projects[index])}>{project.title}</div>
              })}
          </ul>
        </div>
        <div className="text-3xl text-red-500">
          <PortfolioItem project={item}/>
        </div>
      </div>
    </div>
  )
}

export default App