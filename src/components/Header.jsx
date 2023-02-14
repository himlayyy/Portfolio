import {headerItems} from "../data"

function Header(){

	return(
			<header className="flex flex-row flex-shrink justify-center items-center sticky top-0 bg-red-500">
					{headerItems.map((item, index) => {
						return <p key={index} className="text-green-500 ">{item}</p>
					})}
			</header>
	)
};

export default Header;