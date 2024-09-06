import About from "@/components/about";
import SmallCard from "@/components/cards/card1";
import MediumCard from "@/components/cards/card2";
import CardWithImage from "@/components/cards/card3";
import Section from "@/components/customSection";
import ProfileHeading from "@/components/profileHeading";
import {
  ExpericeData,
  MyProjects,
  RecognitionData,
  whatIDoData,
} from "@/data/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-20 min-h-screen bg-offwhite">
      <div className="flex w-full max-w-5xl gap-12">
        <div className="w-[50%]">
          <ProfileHeading />
        </div>
        <div className="flex flex-col items-center w-[50%]">
          <About />
          {/* Working Experience */}
          <Section>
            <h2 className="text-2xl font-semibold pb-4">Working Experience</h2>
            {ExpericeData.map((data) => (
              <SmallCard key={data.id} data={data} />
            ))}
          </Section>

          {/* Awards & Recognition */}
          <Section>
            <h2 className="text-2xl font-semibold pb-4">
              Awards & Recognition
            </h2>
            {RecognitionData.map((data) => (
              <SmallCard key={data.id} data={data} />
            ))}
          </Section>

          {/* What i do */}
          <Section>
            <h2 className="text-2xl font-semibold pb-4">What i do</h2>
            {whatIDoData.map((data) => (
              <MediumCard key={data.id} data={data} />
            ))}
          </Section>

          {/* Projects */}
          <Section>
            <h2 className="text-2xl font-semibold pb-4">Projects</h2>
            {MyProjects.map((data) => (
              <CardWithImage key={data.id} data={data} />
            ))}
          </Section>
        </div>
      </div>
    </main>
  );
}
