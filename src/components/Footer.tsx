import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { container } from "./ui";

const cols = [
	{ h: "Pages", l: ["About us", "Blog", "Careers", "Jobs", "Team"] },
	{ h: "Support", l: ["Careers", "Social media", "Support", "Team"] },
	{ h: "Contact", l: ["FAQ"] },
];

export default function Footer({ contactBand = false }: { contactBand?: boolean }) {
	return (
		<>
			<section className={`relative isolate text-white ${contactBand ? "h-[320px]" : "h-[200px]"}`}>
				<div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/images/newsletter-bg.webp)" }} />
				<div className="absolute inset-0 -z-10 bg-black/55" />
				<div className={`${container} flex h-full items-center justify-between`}>
					{contactBand ? (
						<>
							<div>
								<h2 className="font-display text-[48px] font-bold uppercase leading-none">Subscribe To Our Newsletter</h2>
								<ul className="mt-6 space-y-3 text-[15px]">
									<li className="flex items-center gap-4"><span className="grid h-[30px] w-[30px] place-items-center bg-brand"><Phone size={15} /></span>(208) 555-0112, (316) 555-0116</li>
									<li className="flex items-center gap-4"><span className="grid h-[30px] w-[30px] place-items-center bg-brand"><Mail size={15} /></span>debra.holt@example.com</li>
								</ul>
							</div>
							<div className="w-[497px]">
								<p className="text-[15px] leading-6">From exploration and production to transportation and refining, we offer a wide range of products and services. Follow our newsletter!</p>
								<label className="mt-5 block">
									<span className="text-[11px] font-bold uppercase">Your E-Mail</span>
									<input type="email" placeholder="Enter your E-Mail" className="mt-1 block h-[54px] w-full bg-white/25 px-5 text-[14px] outline-none placeholder:text-white" />
								</label>
							</div>
						</>
					) : (
						<>
							<h2 className="font-display text-[48px] font-bold uppercase leading-none">Subscribe To Our Newsletter</h2>
							<label className="block w-[497px]">
								<span className="text-[11px] font-bold uppercase">Your E-Mail</span>
								<input type="email" placeholder="Enter your E-Mail" className="mt-1 block h-[54px] w-full bg-white/25 px-5 text-[14px] outline-none placeholder:text-white" />
							</label>
						</>
					)}
				</div>
			</section>

			<footer className="bg-[#262626] pb-10 pt-16 text-white">
				<div className={container}>
					<div className="grid grid-cols-[325px_200px_200px_200px_1fr]">
						<div className="pr-10">
							<Logo />
							<p className="mt-6 text-[14px]">Education is a fundamental human right.</p>
							<ul className="mt-5 space-y-4 text-[14px]">
								<li className="flex items-center gap-4"><Mail size={14} className="text-brand" />onlineedu@examplemail.com</li>
								<li className="flex items-center gap-4"><Phone size={14} className="text-brand" />(405) 555-0128</li>
								<li className="flex items-start gap-4"><MapPin size={14} className="mt-1 shrink-0 text-brand" />87206 Keneth Plains, New Jackson, GA 91098</li>
							</ul>
						</div>
						{cols.map((c) => (
							<div key={c.h} className="border-l border-white/15 pl-8">
								<h4 className="text-[16px] text-white/60">{c.h}</h4>
								<ul className="mt-5 space-y-3.5 text-[16px]">{c.l.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
							</div>
						))}
						<div className="border-l border-white/15 pl-12">
							<h4 className="text-[16px] font-bold">Subscribe To Newsletter</h4>
							<input type="email" placeholder="Enter your E-Mail" className="mt-5 block h-[54px] w-full bg-white/15 px-5 text-[14px] outline-none placeholder:text-white/60" />
							<button className="mt-4 bg-brand px-10 py-[14px] text-[15px] font-bold">Subscribe</button>
						</div>
					</div>
					<div className="mt-24 flex items-center justify-between text-[12px] text-white/70">
						<div className="flex gap-8">{["About us", "Contact", "Privacy policy", "Sitemap", "Terms of Use"].map((x) => <a key={x} href="#">{x}</a>)}</div>
						<span>© Promo Theme 2024, All Rights Reserved</span>
					</div>
				</div>
			</footer>
		</>
	);
}
