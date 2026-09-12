import ProjectCard from "../components/ProjectCard"
import {Link} from "react-router-dom"
import {Projects} from "../data/projects.js"
function Dashboard(){
  const activeProjects = Projects.filter(
    (Project) => Project.status === "active"
  );

  const pausedProjects = Projects.filter((Project)=>Project.status === "paused");
  return(
    <>
      <header>
      <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-4" >Dashboard</h2> 
     
      <h3 className="text-sm font-semibold text-blue-950 uppercase tracking-wider mb-4">Overview of your projects and progress</h3>

       <Link to = "/create-project" > + New Project </Link>
      </header>
      <div>
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">ACTIVE PROJECTS</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {activeProjects.map(activeProject=>(
          <ProjectCard
          key={activeProject.id}

          id={activeProject.id}

          projectName={activeProject.projectName}
          
          description = {activeProject.description}
          
          lastWorked = {activeProject.lastWorked}

          status = {activeProject.status} 

          nextAction = {activeProject.nextAction}
          />
        ))}</div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">PAUSED PROJECTS</h4>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {pausedProjects.map(pausedProject=>(
          <ProjectCard 
          key={pausedProject.id}
          id={pausedProject.id}
          projectName={pausedProject.projectName} description = {pausedProject.description}lastWorked = {pausedProject.lastWorked}
          status = {pausedProject.status} 
          nextAction = {pausedProject.nextAction}/>
        ))}</div>
      </div>
    </>
  )
}
export default Dashboard