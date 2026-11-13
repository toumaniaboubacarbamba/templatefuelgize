import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import NewsletterBand from "./NewsletterBand";
import { container } from "./ui";

const cols = [
	{ h: "Pages", l: ["About us", "Blog", "Careers", "Jobs", "Team"] },
	{ h: "Support", l: ["Careers", "Social media", "Support", "Team"] },
	{ h: "Contact", l: ["FAQ"] },
];

export default function Footer({ contactBand = false, hideBand = false }: { contactBand?: boolean; hideBand?: boolean }) {
	return (
		<>
			{!hideBand && <NewsletterBand contactBand={contactBand} />}

			<footer className="bg-[#262626] pb-10 pt-16 text-white">
				<div className={container}>
					<div className="grid grid-cols-[325px_200px_200px_200px_1fr]">
						<div className="pr-10">
							<Logo />
							<p className="mt-6 text-[14px]">Education is a fundamental human right.</p>
							<ul className="mt-5 space-y-4 text-[14px]">
								<li className="flex items-center gap-4"><Mail size={14} className="text-brand" />kakashi@copie.com</li>
								<li className="flex items-center gap-4"><Phone size={14} className="text-brand" />(225) 838-21405</li>
								<li className="flex items-start gap-4"><MapPin size={14} className="mt-1 shrink-0 text-brand" />Adjamé Gare Nord 83</li>
							</ul>
						</div>
						{cols.map((c) => (
							<div key={c.h} className="border-white/15 lg:border-l lg:pl-8">
								<h4 className="text-[16px] text-white/60">{c.h}</h4>
								<ul className="mt-5 space-y-3.5 text-[16px]">{c.l.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
							</div>
						))}
						<div className="border-white/15 lg:border-l lg:pl-12">
							<h4 className="text-[16px] font-bold">Subscribe To Newsletter</h4>
							<input type="email" placeholder="Enter your E-Mail" className="mt-5 block h-[54px] w-full bg-white/15 px-5 text-[14px] outline-none placeholder:text-white/60" />
							<button className="mt-4 bg-brand px-10 py-[14px] text-[15px] font-bold">Subscribe</button>
						</div>
					</div>
					<div className="mt-24 flex items-center justify-between text-[12px] text-white/70">
						<div className="flex gap-8">{["About us", "Contact", "Privacy policy", "Sitemap", "Terms of Use"].map((x) => <a key={x} href="#">{x}</a>)}</div>
						<span>© Reproduction of the template for educational purposes Promo Theme 2024, All Rights Reserved</span>
					</div>
				</div>
			</footer>
		</>
	);
}
