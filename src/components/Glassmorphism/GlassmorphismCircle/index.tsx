import styles from "../glassmorphism.module.css";

function GlassmorphismCircle({ children }: { children: JSX.Element }) {
	return (
		<div
			className={`${styles.glassmorphismCircle} p-2 rounded-full duration-normal hover:scale-110`}
		>
			{children}
		</div>
	);
}

export default GlassmorphismCircle;
