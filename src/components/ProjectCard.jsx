import {Link} from 'react-router-dom'

function ProjectCard({id,projectName}){
  
  return(
    <>
    <Link to = {`/projects/${id}`}>
    <div>
    <h3>{projectName}</h3>
    </div>
    </Link>
    </>
  )
}

export default ProjectCard