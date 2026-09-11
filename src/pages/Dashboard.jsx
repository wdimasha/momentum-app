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
      <h2>Dashboard</h2> 
      <Link to = "/create-project" > + New Project </Link>
      <h3>Overview of your projects and progress</h3>
      </header>
      <div>
        <h4>ACTIVE PROJECTS</h4>
        {activeProjects.map(activeProject=>(
          <ProjectCard 
          key={activeProject.id}
          id={activeProject.id}
          projectName={activeProject.projectName} description = {activeProject.description}lastWorked = {activeProject.lastWorked}
          status = {activeProject.status} 
          nextAction = {activeProject.nextAction}/>
        ))}
      </div>
      <div>
        <h4>PAUSED PROJECTS</h4>
        {pausedProjects.map(pausedProject=>(
          <ProjectCard 
          key={pausedProject.id}
          id={pausedProject.id}
          projectName={pausedProject.projectName} description = {pausedProject.description}lastWorked = {pausedProject.lastWorked}
          status = {pausedProject.status} 
          nextAction = {pausedProject.nextAction}/>
        ))}
      </div>
    </>
  )
}
export default Dashboard