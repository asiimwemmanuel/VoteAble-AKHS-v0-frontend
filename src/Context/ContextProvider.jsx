import { useState } from 'react';
import Context from './Context.jsx';

function ContextProvider(props) {
	const [isDrop, setIsDrop] = useState(false);

	function setIsDropVal(val) {
		setIsDrop(val);
	}

	return (
		<Context.Provider
			value={{
				isDrop,
				setIsDropVal,
				currentYear: new Date().getFullYear(),
			}}
		>
			{props.children}
		</Context.Provider>
	);
}

export default ContextProvider;
