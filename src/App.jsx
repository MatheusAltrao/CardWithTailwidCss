import { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

function App() {

  const [theme, setTheme] = useState(localStorage.theme)

  useEffect(() => {

    if (theme === 'dark') {

      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')

    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme', 'dark')
    }

  }, [theme])

  function handleSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (
    <div id='app' className=" w-screen h-screen   px-4 flex items-center justify-center dark:bg-gray-800 ">

      <div className=" animate-top flex flex-col bg-white border border-purple-600  shadow-purple-500  py-4 px-6 rounded-md relative  shadow-lg   dark:bg-gray-900 dark:text-white dark:shadow-cyan-500 dark:border-cyan-600
        " /*    */ >

        <label className="absolute block items-center justify-center cursor-pointer top-4 right-4 outline-none   ">
          <input onClick={handleSwitch} type="checkbox" value="" className="sr-only peer outline-none " />
          <div className=" w-[55px] h-6  rounded-full peer  peer-checked:after:translate-x-[30px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all bg-purple-600 peer-checked:border-gray-600 dark:bg-cyan-400
            " >
            {/*   */}


          </div>
        </label>


        <div className="flex flex-row items-center ">
          <div className=" overflow-hidden rounded-full border-2 border-purple-600 dark:border-sky-500     "> {/**/}

            <img className="w-32 object-cover " src="https://github.com/matheusaltrao.png" alt="" />

          </div>
          <div className="ml-4 ">
            <h3 className="font-semibold text-xl ">Matheus Altrão</h3>
            <h4 className=" font-light opacity-70 pt-1">Front-End </h4>
          </div>

        </div>

        <div className="mt-6">
          <h2 className="font-bold text-purple-500 mb-2 text-lg dark:text-cyan-400  ">Bio</h2> {/*   */}
          <p className=" font-medium opacity-80 mt-1 max-w-sm text-left" >
            Sou um programador Front-end apaixonado e motivado, com
            experiência em várias ferramentas e tecnologias populares, como
            ReactJs,TailwindCss.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold text-purple-500  mb-2 text-lg dark:text-cyan-400    ">Techs</h2> {/* dark:text-cyan-400  */}

          <div className="mt-4">
            <ul className="list-disc pl-5">
              <li className=" font-medium">Javascript</li>
              <li className=" font-medium">ReactJS</li>
              <li className=" font-medium">TailwindCss</li>
              <li className=" font-medium">Ui/Ux</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-bold text-purple-500  mb-2 text-lg dark:text-cyan-400   ">Social</h2> {/* dark:text-cyan-400  */}

          <ul className='flex items-center justify-left gap-4'>
            <li className='text-2xl'><a target={'_blank'} href="https://www.linkedin.com/in/matheus-altrao/"> <AiOutlineLinkedin /> </a></li>
            <li className='text-2xl'><a target={'_blank'} href="https://github.com/MatheusAltrao"> <AiOutlineGithub /> </a></li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default App
