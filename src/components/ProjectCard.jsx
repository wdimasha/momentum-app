import {Link} from 'react-router-dom'

function ProjectCard({id,projectName,description,lastWorked,status,nextAction}){
  
  return(
    <>
    <Link to = {`/projects/${id}`}>
    <div   className = "h-full bg-blue-50 rounded-xl shadow-sm ring-1 ring-blue-200 p-5">
    <h3>{projectName}</h3>
    <h4>{description}</h4>
    <h5>Last worked:</h5>
    <h4>{lastWorked}</h4>
    <h5>Status:</h5>
    <h4>{status}</h4>
    <h5>Next action:</h5>
    <h4>{nextAction}</h4>
    </div>
    </Link>
    </>
  )
}

export default ProjectCard