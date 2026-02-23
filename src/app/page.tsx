import LandingFooter from '@/components/landing/LandingFooter'
import ArsenalSection from '@/components/landing/ArsenalSection'
import FaqComplianceSection from '@/components/landing/FaqComplianceSection'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorks from '@/components/landing/HowItWorks'
import LandingNavbar from '@/components/landing/LandingNavbar'
import PricingSection from '@/components/landing/PricingSection'
import SocialProof from '@/components/landing/SocialProof'
import UseCasesSection from '@/components/landing/UseCasesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="text-slate-900">
        <LandingNavbar />
        <main>
          <HeroSection />
          <SocialProof />
          <HowItWorks />
          <ArsenalSection />
          <UseCasesSection />
          <PricingSection />
          <FaqComplianceSection />
        </main>
        <LandingFooter />
      </div>
    </div>
  )
}
