import { CustomModalContext } from "@/context/customModal";
import { useContext } from "react";

export const useCustomModal = () => {
	const context = useContext(CustomModalContext);
	
	if (context === undefined) {
		throw new Error("useCustomModal must be used within a CustomModalContext");
	}

	return context;
};
