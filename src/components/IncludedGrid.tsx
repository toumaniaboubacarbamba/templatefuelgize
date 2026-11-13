import { Factory, Container, Truck, Building2 } from "lucide-react";
import { Eyebrow, Title, container } from "./ui";

const included = [
  { t: "Exploration & Development", Icon: Factory },
  { t: "Transportation & Distribution", Icon: Container },
  { t: "Research & Innovation", Icon: Truck },
  { t: "Marketing & Sales", Icon: Building2 },
];

export default function IncludedGrid() {
  return (
    <section className="py-24">
      <div className={container}>
        <div className="text-center">
          <Eyebrow center>What We Do</Eyebrow>
          <Title className="mt-5 !text-[56px]">What Is Included In Our Work</Title>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-[30px]">
          {included.map(({ t, Icon }) => (
            <div key={t} className="bg-mist px-10 py-8 text-center">
              <Icon size={52} strokeWidth={1.1} className="mx-auto" />
              <h3 className="mt-5 text-[20px] font-bold">{t}</h3>
              <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-5">
                An interior designer will help the client choose a color scheme that suits their taste and complements the space. This involves creating a layout of the room.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}