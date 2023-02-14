import {projects} from "../data"
import PortfolioItem from "./PortfolioItem"

function Portfolio(){
	return(
		<ul className="flex flex-col gap-6">
			{projects.map((project, index) => {
				return <div key={index}>{project.title}</div>
			})}

			{/*{projects.map((project) => {
				return <PortfolioItem
				title={project.title}
				imgUrl={project.imgUrl}
				stack={project.stack}
				link={project.link}
				/>
				})
			}*/}
		</ul>

	)
};

export default Portfolio;