import { useParams,Link } from "react-router-dom"
import {Projects} from '../data/projects.js'
function ProjectDetails(){
  const {id} = useParams();
  const project = Projects.find((project)=> project.id === Number(id));
  const isProject = project;
  return(
    <>
     <header>
      <Link to = "/">← Projects
</Link>
     {isProject ? (
       <>
      <h1>{project.projectName}</h1>
      <h3>{project.status}</h3>
      <p>{project.description}</p>
      <p>Last worked:{project.lastWorked}</p>
      <p>WHERE YOU LEFT OFF: {project.whereILeftOff}</p>
      <p>LAST COMPLETED: {project.lastCompleted}</p>
       </>
     ):(
      <h1>Project not found</h1>
     )}     
     </header>
     
    </>
  )
}
export default ProjectDetails