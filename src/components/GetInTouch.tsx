import { MapPin, Phone, Mail } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

const rows = [
	{ Icon: MapPin, t: "6391 Elgin St. Celina, Delaware 10299" },
	{ Icon: Phone, t: "(208) 555-0112, (316) 555-0116" },
	{ Icon: Mail, t: "debra.holt@example.com" },
];

export default function GetInTouch({ plain = false }: { plain?: boolean }) {
	return (
		<section className={`${plain ? "" : "bg-[#f3f3f5]"} py-24`}>
			<div className={`${container} grid grid-cols-[400px_1fr] items-center gap-20`}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="/images/contact.webp" alt="" className="h-[420px] w-[400px] object-cover" />
				<div>
					<Eyebrow>Get In Touch</Eyebrow>
					<Title className="mt-5 max-w-[700px] !text-[56px]">We Are Your Reliable Partners For The Best Energy Solutions</Title>
					<p className="mt-8 max-w-[680px] text-[16px] leading-7">
						From exploration and production to transportation and refining, we offer a wide range of products and services that meet the unique needs of the oil &amp; gas industry.
					</p>
					<ul className="mt-8 space-y-4">
						{rows.map(({ Icon, t }) => (
							<li key={t} className="flex items-center gap-5 text-[16px]">
								<span className="grid h-[30px] w-[30px] place-items-center bg-brand text-white">
									<Icon size={15} />
								</span>
								{t}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
