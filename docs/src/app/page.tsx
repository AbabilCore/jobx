import {
  CommandsSection,
  ConfigurationSection,
  FeaturesSection,
  FolderStructureSection,
  HeroSection,
  InstallationSection,
} from '@/components';
import WhyJobXSection from '@/components/home/why-jobx-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJobXSection />
      <FeaturesSection />
      <InstallationSection />
      <FolderStructureSection />
      <CommandsSection />
      <ConfigurationSection />
    </main>
  );
}
