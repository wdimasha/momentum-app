import { useParams,Link } from "react-router-dom"
import {Projects} from '../data/projects.js'
function ProjectDetails(){
  const {id} = useParams();
  const project = Projects.find((project)=> project.id === Number(id));
  return(
    <>
     <h3>{project.projectName}</h3>
    <p>{project.description}</p>
    <h5>Last worked</h5>
    <p>{project.lastWorked}</p>
    <h5>Status:</h5>
    
    <p>{project.status}</p>
    <h5>Next action:</h5>
    <p>{project.nextAction}</p>
    </>
  )
}
export default ProjectDetails