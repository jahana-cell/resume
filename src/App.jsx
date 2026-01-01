import React from 'react';
import {
  Linkedin,
  Mail,
  Phone,
  Printer,
  Github,
} from 'lucide-react';

export default function MajesticResume() {
  const handlePrint = () => {
    window.print();
  };

  // Mock profile image - replace src with your actual image URL
  const profileImage = {
    src: "https://api.dicebear.com/7.x/initials/svg?seed=KK&backgroundColor=1a1814&textColor=D4AF37",
    alt: "Ahmad Kaukab Khan"
  };

  const careerHistory = [
    {
      company: 'Centers for Disease Control and Prevention',
      location: 'Morgantown, WV',
      years: 'Oct 2024 - Present',
      role: 'System Administrator (Lead)',
      functions: [
        'Spearheaded the design and implementation of an automated Windows 11 imaging process using PowerShell and SCCM, reducing deployment times by 87% and enforcing rigorous CDC cybersecurity baselines.',
        'Developed and maintained a suite of custom PowerShell and batch scripts to automate administrative tasks, boosting operational efficiency by 95% while minimizing the risk of human error.',
        'Orchestrated patching and vulnerability remediation programs using Tenable and Microsoft Azure, mitigating threat exposure by 40% and ensuring full compliance with FISMA and NIST standards.',
        'Successfully deployed and administered a bespoke Endpoint Detection & Response (EDR) solution to proactively identify, investigate, and neutralize threats across the enterprise.',
        'Leveraged the CyberArk platform to govern privileged access, strictly enforce the principle of least privilege, and meticulously monitor all elevated sessions to prevent misuse.',
        'Directed the secure migration of over 2,000 devices, guaranteeing seamless user transition while implementing full disk encryption and maintaining Federal compliance.'
      ]
    },
    {
      company: 'University of Alabama at Birmingham',
      location: 'Birmingham, AL',
      years: 'Sep 2021 - Oct 2024',
      role: 'Information System Specialist II (Lead)',
      functions: [
        'Orchestrated large-scale system deployments for over 3,000 devices, fortifying the university\'s security posture through meticulous Group Policy (GPO) management and stringent user access controls.',
        'Enhanced network security and organization by managing VLANs and IP configurations, significantly reducing cross-segment vulnerabilities and improving traffic segmentation.',
        'Developed and deployed PowerShell and Bash automation scripts that reduced manual administrative tasks by 25%, ensuring consistent and secure adherence to IT protocols.'
      ]
    },
    {
      company: 'Slappey Communications',
      location: 'Birmingham, AL',
      years: 'Jan 2020 - Sep 2021',
      role: 'Network Administrator',
      functions: [
        'Improved network reliability and performance by 20% through meticulous oversight of critical networking hardware, including switches, routers, and firewalls.',
        'Bolstered security and streamlined user access by administering Windows Active Directory, meticulously managing user accounts, Group Policies, and permissions in a multi-tenant environment.'
      ]
    },
    {
      company: 'Phone Clinic',
      location: 'Birmingham, AL',
      years: 'Jan 2017 - Dec 2020',
      role: 'IT Support Specialist II',
      functions: [
        'Served as the primary escalation point for complex technical issues, resolving hardware, software, and network connectivity problems while maintaining a 95% user satisfaction rating.',
        'Strengthened device security by implementing foundational measures, including antivirus installation and standardized user permissions, to protect customer data from common threats.'
      ]
    }
  ];

  const projects = [
    { 
      name: 'Web Application Development & Technical Strategy', 
      client: 'GrowShare Capital LLC | Hoover, AL', 
      years: 'Jan 2025 - Present (Freelance)',
      description: 'Engineered and launched multiple interactive web applications, demonstrating full-stack development and infrastructure management skills. This project showcases abilities in automation, scalable architecture, and integrating modern technologies to solve business problems.',
      points: [
        'Developed responsive frontends using React, Next.js, and TypeScript, enhancing user engagement.',
        'Managed multiple GitHub repositories, implementing modular code structures to improve development velocity.',
        'Designed and configured scalable DNS and hosting environments for high-availability deployment.',
        'Leveraged AI platforms (Gemini) via Genkit to rapidly prototype intelligent application features.'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'GitHub', 'Nodemailer']
    }
  ];

  const skills = [
    { category: 'Security & Compliance', items: ['Vulnerability Management (Tenable)', 'Endpoint Detection & Response (EDR)', 'Privileged Access Management (CyberArk)', 'FISMA/NIST Frameworks', 'Full Disk Encryption (BitLocker)'] },
    { category: 'Infrastructure & Cloud', items: ['Active Directory', 'Microsoft SCCM', 'Microsoft Azure', 'Group Policy (GPO)', 'Network Administration (VLAN, DNS)'] },
    { category: 'Automation & Scripting', items: ['PowerShell', 'Bash', 'JavaScript/TypeScript'] },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-luxury { font-family: 'Cormorant Garamond', serif; }
        
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          body {
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print { display: none !important; }
          .print-container {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            border-radius: 0 !important;
          }
          .print-grid {
            display: grid !important;
            grid-template-columns: 280px 1fr !important; 
          }
          /* Remove background images/gradients for ink saving */
          .bg-sidebar { 
            background: #1a1814 !important; 
            color: #e0d5c1 !important; 
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      {/* BACKGROUND TEXTURE (Light Cream Paper) */}
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-start p-4 pt-8 md:pt-12 relative overflow-x-hidden font-sans"
           style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F5F2E9 80%)' }}>
        
        {/* Controls */}
        <div className="w-full max-w-7xl self-center no-print mb-8 z-20 relative text-center">
          <button 
            onClick={handlePrint} 
            className="bg-[#B8860B] hover:bg-[#AA771C] text-white font-cinzel tracking-widest text-xs uppercase px-8 py-3 rounded-sm shadow-lg transition-all active:scale-95 flex items-center justify-center mx-auto"
          >
            <Printer className="mr-2 h-4 w-4" />
            Download Portfolio PDF
          </button>
        </div>

        <div className="w-full max-w-7xl bg-white rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-[#D4AF37]/20 print-container relative group">
          
          {/* Decorative Corner Flourishes (Screen Only) */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl pointer-events-none no-print" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-xl pointer-events-none no-print" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-xl pointer-events-none no-print" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl pointer-events-none no-print" />

          <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 print-grid">
            
            {/* === SIDEBAR === */}
            <aside className="col-span-1 p-8 md:p-10 bg-[#1a1814] text-[#e0d5c1] relative overflow-hidden bg-sidebar">
              {/* Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 no-print"
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
              />
              
              <div className="sticky top-8 flex flex-col items-center text-center md:items-start md:text-left relative z-10">
                
                 <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-8 mx-auto md:mx-0">
                    <img 
                      src={profileImage.src} 
                      alt={profileImage.alt}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                <div className="w-full">
                  <h1 className="text-3xl md:text-4xl font-bold font-cinzel text-[#F1D170] tracking-wide mb-2 leading-tight">
                      Ahmad<br/>Kaukab Khan
                  </h1>
                  <p className="text-sm font-luxury text-[#a89f91] uppercase tracking-widest border-t border-[#D4AF37]/30 pt-4 mt-2">
                      System Administrator <br/> Cybersecurity Specialist
                  </p>
                </div>
                
                <div className="w-full my-8 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                
                <div className="space-y-5 text-sm text-left w-full font-luxury">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#D4AF37]/20 rounded-full bg-[#0a0a0a] group-hover:border-[#D4AF37] transition-colors">
                        <Phone className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#dcdcdc] tracking-wide text-lg">(205) 616-2945</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#D4AF37]/20 rounded-full bg-[#0a0a0a] group-hover:border-[#D4AF37] transition-colors">
                        <Mail className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#dcdcdc] tracking-wide break-all text-lg">khan.kaukab@icloud.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#D4AF37]/20 rounded-full bg-[#0a0a0a] group-hover:border-[#D4AF37] transition-colors">
                        <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <a href="https://linkedin.com/in/kaukabkhan" target="_blank" rel="noreferrer" className="text-[#dcdcdc] hover:text-[#F1D170] transition-colors text-lg">
                      linkedin.com/in/kaukabkhan
                    </a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#D4AF37]/20 rounded-full bg-[#0a0a0a] group-hover:border-[#D4AF37] transition-colors">
                        <Github className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <a href="https://github.com/jahana-cell" target="_blank" rel="noreferrer" className="text-[#dcdcdc] hover:text-[#F1D170] transition-colors text-lg">
                      github.com/jahana-cell
                    </a>
                  </div>
                </div>

                <div className="w-full my-8 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                
                <section className="text-left w-full">
                  <h2 className="text-lg font-bold font-cinzel text-[#F1D170] mb-6 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#D4AF37] rotate-45" /> Expertise
                  </h2>
                   <div className="space-y-8 font-luxury">
                      {skills.map((skill, index) => (
                          <div key={index}>
                              <h3 className="font-bold text-[#e0d5c1] text-lg mb-2 border-b border-[#333] pb-1">{skill.category}</h3>
                              <ul className="list-none space-y-2 text-base text-[#a89f91]">
                                 {skill.items.map(item => (
                                      <li key={item} className="flex items-start gap-2">
                                          <span className="text-[#D4AF37] mt-1.5 text-[8px]">♦</span>
                                          {item}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
                </section>

                <div className="w-full my-8 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />

                <div className="w-full text-left font-luxury">
                  <h2 className="text-lg font-bold font-cinzel text-[#F1D170] mb-6 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#D4AF37] rotate-45" /> Education
                  </h2>
                  <ul className="space-y-6 text-base">
                     <li className="relative pl-4 border-l border-[#D4AF37]/30">
                      <p className="font-bold text-[#e0d5c1] text-lg">Master of Science in Management Information Systems</p>
                      <p className="text-[#a89f91] italic">University of Alabama at Birmingham, 2024</p>
                      <p className="text-xs text-[#D4AF37] mt-1 uppercase tracking-wider">Cum Laude • Cybersecurity</p>
                    </li>
                    <li className="relative pl-4 border-l border-[#D4AF37]/30">
                      <p className="font-bold text-[#e0d5c1] text-lg">Bachelor of Science in Information Systems</p>
                      <p className="text-[#a89f91] italic">University of Alabama at Birmingham, 2020</p>
                      <p className="text-xs text-[#D4AF37] mt-1 uppercase tracking-wider">Cum Laude</p>
                    </li>
                    <li className="relative pl-4 border-l border-[#D4AF37]/30">
                      <p className="font-bold text-[#e0d5c1] text-lg">Associate of Arts in Business Administration</p>
                      <p className="text-[#a89f91] italic">Lawson State Community College, 2018</p>
                       <p className="text-xs text-[#D4AF37] mt-1 uppercase tracking-wider">Magna Cum Laude</p>
                    </li>
                  </ul>
                </div>
                
              </div>
            </aside>

            {/* === MAIN CONTENT === */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 md:p-12 space-y-12 bg-white text-slate-900">
              
              <section>
                  <div className="mb-6 border-b border-[#D4AF37]/20 pb-4">
                      <h2 className="text-2xl font-bold font-cinzel text-[#2c241b] uppercase tracking-widest">
                        Executive Profile
                      </h2>
                  </div>
                  
                  <p className="font-luxury text-[#5d554a] text-xl leading-relaxed bg-[#FAF9F6] p-8 border-l-2 border-[#B8860B] italic relative">
                    <span className="absolute top-4 left-4 text-4xl text-[#D4AF37]/20 font-cinzel">"</span>
                    A results-driven Lead System Administrator and Cybersecurity Specialist with over eight years of experience fortifying enterprise systems. Proven ability to reduce deployment times by 87% through PowerShell and SCCM automation. Adept at orchestrating comprehensive security programs leveraging Tenable, EDR, and CyberArk to mitigate threat exposure by 40% while ensuring rigorous FISMA/NIST compliance. A strategic leader dedicated to mentoring high-performing teams and building resilient, security-first IT infrastructures.
                  </p>
              </section>
              
              <section>
                <div className="mb-8 border-b border-[#D4AF37]/20 pb-4">
                      <h2 className="text-2xl font-bold font-cinzel text-[#2c241b] uppercase tracking-widest">
                        Professional Experience
                      </h2>
                </div>

                 <div className="space-y-12">
                    {careerHistory.map((job, index) => (
                      <div key={index} className="relative pl-8 md:pl-0">
                          {/* Timeline Connector for Desktop */}
                          <div className="hidden md:block absolute left-[-29px] top-2 w-4 h-4 bg-[#fff] border-2 border-[#D4AF37] rounded-full z-10" />
                          
                          <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-3">
                              <h3 className="text-xl font-bold font-cinzel text-[#2c241b]">{job.role}</h3>
                              <div className="text-sm font-cinzel text-[#B8860B] uppercase tracking-wider font-semibold mt-1 md:mt-0">
                                  {job.years}
                              </div>
                          </div>
                          
                          <div className="mb-4 text-[#8a724d] font-luxury text-xl italic font-medium flex items-center gap-2">
                              <span>{job.company}</span>
                              <span className="text-xs text-[#D4AF37]">•</span>
                              <span>{job.location}</span>
                          </div>

                           <ul className="list-none space-y-3 font-luxury text-[#5d554a] text-lg leading-relaxed">
                              {job.functions.map((func, i) => (
                                  <li key={i} className="relative pl-6">
                                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-[#D4AF37]/60 rounded-full" />
                                      {func}
                                  </li>
                              ))}
                           </ul>
                      </div>
                    ))}
                  </div>
              </section>

               <section>
                  <div className="mb-8 border-b border-[#D4AF37]/20 pb-4">
                      <h2 className="text-2xl font-bold font-cinzel text-[#2c241b] uppercase tracking-widest">
                        Strategic Initiatives
                      </h2>
                  </div>

                  <div className="space-y-8">
                    {projects.map((proj, index) => (
                      <div key={index} className="p-8 border border-[#D4AF37]/20 bg-[#fff] shadow-sm relative group hover:shadow-md transition-shadow duration-300">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#B8860B]" />
                        
                        <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4">
                            <h3 className="text-xl font-bold font-cinzel text-[#2c241b]">{proj.name}</h3>
                            <div className="text-sm font-cinzel text-[#B8860B] uppercase tracking-wider font-semibold">
                                {proj.years}
                            </div>
                        </div>
                        
                        <div className="mb-4 text-[#8a724d] font-luxury text-xl italic">{proj.client}</div>
                        
                        <p className="text-lg text-[#5d554a] mb-6 font-luxury leading-relaxed">{proj.description}</p>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                            {proj.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 font-luxury text-[#5d554a] text-base">
                                    <span className="text-[#D4AF37] mt-1.5 text-[10px]">♦</span>
                                    {point}
                                </li>
                            ))}
                         </ul>
                         
                         <div className="pt-4 border-t border-[#D4AF37]/10">
                            <h4 className="text-xs font-bold font-cinzel text-[#8a724d] uppercase tracking-widest mb-3">Technologies Leveraged</h4>
                            <div className="flex flex-wrap gap-2">
                              {proj.technologies.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 bg-[#FAF9F6] border border-[#D4AF37]/20 text-[#5d554a] text-xs font-cinzel uppercase tracking-wide">
                                      {tech}
                                  </span>
                              ))}
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}
