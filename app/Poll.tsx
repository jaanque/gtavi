"use client"

import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

export default function Poll() {
  const [voted, setVoted] = useState(false)
  const [results, setResults] = useState({ yes: 0, no: 0 })
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase.from('gta_vi_poll').select('vote')
      if (data) {
        const yesVotes = data.filter((row) => row.vote === 'yes').length
        const noVotes = data.filter((row) => row.vote === 'no').length
        setResults({ yes: yesVotes, no: noVotes })
        setTotalVotes(data.length)
      }
    }
    fetchResults()
  }, [voted])

  const handleVote = async (vote: 'yes' | 'no') => {
    setVoted(true)
    await supabase.from('gta_vi_poll').insert([{ vote }])
  }

  const yesPercentage = totalVotes > 0 ? (results.yes / totalVotes) * 100 : 0
  const noPercentage = totalVotes > 0 ? (results.no / totalVotes) * 100 : 0

  return (
    <div className="text-white text-center mt-8 border-2 border-gta-pink p-4 rounded-lg">
      <h2 className="text-2xl mb-4">Are you excited for GTA VI?</h2>
      {!voted ? (
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleVote('yes')}
            className="bg-gta-pink text-white font-bold py-2 px-4 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => handleVote('no')}
            className="bg-gta-pink text-white font-bold py-2 px-4 rounded"
          >
            No
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-2">
            <p>Yes: {yesPercentage.toFixed(2)}%</p>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gta-pink h-4 rounded-full"
                style={{ width: `${yesPercentage}%` }}
              ></div>
            </div>
          </div>
          <div>
            <p>No: {noPercentage.toFixed(2)}%</p>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gta-pink h-4 rounded-full"
                style={{ width: `${noPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
