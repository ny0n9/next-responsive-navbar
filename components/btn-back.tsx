"use client";
import { useRouter } from "next/navigation";

const GoBack = () => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="btn bg-blue-600 hover:bg-blue-800 text-white"
		>
			Kembali
		</button>
	);
};
export default GoBack;
