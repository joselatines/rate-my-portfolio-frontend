import styles from "../glassmorphism.module.css";

function GlassmorphismContainer({
	children,
	className,
}: {
	children: JSX.Element;
	className?: string;
}) {
	const currentClassName = `${styles.glassmorphism} ${className}`;

	return <div className={currentClassName}>{children}</div>;
}

export default GlassmorphismContainer;
