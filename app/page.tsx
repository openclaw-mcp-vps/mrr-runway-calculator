export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Startup Finance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Your MRR Runway<br />
          <span className="text-[#58a6ff]">Before You Run Out of Time</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Enter your current MRR, monthly burn rate, and growth rate. Get exact runway projections across multiple scenarios — pessimistic, base, and optimistic.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $25/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. Instant access after payment.</p>

        {/* Feature highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Multi-Scenario Modeling', desc: 'Compare pessimistic, base, and optimistic growth paths side by side.' },
            { title: 'MRR Growth Projections', desc: 'See month-by-month MRR forecasts with compounding growth rates.' },
            { title: 'Burn Rate Analysis', desc: 'Understand exactly when revenue covers burn and when you hit zero.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="w-8 h-8 rounded-md bg-[#1f2937] flex items-center justify-center mb-3">
                <span className="text-[#58a6ff] text-lg">&#10003;</span>
              </div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited runway scenarios',
              'MRR growth projections (12–36 months)',
              'Burn rate breakeven analysis',
              'Exportable reports (CSV)',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now — $25/mo
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is this tool for?',
              a: 'SaaS founders and startup CFOs who need to model cash runway based on real MRR data and growth assumptions — without building spreadsheets from scratch.',
            },
            {
              q: 'How are the projections calculated?',
              a: 'We apply your monthly growth rate to your current MRR, subtract your burn rate each month, and show you the exact month your cash hits zero across three scenarios.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes. Cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} MRR Runway Calculator. All rights reserved.
      </footer>
    </main>
  )
}
