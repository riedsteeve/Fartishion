import { useMemo, useState } from 'react'
import PartitionCard from '../../../components/atoms/PartitionCard'
import type { PartitionType } from '../../../types/partitionsTypes'

const sample: PartitionType[] = [
  { id: 1, title: 'Jireh', author: 'Chandler Moore', category: 'Gospel', image: '/images/Jireh.svg' },
  { id: 2, title: 'Für Elise', author: 'Beethoven', category: 'Classique', image: '/images/BeethovenFureElise.jpg' },
  { id: 3, title: 'Interstellar', author: 'Hans Zimmer', category: 'Bande originale', image: '/images/interstaller.svg' },
  { id: 4, title: 'Clair de lune', author: 'Debussy', category: 'Classique', image: '/images/Au claire de lune.webp' },
  { id: 5, title: 'Psaume de la Création', author: 'Patrick Richard', category:'Liturgique', image: '/images/psaume-creation.svg'},
  
]

const PartitionsPage = () => {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('Tous')

  const categories = useMemo(() => ['Tous', ...Array.from(new Set(sample.map(s => s.category)))], [])

  const filtered = useMemo(() => {
    return sample.filter(p => {
      if (category !== 'Tous' && p.category !== category) return false
      if (!q) return true
      const s = q.toLowerCase()
      return p.title.toLowerCase().includes(s) || p.author.toLowerCase().includes(s)
    })
  }, [q, category])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Rechercher une partition, un auteur..." className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />

        <select value={category} onChange={e => setCategory(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2">
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <PartitionCard key={p.id} title={p.title} author={p.author} category={p.category} imageUrl={p.image} />
        ))}
      </div>
    </div>
  )
}

export default PartitionsPage
