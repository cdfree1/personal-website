import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function App() {

  return (
    <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-bone font-garamond">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row justify-between gap-10 lg:gap-50">
          <div>
            <p>910-690-1931</p>
            <p>calebdfree@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">Brightstar</p>
            <p>Software Consulting</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Caleb FREE</h1>
          <h2>Forward Deployed Engineer</h2>
        </div>
        <div className="flex flex-row gap-10 justify-between">
          <a href="https://github.com/cdfree1" className="flex flex-row gap-1 items-center">
            <FaGithub></FaGithub>
            <p>cdfree</p>
          </a>
          <a href="https://www.linkedin.com/in/caleb-free/" className="flex flex-row gap-1 items-center">
            <FaLinkedin></FaLinkedin>
            <p>Linkedin</p>
          </a>
          <a href="https://www.instagram.com/caleb_free3.0/" className="flex flex-row gap-1 items-center">
            <FaInstagram></FaInstagram>
            <p>Instagram</p>
          </a>
        </div>
      </div >
    </div >
  )
}

export default App
