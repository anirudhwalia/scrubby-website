const logos = [
  'Apollo', 'Clay', 'Instantly', 'SmartLead', 'Reply.io', 'Pipedream',
  'Lindy', 'ZoomInfo', 'Cognism', 'LeadIQ', 'HubSpot', 'Cargo',
]

const clients = [
  'Revolut', 'Oracle', 'IBM', 'Samsara', 'Gorgias', 'Sisense',
  'Leadbird', 'LinkedHacker', 'BetterContact', 'Pitchlane', 'Revsure', 'Growth Partners',
]

function LogoItem({ name }) {
  return (
    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-100 whitespace-nowrap select-none">
      <div className="w-5 h-5 rounded bg-accent-green/10 flex items-center justify-center">
        <span className="text-[9px] font-display font-700 text-accent-green-dark">
          {name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-display font-500 text-slate-500">{name}</span>
    </div>
  )
}

export default function TrustBanner() {
  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="section-divider mb-16" />

      <div className="text-center mb-10">
        <p className="text-sm font-display font-500 text-slate-400 uppercase tracking-widest">
          Trusted by teams worldwide
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-track animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <LogoItem key={`a-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="marquee-track animate-marquee-reverse">
          {[...clients, ...clients].map((name, i) => (
            <LogoItem key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
