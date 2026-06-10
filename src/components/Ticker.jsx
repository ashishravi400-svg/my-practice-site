import { useState, useEffect } from 'react'

const tips = [
  "💪 Do 10 push-ups every morning — builds chest & arms, burns 7 calories instantly",
  "🦵 10 squats every hour at office — reduces back pain by 40% — WHO recommended",
  "💧 Drink water every 30 mins — boosts metabolism by 30% — minimum 3 litres daily",
  "🧘 Neck roll every 2 hours at desk — prevents cervical pain for office workers",
  "🚶 Walk 250 steps every hour — American Heart Association minimum recommendation",
  "🍱 Eat dinner before 8 PM — improves fat burning by 20% during sleep",
  "😴 Sleep 7-8 hours daily — growth hormone releases ONLY during deep sleep",
  "🌅 10 min morning sunlight daily — natural Vitamin D, boosts mood and immunity",
  "🧘 Breathe 4-7-8 method — inhale 4 sec, hold 7, exhale 8 — reduces stress hormone",
  "🪑 Stand up every 45 mins — sitting over 8 hrs daily increases heart disease risk by 147%",
  "💪 150 mins exercise per week — WHO global standard for good health",
  "🥗 Eat protein in every meal — prevents muscle loss and keeps you full longer",
  "🍌 Eat banana before workout — natural energy, potassium prevents muscle cramps",
  "🔥 10 min HIIT burns more fat than 30 min slow cardio — proven by science",
  "🧴 Apply sunscreen daily — UV rays damage skin even on cloudy days",
  "🥜 Eat handful of nuts daily — healthy fats reduce belly fat over time",
  "📵 No screen 1 hour before sleep — blue light destroys melatonin sleep hormone",
  "🦷 Brush teeth after dinner — prevents midnight hunger cravings by 60%",
  "🧗 Take stairs always — burns 8x more calories than elevator per floor",
  "🌿 Add haldi to milk — curcumin reduces inflammation and joint pain naturally",
]

export default function Ticker() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const fullText = tips.join('   ★   ')
    const interval = setInterval(() => {
      setPosition(prev => {
        if (prev <= -(fullText.length * 8)) return 0
        return prev - 1
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  const fullText = tips.join('   ★   ')

  return (
    <div style={{
      background: 'linear-gradient(90deg, #f5a623, #ff6b35)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '8px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1001,
      boxShadow: '0 2px 10px rgba(245,166,35,0.4)'
    }}>
      <div style={{
        display: 'inline-block',
        transform: `translateX(${position}px)`,
        fontSize: '13px',
        fontWeight: '600',
        color: '#111',
        letterSpacing: '0.3px'
      }}>
        {fullText}
      </div>
    </div>
  )
}