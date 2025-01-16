"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Work {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
}

interface AutoSliderProps {
	works: Work[];
}

export function AutoSlider({ works }: AutoSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	// Create an array that repeats the works to create the infinite effect
	const extendedWorks = [...works, ...works, ...works];

	const handlePrev = () => {
		setCurrentIndex((prev) => {
			const newIndex = prev - 1;
			return newIndex < 0 ? works.length - 1 : newIndex;
		});
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % works.length);
	};

	useEffect(() => {
		const timer = setInterval(handleNext, 5000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (sliderRef.current && containerRef.current) {
			const slideWidth = containerRef.current.offsetWidth / 3;
			const scrollPosition = currentIndex * slideWidth;
			sliderRef.current.style.transform = `translateX(-${scrollPosition}px)`;
		}
	}, [currentIndex]);

	const handleMouseDown = (e: React.MouseEvent) => {
		isDragging.current = true;
		startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
		scrollLeft.current = sliderRef.current?.scrollLeft || 0;
	};

	const handleMouseUp = () => {
		isDragging.current = false;
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging.current) return;
		e.preventDefault();
		const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
		const walk = (x - startX.current) * 2;

		if (sliderRef.current) {
			const maxScroll =
				sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
			const newScroll = scrollLeft.current - walk;
			sliderRef.current.scrollLeft = Math.max(
				0,
				Math.min(newScroll, maxScroll)
			);
		}
	};

	return (
		<div className='relative' ref={containerRef}>
			<div className='overflow-hidden'>
				<div
					ref={sliderRef}
					className='flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing'
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					{extendedWorks.map((work, index) => (
						<div
							key={`${work.id}-${index}`}
							className='w-full sm:w-1/3 flex-shrink-0 px-2'
							style={{ width: "calc(100% / 3)" }}
						>
							<Card className='h-full'>
								<CardContent className='p-4'>
									<div className='aspect-video relative mb-4'>
										<Image
											src={work.imageUrl || "/placeholder.svg"}
											alt={work.title}
											fill
											className='object-cover rounded-md'
										/>
									</div>
									<h3 className='text-lg font-semibold mb-2'>{work.title}</h3>
									<p className='text-sm text-gray-600 mb-4'>
										{work.description}
									</p>
									<Button asChild>
										<Link href={`/works/${work.id}`}>Ver más</Link>
									</Button>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>

			<div className='flex justify-center gap-4 mt-6'>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full'
					onClick={handlePrev}
				>
					<ChevronLeft className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full'
					onClick={handleNext}
				>
					<ChevronRight className='h-4 w-4' />
				</Button>
			</div>
		</div>
	);
}
