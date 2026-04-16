/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Map as MapIcon, 
  Zap, 
  Wallet, 
  Users, 
  Landmark, 
  Scale, 
  Building2,
  FileX,
  AlertOctagon,
  Siren,
  Baby
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-wide flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            NYAYA SETU
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-400">
            <a href="#vision" className="hover:text-white transition-colors">THE VISION</a>
            <a href="#crisis" className="hover:text-white transition-colors">THE CRISIS</a>
            <a href="#framework" className="hover:text-white transition-colors">ARCHITECTURE</a>
            <a href="#impact" className="hover:text-white transition-colors">IMPACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-brand-blue/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="text-brand-accent font-semibold tracking-[0.2em] text-sm md:text-base mb-6 uppercase">
              The Infrastructure of Access
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.05]">
              Dismantling Systemic Invisibilization
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 md:leading-relaxed max-w-3xl mb-12">
              For India's marginalized workers through an integrated, anonymous protection architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#framework" className="rounded-full bg-brand-blue text-white px-8 py-4 font-semibold hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2">
                Explore The Framework <Shield className="w-4 h-4" />
              </a>
              <a href="#crisis" className="rounded-full bg-white/5 border border-white/10 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                Understand the Crisis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-display font-medium text-slate-200 leading-tight">
            "We cannot change societal prejudice overnight. <br className="hidden md:block"/>
            <span className="text-brand-accent">But we can build technological infrastructure that bypasses it immediately.</span>"
          </motion.h2>
        </div>
      </section>

      {/* Vision / Mandate */}
      <section id="vision" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h3 className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-4">01: The Core Vision</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Our Absolute Mandate</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-medium">
              "To ensure that no individual is excluded from essential human rights systems due to social stigma, lack of identity documentation, or occupational informality."
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              NyayaSetu is not another localized NGO providing temporary relief. We are building scalable, secure technological infrastructure that connects marginalized populations to the rights guaranteed to them under Article 21 of the Indian Constitution (Right to Life and Personal Liberty).
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1533379203975-217823521d5a?auto=format&fit=crop&q=80" 
                alt="Marginalized women" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Crisis */}
      <section id="crisis" className="py-32 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16">
            <h3 className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-4">02: The Crisis of Invisibilization</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold max-w-2xl">The invisible millions trapped in a societal paradox.</h2>
            <p className="mt-6 text-xl text-slate-400 max-w-3xl">
              Highly visible to exploiters, law enforcement, and abusers, yet completely invisible to the healthcare, legal, and financial systems designed to protect citizens.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Cards */}
            <motion.div variants={staggerItem} className="bg-brand-dark border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                <FileX className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">The Identity Paradox</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Identity documentation is weaponized. Providing a real name or occupation at a hospital flags marginalized workers, leading to denial of care, humiliation, or police reports.
              </p>
              <ul className="list-disc list-outside ml-5 text-slate-500 text-sm space-y-2">
                <li>Documents are often confiscated by exploiters.</li>
                <li>Without documents, victims face total economic dependency.</li>
              </ul>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-brand-dark border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-6">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Operational Silos</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Systems are reactive and heavily isolated. A healthcare NGO treating an assault doesn't communicate with legal aid or micro-finance.
              </p>
              <div className="bg-white/5 border border-white/5 rounded p-4 text-sm text-slate-300">
                <strong className="text-white block mb-1">The Reality of Friction:</strong>
                Victims must visit up to 4 hostile government offices to receive care, legal counsel, and financial aid. The system is designed for them to fail.
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-brand-dark border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Siren className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Unreported Violence</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                The ITPA is weaponized to harass workers. Walking into a police station often means arrest or custodial violence.
              </p>
              <p className="text-slate-500 text-sm">
                This blackout of crime reporting creates absolute zones of impunity, where predators know victims have no access to the justice system.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-brand-dark border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Baby className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Generational Trauma</h4>
              <p className="text-slate-400 leading-relaxed mb-4">
                Stigma forcefully entraps the next generation. Schools routinely demand documents that mothers cannot safely provide, violating the RTE Act.
              </p>
              <p className="text-slate-500 text-sm">
                Denying education ensures children remain near exploitative environments, guaranteeing the cycle continues.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* The Architecture */}
      <section id="framework" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-4">03: The Solution Architecture</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The NyayaSetu Framework</h2>
            <p className="text-xl text-slate-400">
              A proprietary, vertically integrated 4-Layer System addressing every specific point of friction in the user's journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0 }}
              className="bg-slate-900 border border-brand-blue/30 rounded-2xl p-8 relative overflow-hidden group hover:border-brand-blue transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32" />
              </div>
              <div className="text-brand-accent font-display font-bold text-5xl mb-6 opacity-50">1</div>
              <h4 className="text-xl font-bold mb-2">Identity (SIS™)</h4>
              <div className="text-blue-400 text-sm font-medium mb-4">Shadow Identity System</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                An anonymous, portable ID that decouples essential access from dangerous occupational disclosure. Stores encrypted medical records and bypasses the Identity Paradox.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapIcon className="w-32 h-32" />
              </div>
              <div className="text-slate-500 font-display font-bold text-5xl mb-6 opacity-30">2</div>
              <h4 className="text-xl font-bold mb-2">Intelligence (LRG™)</h4>
              <div className="text-slate-300 text-sm font-medium mb-4">Live Risk Grid</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                A real-time, predictive safety layer mapping high-risk zones. Aggregates anonymized distress signals to push low-bandwidth SMS alerts and navigate users to Green Zones.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-32 h-32" />
              </div>
              <div className="text-slate-500 font-display font-bold text-5xl mb-6 opacity-30">3</div>
              <h4 className="text-xl font-bold mb-2">Intervention (RCP™)</h4>
              <div className="text-slate-300 text-sm font-medium mb-4">Response Chain Protocol</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                A discrete panic routing system. Emits an encrypted distress signal to the nearest vetted, pro-bono responders, entirely bypassing hostile state apparatus.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wallet className="w-32 h-32" />
              </div>
              <div className="text-slate-500 font-display font-bold text-5xl mb-6 opacity-30">4</div>
              <h4 className="text-xl font-bold mb-2">Independence</h4>
              <div className="text-slate-300 text-sm font-medium mb-4">Economic Stability Base</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Micro-insurance buffers and anonymous educational sponsorships. Builds legitimate financial stability and off-ramps outside the control of exploiters to break dependency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Alignment */}
      <section className="py-24 bg-white border-y border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Sustainable Ecosystem Integration</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              NyayaSetu does not seek to replace grassroots organizations. We are the technological bridge that unifies them.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Users className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-lg mb-1">Grassroots NGOs</h4>
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">The Boots on the Ground</p>
              <p className="text-slate-600 text-sm">Utilize our infrastructure to route resources efficiently, reducing overhead and increasing intervention success.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Scale className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-lg mb-1">Legal Aid Networks</h4>
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">The Defenders</p>
              <p className="text-slate-600 text-sm">Paralegals receive streamlined, anonymized data, allowing them to file petitions without exposing victim identity.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Landmark className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-lg mb-1">Government & NACO</h4>
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">The Institutional Backing</p>
              <p className="text-slate-600 text-sm">Aligning with state health schemes to provide the "last-mile" reach that government bodies struggle to achieve.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Building2 className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-lg mb-1">CSR & Philanthropy</h4>
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">The Financial Engine</p>
              <p className="text-slate-600 text-sm">Corporations fund the infrastructure and receive rigorous, data-driven reports on systemic impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-32 bg-slate-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-16">
            <h3 className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-4">Strategic Impact Metrics (KPIs)</h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold max-w-2xl">
              Moving beyond "feel-good" metrics to rigorous structural change.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="text-4xl font-display text-brand-blue font-bold">60%</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-200">Healthcare Friction Reduction</h4>
                <p className="text-slate-400 text-sm">Projected increase in clinic registrations for STI/HIV testing using anonymous SIS IDs.</p>
              </div>
            </div>
            
            <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="text-4xl font-display text-emerald-500 font-bold">45m</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-200">Legal Access Speed</h4>
                <p className="text-slate-400 text-sm">Reducing time to securely connect with a pro-bono lawyer from 3 weeks to under 45 minutes.</p>
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="text-4xl font-display text-purple-500 font-bold">30%</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-200">Violence De-escalation</h4>
                <p className="text-slate-400 text-sm">Anticipated drop in severe physical trauma incidents in zones actively utilizing Live Risk Grid heatmaps.</p>
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="text-4xl font-display text-amber-500 font-bold">40%</div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-200">Economic Independence</h4>
                <p className="text-slate-400 text-sm">Reduction of predatory loan dependency among users enrolled in the micro-insurance buffer program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-brand-dark text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-brand-blue mx-auto mb-8 opacity-50" />
          <h2 className="text-2xl md:text-4xl font-display font-medium text-slate-300 leading-normal mb-12">
            "We don't measure success by how many people we help...<br/>
            <span className="text-brand-accent italic">but by how many people no longer need to struggle for access.</span>"
          </h2>
          <div className="text-slate-600 text-sm tracking-widest uppercase font-semibold">
            Nyaya Setu | © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
