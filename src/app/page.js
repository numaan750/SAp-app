import React from 'react'
import Home from '@/components/Home/hero'
import State from '@/components/State/state'
import Features from '@/components/Features/feature'
import DeviceSection from '@/components/DeviceSection/devicesection'
import CommunicateSection from '@/components/CommunicateSection/communicatesection'
import HowItWorks from '@/components/HowItWorks/howItworks'
import InterfaceSection from '@/components/InterfaceSection/interfacesection'
import CustomerReviews from '@/components/CustomerReviews/customerreviews'
import Pricing from '@/components/Pricing/pricing'
import FAQ from '@/components/FAQ/faq'
import TeamSection from '@/components/TeamSection/teamsection'
import { DownloadSection } from '@/components/DownloadSection/downloadsection'
import { SubscribeSection } from '@/components/SubscribeSection/subscribesection'
import ContactSection from '@/components/ContactSection/contactsection'


const page = () => {
  return (
    <div>
      <Home />
      <State />
      <Features />
      <DeviceSection />
      <CommunicateSection />
      <HowItWorks />
      <InterfaceSection />
      <CustomerReviews />
      <Pricing />
      <FAQ />
      <TeamSection />
      <DownloadSection />
      <SubscribeSection />
      <ContactSection />
    </div>
  )
}

export default page