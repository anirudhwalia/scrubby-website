import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

// Code-split all secondary pages for performance
const PricingPage = lazy(() => import('./pages/PricingPage'))
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage'))
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const AgenciesPage = lazy(() => import('./pages/AgenciesPage'))
const BulkCleaningPage = lazy(() => import('./pages/BulkCleaningPage'))
const RiskyEmailFinderPage = lazy(() => import('./pages/RiskyEmailFinderPage'))
const BlacklistMonitorPage = lazy(() => import('./pages/BlacklistMonitorPage'))
const EmailTestingPage = lazy(() => import('./pages/EmailTestingPage'))
const AlternativeNeverBouncePage = lazy(() => import('./pages/AlternativeNeverBouncePage'))
const AlternativeZeroBouncePage = lazy(() => import('./pages/AlternativeZeroBouncePage'))
const AlternativeApolloPage = lazy(() => import('./pages/AlternativeApolloPage'))
const AlternativeCognismPage = lazy(() => import('./pages/AlternativeCognismPage'))
const AlternativeZoomInfoPage = lazy(() => import('./pages/AlternativeZoomInfoPage'))
const AlternativeBriteVerifyPage = lazy(() => import('./pages/AlternativeBriteVerifyPage'))
const AlternativeMillionVerifierPage = lazy(() => import('./pages/AlternativeMillionVerifierPage'))
const AlternativeSmartLeadsPage = lazy(() => import('./pages/AlternativeSmartLeadsPage'))
const AlternativeInstantlyPage = lazy(() => import('./pages/AlternativeInstantlyPage'))
const AlternativeClayPage = lazy(() => import('./pages/AlternativeClayPage'))
const AlternativeMailchimpPage = lazy(() => import('./pages/AlternativeMailchimpPage'))
const AlternativePipedrivePage = lazy(() => import('./pages/AlternativePipedrivePage'))
const AlternativeSalesforcePage = lazy(() => import('./pages/AlternativeSalesforcePage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const GDPRPage = lazy(() => import('./pages/GDPRPage'))
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'))
const CodeOfConductPage = lazy(() => import('./pages/CodeOfConductPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const BookDemoPage = lazy(() => import('./pages/BookDemoPage'))
const SubscriptionPage = lazy(() => import('./pages/SubscriptionPage'))
const PayGoPage = lazy(() => import('./pages/PayGoPage'))
const UnlimitedPage = lazy(() => import('./pages/UnlimitedPage'))
const BenefitsPage = lazy(() => import('./pages/BenefitsPage'))
const RiskyEmailValidationPage = lazy(() => import('./pages/RiskyEmailValidationPage'))
const EmailVerificationToolsPage = lazy(() => import('./pages/EmailVerificationToolsPage'))
const FoundersPage = lazy(() => import('./pages/FoundersPage'))
const MilestonesPage = lazy(() => import('./pages/MilestonesPage'))
const G2ReviewsPage = lazy(() => import('./pages/G2ReviewsPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const BlogListPage = lazy(() => import('./pages/BlogListPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const BlogCategoryPage = lazy(() => import('./pages/BlogCategoryPage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function RevealObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pricing/subscription" element={<SubscriptionPage />} />
            <Route path="/pricing/paygo" element={<PayGoPage />} />
            <Route path="/pricing/unlimited" element={<UnlimitedPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/founders" element={<FoundersPage />} />
            <Route path="/about/milestones" element={<MilestonesPage />} />
            <Route path="/about/g2-reviews" element={<G2ReviewsPage />} />
            <Route path="/about/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/agencies" element={<AgenciesPage />} />
            <Route path="/bulk-cleaning" element={<BulkCleaningPage />} />
            <Route path="/risky-email-finder" element={<RiskyEmailFinderPage />} />
            <Route path="/risky-email-validation" element={<RiskyEmailValidationPage />} />
            <Route path="/email-verification-tools" element={<EmailVerificationToolsPage />} />
            <Route path="/blacklist-monitor" element={<BlacklistMonitorPage />} />
            <Route path="/email-testing" element={<EmailTestingPage />} />
            <Route path="/alternatives/neverbounce" element={<AlternativeNeverBouncePage />} />
            <Route path="/alternatives/zerobounce" element={<AlternativeZeroBouncePage />} />
            <Route path="/alternatives/apollo" element={<AlternativeApolloPage />} />
            <Route path="/alternatives/cognism" element={<AlternativeCognismPage />} />
            <Route path="/alternatives/zoominfo" element={<AlternativeZoomInfoPage />} />
            <Route path="/alternatives/briteverify" element={<AlternativeBriteVerifyPage />} />
            <Route path="/alternatives/millionverifier" element={<AlternativeMillionVerifierPage />} />
            <Route path="/alternatives/smartleads" element={<AlternativeSmartLeadsPage />} />
            <Route path="/alternatives/instantly" element={<AlternativeInstantlyPage />} />
            <Route path="/alternatives/clay" element={<AlternativeClayPage />} />
            <Route path="/alternatives/mailchimp" element={<AlternativeMailchimpPage />} />
            <Route path="/alternatives/pipedrive" element={<AlternativePipedrivePage />} />
            <Route path="/alternatives/salesforce" element={<AlternativeSalesforcePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/category/:slug" element={<BlogCategoryPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
