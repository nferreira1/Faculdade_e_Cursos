import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {

	switch (action.type) {
		case 'RED':
			return { ...state, color: 'red' }
		case 'BLUE':
			return { ...state, color: 'blue' }
		default:
			return state
	}

}

export const TitleColorContextProvider = ({ children }) => {

	// useReducer é como se fosse um useState, porém, serve para mudar o estado de dois ou mais
	const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })

	console.log("Title Color Context: " + state.color)

	return (
		<TitleColorContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TitleColorContext.Provider>
	)
}
