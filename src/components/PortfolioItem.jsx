function  PortfolioItem({project}){
	return(
		<div>
			<p>{project.title}</p>
			<a href={project.link} />
			
			<ul className="flex ">{project.stack.map((item) => (
				<li>{item}</li>
			))}
			</ul>
			<img src={project.imgUrl} alt={`${project.title} screenshot`}/>
		</div>
	)
}

export default PortfolioItem;