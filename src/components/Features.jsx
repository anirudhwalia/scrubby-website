import {
  ShieldCheck, Sparkles, Building2, Mail, CheckCircle2,
  User, Briefcase, MapPin, GraduationCap, Globe, Users,
  TrendingUp, ArrowRight, Zap, Lock, BarChart3
} from 'lucide-react'

/* ─── Email Validation Section ─── */

const competitorData = [
  { name: 'ZeroBounce', catchAll: 'Unknown', risky: 'Unknown' },
  { name: 'NeverBounce', catchAll: 'Unknown', risky: 'Unknown' },
  { name: 'Hunter', catchAll: 'Idle', risky: 'Idle' },
  { name: 'Scrubby', catchAll: 'Verified', risky: 'Verified', highlighted: true },
]

function EmailValidationSection() {
  return (
    <div id="validation" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="reveal">
            <div className="tag mb-5">
              <ShieldCheck size={12} />
              Email Validation
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-navy-800 mb-5">
              Validate the emails that{' '}
              <span className="gradient-text">every competitor can't</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              40-60% of contact lists contain catch-all emails that other tools mark as
              "unknown." Scrubby verifies inbox deliverability within catch-all domains,
              recovering 20-30% more usable contacts.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Verify inbox deliverability within catch-all domains',
                'Confident classification of risky addresses',
                'Works with Google Workspace, Office 365 & major SEGs',
                'Recover 20-30% more usable contacts',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm font-display font-500">{item}</span>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-primary">
              Start Validating
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Comparison Demo */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-sm font-display font-600 text-navy-800">Catch-All Comparison</span>
                <span className="tag text-[10px] py-0.5">10,000 emails</span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left px-6 py-3 text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">Provider</th>
                      <th className="text-left px-4 py-3 text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">Catch-All</th>
                      <th className="text-left px-4 py-3 text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">Risky</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorData.map((row) => (
                      <tr
                        key={row.name}
                        className={`border-b border-slate-50 transition-colors ${
                          row.highlighted ? 'bg-accent-green/[0.04]' : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="px-6 py-3.5">
                          <span className={`text-sm font-display font-600 ${row.highlighted ? 'text-accent-green-dark' : 'text-slate-600'}`}>
                            {row.name}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`text-sm font-display ${
                            row.highlighted ? 'text-accent-green-dark font-600' : 'text-slate-400'
                          }`}>
                            {row.catchAll} {row.highlighted && '✓'}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`text-sm font-display ${
                            row.highlighted ? 'text-accent-green-dark font-600' : 'text-slate-400'
                          }`}>
                            {row.risky} {row.highlighted && '✓'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Recovery Stats */}
              <div className="px-6 py-4 bg-accent-green/[0.03] border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-display">Emails recovered by Scrubby</span>
                  <span className="text-lg font-display font-700 text-accent-green-dark">+2,250</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent-green to-accent-green-light w-[72%] transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Profile Enrichment Section ─── */

const profileData = {
  name: 'Sarah Chen',
  title: 'VP of Engineering',
  company: 'TechCorp Inc.',
  location: 'San Francisco, CA',
  email: 'sarah.chen@techcorp.com',
  linkedin: 'linkedin.com/in/sarachen',
  experience: [
    { role: 'VP of Engineering', company: 'TechCorp Inc.', period: '2022 – Present' },
    { role: 'Senior Director', company: 'DataFlow', period: '2019 – 2022' },
    { role: 'Engineering Manager', company: 'CloudBase', period: '2016 – 2019' },
  ],
  education: 'M.S. Computer Science, Stanford University',
  skills: ['Cloud Architecture', 'Team Leadership', 'DevOps', 'Python', 'AI/ML'],
}

function ProfileEnrichmentSection() {
  return (
    <div id="enrichment" className="relative py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Demo */}
          <div className="reveal order-2 lg:order-1" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center">
                    <User size={18} className="text-accent-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-display font-600 text-navy-800">{profileData.name}</p>
                    <p className="text-xs text-slate-500">{profileData.title}</p>
                  </div>
                </div>
                <span className="tag tag-amber text-[10px] py-0.5">
                  <Sparkles size={10} />
                  Enriched
                </span>
              </div>

              {/* Profile Details */}
              <div className="px-6 py-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{profileData.company}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600 font-mono">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={14} className="text-slate-400" />
                  <span className="text-sm text-accent-green-dark">{profileData.linkedin}</span>
                </div>
              </div>

              {/* Experience */}
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider mb-3">Experience</p>
                <div className="space-y-3">
                  {profileData.experience.map((exp) => (
                    <div key={exp.role} className="flex items-start gap-3">
                      <Briefcase size={13} className="text-slate-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-700 font-display font-500">{exp.role}</p>
                        <p className="text-xs text-slate-400">{exp.company} · {exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider mb-3">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-display font-500 bg-slate-50 text-slate-600 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="px-6 py-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <GraduationCap size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{profileData.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal order-1 lg:order-2">
            <div className="tag tag-amber mb-5">
              <Sparkles size={12} />
              Profile Enrichment
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-navy-800 mb-5">
              Profile data that powers{' '}
              <span className="gradient-text-amber">personalization</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              Turn email addresses into rich contact profiles with 50+ data points.
              Get work history, skills, education, social links, and more — all in
              real-time through our API or bulk upload.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: 'Full Name & Title' },
                { icon: Briefcase, label: 'Work History' },
                { icon: MapPin, label: 'Location Data' },
                { icon: GraduationCap, label: 'Education' },
                { icon: Globe, label: 'Social Profiles' },
                { icon: Zap, label: 'Real-time Results' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
                  <Icon size={16} className="text-accent-amber flex-shrink-0" />
                  <span className="text-sm text-slate-600 font-display font-500">{label}</span>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-primary" style={{ background: 'linear-gradient(135deg, #F5A623 0%, #E09000 100%)' }}>
              Start Enriching
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Company Enrichment Section ─── */

const companyData = {
  name: 'TechCorp Inc.',
  domain: 'techcorp.com',
  industry: 'Software Development',
  type: 'Public Company',
  size: '5,001-10,000 employees',
  hq: 'San Francisco, CA',
  locations: 32,
  revenue: '$800M - $1B',
  founded: '2010',
  specialties: ['Cloud Computing', 'AI/ML', 'Enterprise SaaS', 'Data Analytics'],
  tags: ['B2B', 'SaaS', 'Enterprise'],
  techStack: ['React', 'Python', 'AWS', 'Kubernetes'],
}

function CompanyEnrichmentSection() {
  return (
    <div id="company" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="reveal">
            <div className="tag mb-5">
              <Building2 size={12} />
              Company Enrichment
            </div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-navy-800 mb-5">
              Company data powering{' '}
              <span className="gradient-text">precision targeting</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              Convert company domains into comprehensive business profiles.
              Get industry classification, employee counts, locations, revenue data,
              tech stack, and more for precise account-based targeting.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: BarChart3, text: 'Industry classification & revenue data' },
                { icon: Users, text: 'Employee counts & department breakdowns' },
                { icon: MapPin, text: 'HQ location & global office presence' },
                { icon: TrendingUp, text: 'Growth signals & funding data' },
                { icon: Lock, text: 'GDPR compliant data sourcing' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={18} className="text-accent-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm font-display font-500">{text}</span>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-primary">
              Enrich Companies
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Demo */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-sm font-display font-700 text-accent-green-dark">
                    T
                  </div>
                  <div>
                    <p className="text-sm font-display font-600 text-navy-800">{companyData.name}</p>
                    <p className="text-xs text-slate-400 font-mono">{companyData.domain}</p>
                  </div>
                </div>
                <span className="tag text-[10px] py-0.5">
                  <Sparkles size={10} />
                  Enriched
                </span>
              </div>

              {/* Company Details Grid */}
              <div className="px-6 py-4 grid grid-cols-2 gap-4">
                {[
                  { label: 'Industry', value: companyData.industry },
                  { label: 'Type', value: companyData.type },
                  { label: 'Size', value: companyData.size },
                  { label: 'Revenue', value: companyData.revenue },
                  { label: 'Headquarters', value: companyData.hq },
                  { label: 'Locations', value: `${companyData.locations} offices` },
                  { label: 'Founded', value: companyData.founded },
                  { label: 'Tags', value: companyData.tags.join(', ') },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-slate-700 mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              {/* Specialties */}
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider mb-3">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {companyData.specialties.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md text-xs font-display font-500 bg-accent-green/[0.06] text-accent-green-dark border border-accent-green/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-[11px] font-display font-600 text-slate-400 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {companyData.techStack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-display font-500 bg-slate-50 text-slate-600 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Features Component ─── */

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 text-center reveal">
        <div className="tag mx-auto mb-5">
          <Zap size={12} />
          Powerful Features
        </div>
        <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-navy-800 mb-4">
          One platform for validation{' '}
          <span className="gradient-text">& enrichment</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          The only tool that goes beyond standard SMTP validation, combining catch-all
          email verification with comprehensive data enrichment.
        </p>
      </div>

      <EmailValidationSection />
      <ProfileEnrichmentSection />
      <CompanyEnrichmentSection />
    </section>
  )
}
