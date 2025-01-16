// import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Markdown from 'react-markdown'
import { getInfoBoxes } from "@/lib/get-info-box";
import * as Icons from "lucide-react";
import { IconProps } from "@/lib/types";

type IconName = keyof typeof Icons;

const isValidIcon = (iconName: string): iconName is keyof typeof Icons => {
	return iconName in Icons;
};
const IconRenderer = ({ icon }: { icon: IconProps }) => {
	const { name, size, color } = icon;
	if (!isValidIcon(name)) {
		console.warn(`El ícono "${name}" no es válido.`);
		return null;
	}
	const LucideIcon = Icons[name as IconName] as any;
	return LucideIcon ? (
		<LucideIcon size={size || "26px"} color={color || "#373737"} />
	) : null;
};

export const InfoSection = async () => {
	const infoBoxes = await getInfoBoxes();
	console.log(infoBoxes);
	return (
		<div className='py-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Info boxes grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					{/* Delivery Box */}
					{infoBoxes.map((infoBox) => {
						return (
							<div
								className='text-center p-6 bg-white rounded-lg shadow-sm'
								key={infoBox.id}
							>
								<div className='flex justify-center mb-4'>
									{/* <Truck className='h-8 w-8 text-primary' /> */}
									<IconRenderer icon={infoBox.icon} />
								</div>
								<h3 className='text-lg font-bold mb-3'>{infoBox.title}</h3>
								<div className='text-gray-600'>
									{/* <BlocksRenderer content={infoBox.description} /> */}
									<Markdown>{infoBox.description}</Markdown>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
