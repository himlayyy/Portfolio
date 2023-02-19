function SectionHeader({classes, section}){
	return(
		<h3 className={`font-readex text-2xl py-2 ${classes}`}>{section}</h3>
	)
};

export default SectionHeader;