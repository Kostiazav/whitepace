import { GetMore } from '@/components/get-more';
import { AboutSection } from '@/components/section-about';
import { SectionComents } from '@/components/section-coments';
import { SectionCommunication } from '@/components/section-comunication';
import { SectionCustomize } from '@/components/section-customize';
import { SectionPlan } from '@/components/section-plan';
import { SectionResult } from '@/components/section-result';
import { SectionSkills } from '@/components/section-skill';
import { SectionTogether } from '@/components/section-together';

export default function Home() {
  return (
    <>
      <GetMore />
      <AboutSection />
      <SectionTogether />
      <SectionCustomize />
      <SectionPlan />
      <SectionResult />
      <SectionCommunication />
      <SectionSkills />
      <SectionComents />
    </>
  );
}
