import { parseImg } from "@/utils/parse-img";
import NextImage from "next/image";

function PreviewImage({ src }: { src: string }) {
	return <NextImage width={200} height={200} alt="d" src={parseImg(src)} />;
}

export default PreviewImage;
