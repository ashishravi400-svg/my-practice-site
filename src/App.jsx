function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '50px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>👨‍💻</div>
        <h1 style={{ color: '#333', fontSize: '32px', marginBottom: '10px' }}>
          Ashish Ravi
        </h1>
        <p style={{ color: '#667eea', fontWeight: 'bold', fontSize: '16px', marginBottom: '20px' }}>
          Frontend Developer in Training 🚀
        </p>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
          Learning React, building real websites, and growing every day.
          Currently working on samridhimapc.com
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <span style={{ background: '#667eea', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>React</span>
          <span style={{ background: '#667eea', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>Vite</span>
          <span style={{ background: '#667eea', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>Tailwind</span>
        </div>
      </div>
    </div>
  )
}

export default App