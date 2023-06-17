import { useContext } from "react";
import { UserContext } from "@/context/user";

export const useContextUser = () => {
	const context = useContext(UserContext);

	if (!context)
		throw new Error("useContextUser must be within UserContextProvider");

	return context;
};
