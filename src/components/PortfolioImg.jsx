function PortfolioImg({classes, url, index, alt, callback}){
	return(
			<img className={classes} src={url} alt={alt} onClick={() => callback(index)}/>
	)
};

export default PortfolioImg;