import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

function App() {


  return (
    <div className="container h-screen w-screen mx-auto px-4 flex items-center justify-center ">

      <div className=" animate-top flex flex-col bg-gray-900 border border-sky-500 shadow-lg shadow-sky-800 py-4 px-6 rounded-md" >

        <div className="flex flex-row items-center ">
          <div className=" overflow-hidden rounded-full border-2 border-sky-500">

            <img className="w-32 object-cover hover:scale-150 ease duration-300 " src="https://github.com/matheusaltrao.png" alt="" />

          </div>
          <div className="ml-4 ">
            <h3 className="font-semibold text-xl">Matheus Altrão</h3>
            <h4 className="text-indigo-300 pt-1">Front End Developer</h4>
          </div>

        </div>

        <div className="mt-6">
          <h2 className="font-bold text-cyan-400  mb-2 text-lg">Bio</h2>
          <p className="text-gray-300 font-normal mt-1 max-w-sm text-left" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum autem asperiores accusamus id nisi et officiis dolores? Natus suscipit corporis veritatis ullam animi neque praesentium nisi optio ipsa voluptatibus.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold text-cyan-400  mb-2 text-lg">Techs</h2>

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
          <h2 className="font-bold text-cyan-400 mb-2 text-lg" >Social</h2>

          <ul className='flex items-center justify-left gap-4'>
            <li className='text-2xl'><a target={'_blank'} href="#"> <AiOutlineInstagram /> </a></li>
            <li className='text-2xl'><a target={'_blank'} href="#"> <AiOutlineLinkedin /> </a></li>
            <li className='text-2xl'><a target={'_blank'} href="#"> <AiOutlineGithub /> </a></li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default App
