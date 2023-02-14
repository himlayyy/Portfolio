function Hero(){

	const heroText = ["Alesandra","Mae","Lelis"]
	return(
		<>
{/*			<div className="sm h-screen border-3 border-yellow-600">

*/}				
		<div className="border-white border-8 justify-start flex flex-col items-center ">
			<h1 className="text-red-500  font-trocchi">Software Engineer bringing ideas to life with code</h1>
				{heroText.map((text, index) => {
					return <div className="text-gray-300  sm:bg-yellow-400 md:bg-red-500 w-500px" key={index}>
					{text}
				</div>
				})}

				
			</div>
		</>
	)
}

export default Hero;