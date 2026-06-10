import { useState } from 'react'

const workouts = [
  { emoji: '🏃', name: 'Morning Run', duration: '30 min', calories: '300 kcal', level: 'Beginner' },
  { emoji: '💪', name: 'Push Pull Legs', duration: '45 min', calories: '400 kcal', level: 'Intermediate' },
  { emoji: '🧘', name: 'Yoga Flow', duration: '20 min', calories: '150 kcal', level: 'Beginner' },
  { emoji: '🏋️', name: 'Weight Training', duration: '60 min', calories: '500 kcal', level: 'Advanced' },
  { emoji: '🚴', name: 'Cycling', duration: '40 min', calories: '350 kcal', level: 'Intermediate' },
  { emoji: '🤸', name: 'HIIT Circuit', duration: '25 min', calories: '450 kcal', level: 'Advanced' },
]

const meals = [
  { time: 'Early Morning', emoji: '🌅', items: ['Warm lemon water', '4 soaked almonds', '2 walnuts'], calories: '50 kcal', tip: 'Boosts metabolism instantly' },
  { time: 'Breakfast', emoji: '🍳', items: ['3 egg whites omelette', '2 multigrain toast', '1 banana', 'Green tea'], calories: '350 kcal', tip: 'High protein start to the day' },
  { time: 'Mid Morning', emoji: '🍎', items: ['1 apple or pear', 'Handful of roasted chana'], calories: '150 kcal', tip: 'Keeps hunger away till lunch' },
  { time: 'Lunch', emoji: '🍱', items: ['2 roti (wheat)', '1 bowl dal', '1 bowl sabzi', 'Salad', 'Curd'], calories: '500 kcal', tip: 'Balanced Indian thali for fat loss' },
  { time: 'Evening Snack', emoji: '🥜', items: ['Sprouts chaat', 'Coconut water', 'Makhana (fox nuts)'], calories: '200 kcal', tip: 'Perfect pre-workout snack' },
  { time: 'Dinner', emoji: '🌙', items: ['2 roti', '1 bowl dal or paneer', '1 bowl sabzi', 'Salad'], calories: '450 kcal', tip: 'Light but nutritious dinner' },
]

const testimonials = [
  { name: 'Rahul Sharma', city: 'Delhi', result: 'Lost 12 kg in 3 months', emoji: '👨', review: 'FitIndian changed my life completely. The Indian meal plans are so practical and easy to follow!' },
  { name: 'Priya Patel', city: 'Mumbai', result: 'Lost 8 kg in 2 months', emoji: '👩', review: 'Finally a fitness website that understands Indian food and lifestyle. No more bland chicken salads!' },
  { name: 'Amit Singh', city: 'Jaipur', result: 'Lost 15 kg in 4 months', emoji: '👨', review: 'The workout tracker kept me motivated every single day. Best decision of my life!' },
  { name: 'Sneha Reddy', city: 'Hyderabad', result: 'Lost 6 kg in 6 weeks', emoji: '👩', review: 'Simple, practical, and made for us Indians. I recommend FitIndian to everyone I know!' },
]

const exercises = [
  { name: 'Squats', muscle: 'Legs & Glutes', sets: '4 x 15', tip: 'Keep your back straight and go below parallel', emoji: '🦵', level: '🟢 Beginner' },
  { name: 'Push Ups', muscle: 'Chest & Arms', sets: '3 x 12', tip: 'Keep core tight and elbows at 45 degrees', emoji: '💪', level: '🟢 Beginner' },
  { name: 'Plank', muscle: 'Core & Abs', sets: '3 x 45 sec', tip: 'Keep hips level, breathe steadily', emoji: '🏋️', level: '🟢 Beginner' },
  { name: 'Burpees', muscle: 'Full Body', sets: '4 x 10', tip: 'Explosive jump at the top for max burn', emoji: '🔥', level: '🔴 Advanced' },
  { name: 'Lunges', muscle: 'Legs & Balance', sets: '3 x 12 each', tip: 'Step wide enough so knee does not cross toe', emoji: '🚶', level: '🟡 Intermediate' },
  { name: 'Mountain Climbers', muscle: 'Core & Cardio', sets: '3 x 30 sec', tip: 'Keep hips down and move fast', emoji: '⛰️', level: '🟡 Intermediate' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('fat-loss')
  const [trackerLog, setTrackerLog] = useState([])
  const [selectedWorkout, setSelectedWorkout] = useState('')
  const [workoutDone, setWorkoutDone] = useState(false)

  const logWorkout = () => {
    if (!selectedWorkout) return
    const found = workouts.find(w => w.name === selectedWorkout)
    setTrackerLog([{ ...found, date: new Date().toLocaleDateString('en-IN') }, ...trackerLog])
    setWorkoutDone(true)
    setTimeout(() => setWorkoutDone(false), 3000)
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* NAVBAR */}
      <nav style={{
        background: '#0a0a0a',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.5)'
      }}>
        <h2 style={{ color: '#f5a623', margin: 0, fontSize: '22px', letterSpacing: '1px' }}>💪 FitIndian</h2>
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
          {['Workouts', 'Diet', 'Tracker', 'Exercises', 'Results'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
              onMouseEnter={e => e.target.style.color = '#f5a623'}
              onMouseLeave={e => e.target.style.color = '#ccc'}
            >{item}</a>
          ))}
        </div>
      </nav>

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
        {/* Background circles decoration */}
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
            <a href="#workouts" style={{
              background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
              color: '#111',
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(245,166,35,0.4)'
            }}>Start Free Today 🚀</a>
            <a href="#tracker" style={{
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.3)',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '16px'
            }}>Track Workout ▶</a>
          </div>

          {/* Video placeholder */}
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
                cursor: 'pointer', flexShrink: 0
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

      {/* WORKOUTS */}
      <div id="workouts" style={{ background: '#f8f8f8', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Get Moving</p>
        <h2 style={{ fontSize: '40px', color: '#111', marginBottom: '15px', fontWeight: '800' }}>Workout Programs</h2>
        <p style={{ color: '#666', marginBottom: '50px', fontSize: '16px' }}>Choose your goal and start today — no equipment needed for beginners!</p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {['fat-loss', 'weight-loss', 'strength', 'beginners'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '10px 25px',
              borderRadius: '25px',
              border: 'none',
              background: activeTab === tab ? 'linear-gradient(90deg, #f5a623, #ff6b35)' : '#eee',
              color: activeTab === tab ? '#111' : '#666',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px',
              textTransform: 'capitalize'
            }}>{tab.replace('-', ' ')}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {workouts.map((w, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              textAlign: 'left',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
              transition: 'transform 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{w.emoji}</div>
              <h3 style={{ margin: '0 0 10px 0', color: '#111' }}>{w.name}</h3>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
                <span style={{ background: '#fff3e0', color: '#f5a623', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>⏱ {w.duration}</span>
                <span style={{ background: '#fce4ec', color: '#e91e63', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>🔥 {w.calories}</span>
                <span style={{ background: '#e8f5e9', color: '#4caf50', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{w.level}</span>
              </div>
              <button style={{
                background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
                border: 'none',
                color: '#111',
                padding: '10px 20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '13px',
                width: '100%'
              }}>Start Workout →</button>
            </div>
          ))}
        </div>
      </div>

      {/* EXERCISES GUIDE */}
      <div id="exercises" style={{ background: '#111', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Learn Properly</p>
        <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '15px', fontWeight: '800' }}>Exercise Guide</h2>
        <p style={{ color: '#aaa', marginBottom: '50px', fontSize: '16px' }}>Master the basics — proper form = better results and zero injuries</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {exercises.map((ex, i) => (
            <div key={i} style={{
              background: '#1a1a1a',
              borderRadius: '15px',
              padding: '25px',
              textAlign: 'left',
              border: '1px solid #333',
              transition: 'border-color 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#f5a623'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '35px' }}>{ex.emoji}</span>
                <span style={{ fontSize: '12px' }}>{ex.level}</span>
              </div>
              <h3 style={{ color: 'white', margin: '0 0 5px 0' }}>{ex.name}</h3>
              <p style={{ color: '#f5a623', fontSize: '13px', margin: '0 0 10px 0', fontWeight: 'bold' }}>🎯 {ex.muscle}</p>
              <p style={{ color: '#888', fontSize: '13px', margin: '0 0 15px 0' }}>📋 Sets: {ex.sets}</p>
              <div style={{ background: '#111', borderRadius: '10px', padding: '12px', borderLeft: '3px solid #f5a623' }}>
                <p style={{ color: '#ccc', fontSize: '13px', margin: 0 }}>💡 <strong>Pro Tip:</strong> {ex.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIET PLAN */}
      <div id="diet" style={{ background: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Eat Right</p>
        <h2 style={{ fontSize: '40px', color: '#111', marginBottom: '15px', fontWeight: '800' }}>Indian Fat Loss Diet Plan</h2>
        <p style={{ color: '#666', marginBottom: '15px', fontSize: '16px' }}>Full day meal plan designed for Indian lifestyle — dal roti included! 🍱</p>
        <div style={{
          display: 'inline-block',
          background: '#fff3e0',
          border: '1px solid #f5a623',
          borderRadius: '10px',
          padding: '10px 25px',
          marginBottom: '50px'
        }}>
          <span style={{ color: '#f5a623', fontWeight: 'bold' }}>Total Daily Calories: ~1700 kcal | Protein: High | Carbs: Moderate | Fat: Low</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          {meals.map((meal, i) => (
            <div key={i} style={{
              background: '#f9f9f9',
              borderRadius: '15px',
              padding: '25px',
              textAlign: 'left',
              border: '1px solid #eee',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div>
                  <span style={{ fontSize: '30px' }}>{meal.emoji}</span>
                  <h3 style={{ margin: '5px 0 0 0', color: '#111', fontSize: '16px' }}>{meal.time}</h3>
                </div>
                <span style={{ background: '#fff3e0', color: '#f5a623', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{meal.calories}</span>
              </div>
              <ul style={{ margin: '0 0 15px 0', paddingLeft: '20px' }}>
                {meal.items.map((item, j) => (
                  <li key={j} style={{ color: '#444', fontSize: '14px', marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
              <div style={{ background: '#e8f5e9', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✅</span>
                <p style={{ color: '#2e7d32', fontSize: '12px', margin: 0, fontWeight: '500' }}>{meal.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WORKOUT TRACKER */}
      <div id="tracker" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Stay Consistent</p>
        <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '15px', fontWeight: '800' }}>Workout Tracker</h2>
        <p style={{ color: '#aaa', marginBottom: '40px', fontSize: '16px' }}>Log your daily workouts and stay on track!</p>

        <div style={{ maxWidth: '500px', margin: '0 auto 40px auto' }}>
          <select
            value={selectedWorkout}
            onChange={e => setSelectedWorkout(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '12px',
              border: '2px solid #333',
              background: '#1a1a1a',
              color: 'white',
              fontSize: '16px',
              marginBottom: '15px',
              outline: 'none'
            }}
          >
            <option value="">-- Select Today's Workout --</option>
            {workouts.map((w, i) => (
              <option key={i} value={w.name}>{w.emoji} {w.name} ({w.duration})</option>
            ))}
          </select>

          <button onClick={logWorkout} style={{
            width: '100%',
            background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
            border: 'none',
            color: '#111',
            padding: '15px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {workoutDone ? '✅ Logged! Great work!' : '💪 Log This Workout'}
          </button>
        </div>

        {trackerLog.length > 0 && (
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Your Workout History</h3>
            {trackerLog.map((log, i) => (
              <div key={i} style={{
                background: '#1a1a1a',
                borderRadius: '12px',
                padding: '15px 20px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #333'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '25px' }}>{log.emoji}</span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ color: 'white', margin: 0, fontWeight: 'bold', fontSize: '14px' }}>{log.name}</p>
                    <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>{log.duration} · {log.calories}</p>
                  </div>
                </div>
                <span style={{ color: '#f5a623', fontSize: '12px' }}>{log.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TESTIMONIALS */}
      <div id="results" style={{ background: '#f8f8f8', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#f5a623', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>Real People Real Results</p>
        <h2 style={{ fontSize: '40px', color: '#111', marginBottom: '50px', fontWeight: '800' }}>Success Stories 🏆</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px 25px',
              textAlign: 'left',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid #eee'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{t.emoji}</div>
              <div style={{ background: '#fff3e0', borderRadius: '25px', padding: '6px 15px', display: 'inline-block', marginBottom: '15px' }}>
                <span style={{ color: '#f5a623', fontWeight: 'bold', fontSize: '13px' }}>🔥 {t.result}</span>
              </div>
              <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>"{t.review}"</p>
              <div>
                <p style={{ color: '#111', fontWeight: 'bold', margin: 0, fontSize: '15px' }}>{t.name}</p>
                <p style={{ color: '#999', margin: 0, fontSize: '13px' }}>📍 {t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #f5a623, #ff6b35)',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#111', fontSize: '42px', fontWeight: '800', marginBottom: '15px' }}>
          Ready to Transform? 💪
        </h2>
        <p style={{ color: '#333', fontSize: '18px', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
          Join 10,000+ Indians who are already on their fitness journey with FitIndian!
        </p>
        <a href="#workouts" style={{
          background: '#111',
          color: 'white',
          textDecoration: 'none',
          padding: '18px 50px',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>Start For Free Today 🚀</a>
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