import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Throughout my professional journey, I've engaged in a diverse range of projects, each presenting unique challenges and opportunities for growth. From tackling complex problem-solving in software development to orchestrating seamless project management in a fast-paced environment, my experience reflects a versatile skill set. Explore the details of these endeavors below to gain a deeper understanding of my hands-on involvement and the valuable lessons learned along the way.
      </p>

      <br></br>

      <h1 className='head-text'>
        🎄
        <span className='bg-gradient-to-r from-red-500 via-red-700 to-red-600 inline-block text-transparent bg-clip-text drop-shadow font-semibold'>
         Advent of Code 2023 
        </span>
        🎁
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Come check out my Advent of Code 2023 solutions!  
      <Link
        to={'https://github.com/ElminD/AdventOfCode2023'}
        target='_blank'
        rel='noopener noreferrer'
        className='font-semibold text-green-700'
      >
         ⭐Here!⭐
      </Link>
      </p>



      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;