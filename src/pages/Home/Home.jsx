import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(245,166,35,0.05)', top: '-100px', right: '-100px' }}></div>
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(245,166,35,0.05)', bottom: '-50px', left: '-50px' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,166,35,0.15)',
            border: '1px solid rgba(245,166,35,0.3)',
            borderRadius: '30px',
            padding: '8px 20px',
            marginBottom: '30px'
          }}>
            <span style={{ color: '#f5a623', fontSize: '13px', letterSpacing: '2px' }}>🇮🇳 INDIA'S #1 FITNESS COMMUNITY</span>
          </div>

          <h1 style={{ color: 'white', fontSize: '64px', margin: '0 0 20px 0', lineHeight: '1.1', fontWeight: '800' }}>
            Transform Your<br />
            <span style={{
              background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Body & Life</span>
          </h1>

          <p style={{ color: '#aaa', fontSize: '20px', maxWidth: '600px', margin: '0 auto 20px auto', lineHeight: '1.8' }}>
            Fat loss · Weight loss · Healthy living<br />
            <strong style={{ color: 'white' }}>Made simple for every Indian 🇮🇳</strong>
          </p>

          <p style={{ color: '#666', fontSize: '15px', marginBottom: '40px' }}>
            No expensive gym. No bland diet. Just real results with Indian food & lifestyle.
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <Link to="/workouts" style={{
              background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
              color: '#111',
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(245,166,35,0.4)'
            }}>Start Free Today 🚀</Link>
            <Link to="/diet" style={{
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.3)',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px'
            }}>View Diet Plans 🥗</Link>
          </div>

          {/* Hero Image */}
          <div style={{
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="Fitness"
              style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              background: 'rgba(0,0,0,0.8)',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0, color: '#111', fontWeight: 'bold'
              }}>▶</div>
              <div>
                <p style={{ color: 'white', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Watch: 30 Day Fat Loss Transformation</p>
                <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>Replace with your own video</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        {[
          { number: '10K+', label: 'Members Transformed' },
          { number: '500+', label: 'Workouts Available' },
          { number: '50+', label: 'Indian Meal Plans' },
          { number: '95%', label: 'Success Rate' }
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '40px', color: '#111', fontWeight: '800' }}>{stat.number}</h2>
            <p style={{ margin: 0, color: '#333', fontWeight: '600', fontSize: '14px' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* GOALS */}
      <div style={{ background: '#f8f8f8', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>What We Offer</p>
        <h2 style={{ fontSize: '40px', color: '#111', marginBottom: '50px', fontWeight: '800' }}>Choose Your Goal</h2>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { emoji: '🔥', title: 'Fat Loss', desc: 'Burn fat effectively with Indian-friendly workouts and diet plans designed for real results.', link: '/workouts' },
            { emoji: '⚖️', title: 'Weight Loss', desc: 'Lose weight sustainably without starving. Practical tips that fit Indian lifestyle.', link: '/diet' },
            { emoji: '💪', title: 'Build Strength', desc: 'Get stronger with or without gym. Bodyweight and equipment based programs.', link: '/exercises' },
            { emoji: '🥗', title: 'Healthy Eating', desc: 'Indian meal plans for fitness. Dal, roti, sabzi — all optimized for your goals.', link: '/diet' },
          ].map((goal, i) => (
            <Link key={i} to={goal.link} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '35px 25px',
                width: '200px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{goal.emoji}</div>
                <h3 style={{ color: '#111', marginBottom: '10px' }}>{goal.title}</h3>
                <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6' }}>{goal.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* WHO STANDARD BANNER */}
      <div style={{
        background: '#111',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', fontSize: '28px', marginBottom: '30px' }}>
          📊 Global Fitness Standards You Should Know
        </h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { org: 'WHO', standard: '150 mins moderate exercise per week', icon: '🌍' },
            { org: 'AHA', standard: 'Walk 10,000 steps daily for heart health', icon: '❤️' },
            { org: 'ICMR', standard: '50-55% carbs, 20-25% protein, 20-25% fat for Indians', icon: '🇮🇳' },
            { org: 'NIH 2026', standard: '1.2-1.6g protein per kg bodyweight daily', icon: '🔬' },
          ].map((s, i) => (
            <div key={i} style={{
              background: '#1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              width: '180px',
              border: '1px solid #333'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>{s.icon}</div>
              <p style={{ color: '#f5a623', fontWeight: 'bold', fontSize: '13px', margin: '0 0 8px 0' }}>{s.org}</p>
              <p style={{ color: '#aaa', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>{s.standard}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #f5a623, #ff6b35)',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#111', fontSize: '42px', fontWeight: '800', marginBottom: '15px' }}>
          Ready to Transform? 💪
        </h2>
        <p style={{ color: '#333', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
          Join 10,000+ Indians already on their fitness journey with FitIndian!
        </p>
        <Link to="/workouts" style={{
          background: '#111',
          color: 'white',
          textDecoration: 'none',
          padding: '18px 50px',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>Start For Free Today 🚀</Link>
      </div>

      {/* FOOTER */}
      <div style={{
        background: '#0a0a0a',
        color: '#666',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <h3 style={{ color: '#f5a623', marginBottom: '10px', fontSize: '22px' }}>💪 FitIndian</h3>
        <p style={{ color: '#444', marginBottom: '20px', fontSize: '14px' }}>India's Fitness Community — Fat Loss · Weight Loss · Healthy Living</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['Instagram', 'YouTube', 'Facebook', 'Twitter'].map(social => (
            <a key={social} href="#" style={{ color: '#f5a623', textDecoration: 'none', fontSize: '14px' }}>{social}</a>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: '13px' }}>© 2026 FitIndian · Made with ❤️ for every Indian</p>
      </div>

    </div>
  )
}