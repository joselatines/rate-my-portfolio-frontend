import { AiFillCloseCircle } from "react-icons/ai";

type IProps = {
	children: JSX.Element;
	message: string;
	icon?: JSX.Element;
	open: boolean;
	setOpen: (state: boolean) => any;
};

function CustomModal({ children, message, icon, open, setOpen }: IProps) {
	return (
		<>
			<button className="btn" onClick={() => setOpen(true)}>
				{message}
				{icon}
			</button>
			{open && (
				<div
					className="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-10">
							<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
								<div className="m-5">
									<button className="btn" onClick={() => setOpen(false)}>
										Close <AiFillCloseCircle size={25} />
									</button>
								</div>
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									{children}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default CustomModal;
