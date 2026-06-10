function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        background: '#111',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h2 style={{ color: '#f5a623', margin: 0, fontSize: '24px' }}>💪 FitIndian</h2>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#workouts" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Workouts</a>
          <a href="#diet" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Diet</a>
          <a href="#tracker" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Tracker</a>
          <a href="#guides" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Guides</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #111 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <div>
          <p style={{ color: '#f5a623', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>
            India's Fitness Community
          </p>
          <h1 style={{ color: 'white', fontSize: '60px', margin: '0 0 20px 0', lineHeight: '1.1' }}>
            Transform Your<br />
            <span style={{ color: '#f5a623' }}>Body & Mind</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px auto', lineHeight: '1.8' }}>
            Fat loss, weight loss, and healthy living — made simple for every Indian. No gym required to start!
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: '#f5a623',
              color: '#111',
              border: 'none',
              padding: '15px 35px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Start Your Journey 🚀</button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 35px',
              borderRadius: '30px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>Watch Guide ▶</button>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div style={{
        background: '#f5a623',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        {[
          { number: '10K+', label: 'Members' },
          { number: '500+', label: 'Workouts' },
          { number: '50+', label: 'Meal Plans' },
          { number: '95%', label: 'Success Rate' }
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '36px', color: '#111' }}>{stat.number}</h2>
            <p style={{ margin: 0, color: '#333', fontWeight: 'bold' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* GOALS SECTION */}
      <div style={{ background: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>What We Offer</p>
        <h2 style={{ fontSize: '36px', color: '#111', marginBottom: '50px' }}>Choose Your Goal</h2>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { emoji: '🔥', title: 'Fat Loss', desc: 'Burn fat effectively with Indian-friendly workouts and diet plans designed for real results.' },
            { emoji: '⚖️', title: 'Weight Loss', desc: 'Lose weight sustainably without starving. Practical tips that fit Indian lifestyle.' },
            { emoji: '💪', title: 'Build Strength', desc: 'Get stronger with or without gym. Bodyweight and equipment based programs.' },
            { emoji: '🥗', title: 'Healthy Eating', desc: 'Indian meal plans for fitness. Dal, roti, sabzi — all optimized for your goals.' }
          ].map((goal, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '35px 25px',
              width: '200px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{goal.emoji}</div>
              <h3 style={{ color: '#111', marginBottom: '10px' }}>{goal.title}</h3>
              <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6' }}>{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        background: '#111',
        color: '#aaa',
        textAlign: 'center',
        padding: '30px 20px'
      }}>
        <h3 style={{ color: '#f5a623', marginBottom: '10px' }}>💪 FitIndian</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>Made with ❤️ for every Indian who wants to be healthier</p>
      </div>

    </div>
  )
}

export default App