import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Globe, 
  Target, 
  Euro, 
  Users, 
  Calendar, 
  Award, 
  Leaf, 
  BarChart3, 
  MapPin, 
  Battery, 
  Building, 
  Rocket,
  Shield,
  CheckCircle,
  ArrowRight,
  DollarSign,
  PieChart,
  Lightbulb,
  Sun,
  Wind,
  Download,
  Presentation,
    AlertTriangle,
} from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'EcoCharge',
      subtitle: 'Italy\'s First 100% Renewable EV Charging Network',
      content: {
        tagline: 'Powering sustainable mobility with ultra-fast charging and complete renewable energy integration',
        founder: 'Founded by Italian Engineer | 2025',
        seeking: 'Seeking €5-10M for Phase 1-2 Expansion'
      }
    },
    {
      id: 'problem',
      title: 'The Problem',
      subtitle: 'EV Growth Outpacing Sustainable Charging Infrastructure',
      content: {
        stats: [
          { label: 'Italy EV Sales Growth', value: '+132%', subtext: 'January 2025 YoY' },
          { label: 'Current Charging Points', value: '66,000+', subtext: 'Up 60% in 2024' },
          { label: 'Renewable Energy Share', value: '<30%', subtext: 'Of charging network' }
        ],
        painPoints: [
          'Most charging networks still rely on grid electricity (mix of fossil fuels)',
          'Limited fast-charging availability on highways (EU mandate: 150kW every 60km by 2025)',
          'Poor user experience with multiple apps and payment systems',
          'High charging costs without transparent renewable energy sourcing'
        ]
      }
    },
    {
      id: 'market',
      title: 'Market Opportunity',
      subtitle: 'Massive Growth in Italian and European EV Market',
      content: {
        marketSize: [
          { label: 'Italy EV Market 2025', value: '€4.4B', growth: '+25% CAGR' },
          { label: 'EU EV Market 2025', value: '€180B+', growth: 'BEV 16-17% share' },
          { label: 'Charging Infrastructure TAM', value: '€50B+', growth: 'By 2030' }
        ],
        drivers: [
          'EU Green Deal mandating carbon neutrality by 2050',
          'Italy\'s Transizione 5.0 Plan: €6.3B allocated for sustainable infrastructure',
          'Consumer demand for renewable energy solutions (78% willing to pay premium)',
          'Corporate ESG requirements driving B2B demand'
        ]
      }
    },
    {
      id: 'solution',
      title: 'Our Solution',
      subtitle: '100% Renewable, Ultra-Fast, Smart Charging Network',
      content: {
        differentiators: [
          {
            icon: 'Leaf',
            title: '100% Renewable Energy',
            description: 'Every kWh from Italian solar and wind sources with transparent tracking'
          },
          {
            icon: 'Zap',
            title: 'Ultra-Fast Charging',
            description: '350kW stations enabling 15-minute charging for most vehicles'
          },
          {
            icon: 'Users',
            title: 'Seamless Experience',
            description: 'Single app, contactless payment, real-time availability'
          },
          {
            icon: 'BarChart3',
            title: 'Data-Driven Operations',
            description: 'AI-powered predictive maintenance and optimal site selection'
          }
        ],
        techStack: 'Open-source OCPP protocol, solar canopies, battery storage, smart grid integration'
      }
    },
    {
      id: 'business-model',
      title: 'Business Model',
      subtitle: 'Multiple Revenue Streams with Scalable Unit Economics',
      content: {
        revenueStreams: [
          { stream: 'Charging Fees', percentage: '60%', details: '€0.40/kWh average (15% premium for renewables)' },
          { stream: 'Subscription Plans', percentage: '25%', details: '€10-50/month unlimited charging' },
          { stream: 'B2B Partnerships', percentage: '10%', details: 'Corporate fleet charging contracts' },
          { stream: 'Energy Trading', percentage: '5%', details: 'Grid services and energy arbitrage' }
        ],
        unitEconomics: [
          { metric: 'Station CapEx', value: '€45,000', description: 'Including solar canopy' },
          { metric: 'Monthly Revenue per Station', value: '€3,500', description: 'At 25% utilization' },
          { metric: 'Payback Period', value: '18 months', description: 'Including grants' },
          { metric: 'IRR', value: '35%+', description: '10-year station lifecycle' }
        ]
      }
    },
    {
      id: 'go-to-market',
      title: 'Go-to-Market Strategy',
      subtitle: 'Phased Expansion Starting with Italian EV Hotspots',
      content: {
        phases: [
          {
            phase: 'Phase 1: Italy MVP',
            timeline: 'Q2-Q4 2025',
            locations: 'Milan & Rome (10 stations)',
            investment: '€200K',
            milestone: '1,000 active users'
          },
          {
            phase: 'Phase 2: National Scale',
            timeline: '2026',
            locations: 'Major Italian cities (100 stations)',
            investment: '€2M',
            milestone: 'Break-even, 50K users'
          },
          {
            phase: 'Phase 3: EU Expansion',
            timeline: '2027-2028',
            locations: 'Germany, France (1,000 stations)',
            investment: '€10M',
            milestone: '€10M ARR'
          }
        ],
        partnerships: [
          'Italian solar developers (Enel Green Power)',
          'Automotive OEMs (Stellantis, BMW)',
          'Retail locations (Autogrill, IKEA)',
          'Government partnerships for highway corridors'
        ]
      }
    },
    {
      id: 'competition',
      title: 'Competitive Landscape',
      subtitle: 'Clear Differentiation in Sustainable Charging',
      content: {
        competitors: [
          {
            name: 'Ionity',
            strengths: ['Established network', 'OEM backing'],
            weaknesses: ['Mixed energy sources', 'Limited Italy presence'],
            marketShare: '15%'
          },
          {
            name: 'Fastned',
            strengths: ['Renewable focus', 'Strong brand'],
            weaknesses: ['Limited Italian operations', 'High costs'],
            marketShare: '8%'
          },
          {
            name: 'Tesla Supercharger',
            strengths: ['Fast charging', 'User experience'],
            weaknesses: ['Proprietary (until 2025)', 'Grid electricity'],
            marketShare: '25%'
          }
        ],
        advantage: 'Only network combining 100% renewable energy, ultra-fast charging, and Italian market focus with local partnerships and government support'
      }
    },
    {
      id: 'financial-projections',
      title: 'Financial Projections',
      subtitle: '5-Year Path to €100M+ Revenue',
      content: {
        projections: [
          { year: '2025', revenue: '€0.1M', stations: 10, users: '1K', margin: '-50%' },
          { year: '2026', revenue: '€2.5M', stations: 100, users: '50K', margin: '15%' },
          { year: '2027', revenue: '€15M', stations: 400, users: '200K', margin: '25%' },
          { year: '2028', revenue: '€45M', stations: 1000, users: '500K', margin: '30%' },
          { year: '2029', revenue: '€100M', stations: 2000, users: '1M', margin: '35%' }
        ],
        keyMetrics: [
          'Customer acquisition cost: €25 (vs €50 industry average)',
          'Lifetime value: €1,200 per customer',
          'Station utilization: 30% target (vs 20% industry average)',
          'Average revenue per user: €120/year'
        ]
      }
    },
    {
      id: 'funding',
      title: 'Funding & Use of Funds',
      subtitle: 'Non-Dilutive First, Strategic Investment for Scale',
      content: {
        fundingStrategy: [
          {
            source: 'Government Grants',
            amount: '€2M',
            details: 'Transizione 5.0, EU CEF, Regional incentives',
            timeline: 'Q2 2025'
          },
          {
            source: 'Crowdfunding',
            amount: '€1M',
            details: 'OnePlanetCrowd, Invesdor platforms',
            timeline: 'Q3 2025'
          },
          {
            source: 'Series A',
            amount: '€5M',
            details: 'Climate-focused VCs (4impact, Pale Blue Dot)',
            timeline: 'Q4 2025'
          }
        ],
        useOfFunds: [
          { category: 'Station Deployment', percentage: '50%', amount: '€4M' },
          { category: 'Technology Development', percentage: '25%', amount: '€2M' },
          { category: 'Team Expansion', percentage: '15%', amount: '€1.2M' },
          { category: 'Marketing & Partnerships', percentage: '10%', amount: '€0.8M' }
        ]
      }
    },
    {
      id: 'team',
      title: 'Team & Advisory',
      subtitle: 'Engineering Excellence with Industry Expertise',
      content: {
        founder: {
          name: 'Italian Engineer',
          background: 'Engineering background with deep understanding of renewable energy systems and EV technology',
          vision: 'Bootstrapping approach inspired by successful companies like Statiq (India)'
        },
        hiringPlan: [
          { role: 'CTO', timeline: 'Q3 2025', focus: 'Platform development and scaling' },
          { role: 'Head of Partnerships', timeline: 'Q4 2025', focus: 'Business development' },
          { role: 'Operations Manager', timeline: 'Q1 2026', focus: 'Station deployment' }
        ],
        advisors: 'Seeking advisors from Italian energy sector, EV industry, and government relations'
      }
    },
    {
      id: 'impact',
      title: 'Environmental Impact',
      subtitle: 'Measurable Contribution to Carbon Neutrality',
      content: {
        impactMetrics: [
          { metric: 'CO₂ Reduction by 2029', value: '500,000 tons', equivalent: '100,000 cars off road' },
          { metric: 'Renewable Energy Generated', value: '200 GWh/year', equivalent: '50,000 homes powered' },
          { metric: 'EV Adoption Acceleration', value: '1M+ charges', equivalent: '15% faster EV transition' }
        ],
        certifications: [
          'Carbon neutral operations certification',
          'EU Green Taxonomy compliance',
          'Italian Green Building Council partnership'
        ],
        sdgAlignment: 'UN SDG 7 (Clean Energy), SDG 11 (Sustainable Cities), SDG 13 (Climate Action)'
      }
    },
    {
      id: 'risks',
      title: 'Risk Assessment & Mitigation',
      subtitle: 'Proactive Risk Management Strategy',
      content: {
        risks: [
          {
            risk: 'Regulatory Changes',
            probability: 'Medium',
            impact: 'High',
            mitigation: 'Strong government partnerships, compliance-first approach'
          },
          {
            risk: 'Competition from Big Tech',
            probability: 'High',
            impact: 'Medium',
            mitigation: 'First-mover advantage, local partnerships, niche positioning'
          },
          {
            risk: 'Technology Disruption',
            probability: 'Low',
            impact: 'High',
            mitigation: 'Modular architecture, continuous R&D investment'
          },
          {
            risk: 'Economic Downturn',
            probability: 'Medium',
            impact: 'Medium',
            mitigation: 'Diversified revenue streams, government contract buffer'
          }
        ]
      }
    },
    {
      id: 'ask',
      title: 'The Ask',
      subtitle: 'Join Us in Building Italy\'s Sustainable Future',
      content: {
        ask: {
          immediate: 'Join our €1M crowdfunding round (Q3 2025)',
          strategic: 'Strategic partnership opportunities for Series A',
          support: 'Introductions to Italian energy sector leaders'
        },
        nextSteps: [
          'Complete market research survey (Target: 500 responses)',
          'Submit grant applications (Transizione 5.0 deadline)',
          'Launch crowdfunding campaign (OnePlanetCrowd)',
          'Begin strategic investor outreach'
        ],
        contact: {
          email: 'hello@ecocharge.it',
          phone: '+39 333 123 4567',
          location: 'Milano, Italia'
        }
      }
    }
  ];

  const styles = {
    container: {
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      position: 'relative'
    },
    slideContainer: {
      padding: '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    slideHeader: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    slideTitle: {
      fontSize: '3rem',
      fontWeight: '300',
      background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '16px'
    },
    slideSubtitle: {
      fontSize: '1.5rem',
      color: 'rgba(255, 255, 255, 0.8)',
      fontWeight: '400'
    },
    slideContent: {
      flex: 1
    },
    navigation: {
      position: 'fixed',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(20px)',
      padding: '15px 25px',
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    navButton: {
      background: 'rgba(16, 185, 129, 0.2)',
      border: '1px solid #10b981',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#10b981',
      transition: 'all 0.3s ease'
    },
    slideIndicator: {
      display: 'flex',
      gap: '8px'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeDot: {
      background: '#10b981',
      transform: 'scale(1.2)'
    },
    slideCounter: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '14px',
      fontWeight: '500'
    },
    grid: {
      display: 'grid',
      gap: '30px'
    },
    gridTwoCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
    },
    gridThreeCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridFourCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '30px',
      transition: 'all 0.3s ease'
    },
    statCard: {
      textAlign: 'center',
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.3)'
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: '300',
      color: '#10b981',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      color: '#ffffff',
      marginBottom: '4px'
    },
    statSubtext: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px',
      padding: '16px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '8px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      overflow: 'hidden'
    },
    tableHeader: {
      background: 'rgba(16, 185, 129, 0.2)',
      padding: '16px',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    tableCell: {
      padding: '16px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 10000); // 10 seconds per slide
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const renderSlideContent = (slide) => {
    switch (slide.id) {
      case 'title':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <Zap style={{ width: '80px', height: '80px', color: '#10b981', margin: '0 auto 20px' }} />
            </div>
            <p style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '40px' }}>
              {slide.content.tagline}
            </p>
            <div style={{ ...styles.grid, ...styles.gridThreeCol, marginTop: '60px' }}>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <div style={styles.statValue}>2025</div>
                <div style={styles.statLabel}>Launch Year</div>
              </div>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <div style={styles.statValue}>€5-10M</div>
                <div style={styles.statLabel}>Funding Target</div>
              </div>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <div style={styles.statValue}>100%</div>
                <div style={styles.statLabel}>Renewable Energy</div>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div>
            <div style={{ ...styles.grid, ...styles.gridThreeCol, marginBottom: '50px' }}>
              {slide.content.stats.map((stat, index) => (
                <div key={index} style={{ ...styles.card, ...styles.statCard }}>
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                  <div style={styles.statSubtext}>{stat.subtext}</div>
                </div>
              ))}
            </div>
            <div style={styles.card}>
              <h3 style={{ color: '#10b981', marginBottom: '24px', fontSize: '1.5rem' }}>Key Pain Points</h3>
              <ul style={styles.list}>
                {slide.content.painPoints.map((point, index) => (
                  <li key={index} style={styles.listItem}>
                    <AlertTriangle style={{ width: '20px', height: '20px', color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'market':
        return (
          <div>
            <div style={{ ...styles.grid, ...styles.gridThreeCol, marginBottom: '50px' }}>
              {slide.content.marketSize.map((market, index) => (
                <div key={index} style={{ ...styles.card, ...styles.statCard }}>
                  <div style={styles.statValue}>{market.value}</div>
                  <div style={styles.statLabel}>{market.label}</div>
                  <div style={styles.statSubtext}>{market.growth}</div>
                </div>
              ))}
            </div>
            <div style={styles.card}>
              <h3 style={{ color: '#10b981', marginBottom: '24px', fontSize: '1.5rem' }}>Market Drivers</h3>
              <ul style={styles.list}>
                {slide.content.drivers.map((driver, index) => (
                  <li key={index} style={styles.listItem}>
                    <TrendingUp style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div>
            <div style={{ ...styles.grid, ...styles.gridTwoCol, marginBottom: '40px' }}>
              {slide.content.differentiators.map((diff, index) => {
                const IconComponent = {
                  'Leaf': Leaf,
                  'Zap': Zap,
                  'Users': Users,
                  'BarChart3': BarChart3
                }[diff.icon];
                
                return (
                  <div key={index} style={styles.card}>
                    <IconComponent style={{ width: '40px', height: '40px', color: '#10b981', marginBottom: '16px' }} />
                    <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>{diff.title}</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>{diff.description}</p>
                  </div>
                );
              })}
            </div>
            <div style={styles.card}>
              <h3 style={{ color: '#10b981', marginBottom: '16px' }}>Technology Stack</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{slide.content.techStack}</p>
            </div>
          </div>
        );

      case 'business-model':
        return (
          <div>
            <div style={{ ...styles.grid, ...styles.gridTwoCol, gap: '40px' }}>
              <div>
                <h3 style={{ color: '#10b981', marginBottom: '24px' }}>Revenue Streams</h3>
                {slide.content.revenueStreams.map((stream, index) => (
                  <div key={index} style={{ ...styles.card, marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600' }}>{stream.stream}</span>
                      <span style={{ color: '#10b981', fontSize: '1.25rem' }}>{stream.percentage}</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>{stream.details}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#10b981', marginBottom: '24px' }}>Unit Economics</h3>
                {slide.content.unitEconomics.map((metric, index) => (
                  <div key={index} style={{ ...styles.card, marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600' }}>{metric.metric}</span>
                      <span style={{ color: '#10b981', fontSize: '1.25rem' }}>{metric.value}</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'financial-projections':
        return (
          <div>
            <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Year</th>
                    <th style={styles.tableHeader}>Revenue</th>
                    <th style={styles.tableHeader}>Stations</th>
                    <th style={styles.tableHeader}>Users</th>
                    <th style={styles.tableHeader}>Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.content.projections.map((proj, index) => (
                    <tr key={index}>
                      <td style={styles.tableCell}>{proj.year}</td>
                      <td style={{ ...styles.tableCell, color: '#10b981', fontWeight: '600' }}>{proj.revenue}</td>
                      <td style={styles.tableCell}>{proj.stations}</td>
                      <td style={styles.tableCell}>{proj.users}</td>
                      <td style={styles.tableCell}>{proj.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={styles.card}>
              <h3 style={{ color: '#10b981', marginBottom: '20px' }}>Key Performance Metrics</h3>
              <ul style={styles.list}>
                {slide.content.keyMetrics.map((metric, index) => (
                  <li key={index} style={styles.listItem}>
                    <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'ask':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...styles.grid, ...styles.gridThreeCol, marginBottom: '50px' }}>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <Euro style={{ width: '48px', height: '48px', color: '#10b981', margin: '0 auto 16px' }} />
                <div style={styles.statLabel}>Crowdfunding Round</div>
                <div style={styles.statValue}>€1M</div>
                <div style={styles.statSubtext}>Q3 2025</div>
              </div>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <Rocket style={{ width: '48px', height: '48px', color: '#10b981', margin: '0 auto 16px' }} />
                <div style={styles.statLabel}>Series A Target</div>
                <div style={styles.statValue}>€5M</div>
                <div style={styles.statSubtext}>Q4 2025</div>
              </div>
              <div style={{ ...styles.card, ...styles.statCard }}>
                <Users style={{ width: '48px', height: '48px', color: '#10b981', margin: '0 auto 16px' }} />
                <div style={styles.statLabel}>Strategic Partners</div>
                <div style={styles.statValue}>5-10</div>
                <div style={styles.statSubtext}>Energy & Auto</div>
              </div>
            </div>
            
            <div style={styles.card}>
              <h3 style={{ color: '#10b981', marginBottom: '24px' }}>Next Steps</h3>
              <ul style={styles.list}>
                {slide.content.nextSteps.map((step, index) => (
                  <li key={index} style={styles.listItem}>
                    <ArrowRight style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '40px', padding: '30px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <h3 style={{ color: '#10b981', marginBottom: '16px' }}>Contact</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px' }}>📧 {slide.content.contact.email}</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px' }}>📱 {slide.content.contact.phone}</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>📍 {slide.content.contact.location}</p>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <div style={styles.card}>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                Content for {slide.title} slide will be rendered here based on the slide data structure.
              </p>
            </div>
          </div>
        );
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div style={styles.container}>
      <style>
        {`
          @media (max-width: 768px) {
            .grid-responsive {
              grid-template-columns: 1fr !important;
            }
          }
          
          .nav-button:hover {
            background: rgba(16, 185, 129, 0.3) !important;
            transform: scale(1.1);
          }
          
          .slide-transition {
            animation: slideIn 0.5s ease-in-out;
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      {/* Header with controls */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Zap style={{ width: '24px', height: '24px', color: '#10b981' }} />
          <span style={{ fontWeight: '600', color: '#ffffff' }}>EcoCharge Pitch Deck</span>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            style={{
              background: isAutoPlaying ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '6px',
              padding: '8px 16px',
              color: isAutoPlaying ? '#000000' : '#ffffff',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {isAutoPlaying ? 'Pause' : 'Auto Play'}
          </button>
          
          <button
            style={{
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid #10b981',
              borderRadius: '6px',
              padding: '8px 16px',
              color: '#10b981',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Download style={{ width: '16px', height: '16px' }} />
            Export PDF
          </button>
        </div>
      </div>

      {/* Main slide content */}
      <div style={styles.slideContainer} className="slide-transition">
        <div style={styles.slideHeader}>
          <h1 style={styles.slideTitle}>{currentSlideData.title}</h1>
          <p style={styles.slideSubtitle}>{currentSlideData.subtitle}</p>
        </div>
        
        <div style={styles.slideContent}>
          {renderSlideContent(currentSlideData)}
        </div>
      </div>

      {/* Navigation */}
      <div style={styles.navigation}>
        <button 
          onClick={prevSlide}
          style={styles.navButton}
          className="nav-button"
        >
          <ChevronLeft style={{ width: '20px', height: '20px' }} />
        </button>
        
        <div style={styles.slideIndicator}>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...styles.dot,
                ...(index === currentSlide ? styles.activeDot : {})
              }}
            />
          ))}
        </div>
        
        <div style={styles.slideCounter}>
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          style={styles.navButton}
          className="nav-button"
        >
          <ChevronRight style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;