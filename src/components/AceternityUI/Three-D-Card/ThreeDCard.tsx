import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardProps {
    title: string;
    description: string;
    stack: string;
    image: string;
    link: string;
}

export function ThreeDCard({ title, description, stack, image, link }: ThreeDCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group bg-transparent border-white/[0.2] w-full h-[400px] rounded-xl p-4 border transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20">
                
                {/* Title */}
                <CardItem translateZ={50} className="text-lg font-bold text-white mb-2">
                    {title}
                </CardItem>
                
                {/* Description */}
                <CardItem as="p" translateZ={60} className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    {description}
                </CardItem>
                
                {/* Image */}
                <CardItem translateZ={100} className="w-full h-40 mb-4">
                    <img
                        src={image}
                        alt={title}  
                        className="w-full h-full rounded-xl group-hover:shadow-xl object-cover"
                    />
                </CardItem>
                
                {/* Stack */}
                <CardItem as="p" translateZ={60} className="text-neutral-300 text-xs mb-4">
                    <span className="font-semibold">Stack:</span> {stack}
                </CardItem>
                
                {/* Link */}
                <div className="absolute bottom-4 left-4 right-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white/10 block text-center"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        View Project →
                    </a>
                </div>
            </CardBody>
        </CardContainer>
    );
}