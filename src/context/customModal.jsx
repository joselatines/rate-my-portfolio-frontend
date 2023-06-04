import { createContext, useState } from "react";

export const CustomModalContext = createContext();

export function CustomModalProvider({ children }) {
	const [open, setOpen] = useState(false);

	return (
		<CustomModalContext.Provider value={{ open, setOpen }}>
			{children}
		</CustomModalContext.Provider>
	);
}
