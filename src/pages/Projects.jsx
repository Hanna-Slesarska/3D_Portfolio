import { Link } from "react-router-dom";

import CTA from '../components/CTA';

import { arrow } from "../assets/icons";
import ClientProjects from "../components/ClientProjects";


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
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        <ClientProjects />
     
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;