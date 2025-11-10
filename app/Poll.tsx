"use client"

import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

export default function Poll() {
  const [voted, setVoted] = useState(false)
  const [results, setResults] = useState({ yes: 0, no: 0 })
  const [totalVotes, setTotalVotes] = useState(0)
  const [animatedYesPercentage, setAnimatedYesPercentage] = useState(0)
  const [animatedNoPercentage, setAnimatedNoPercentage] = useState(0)

  const yesPercentage = totalVotes > 0 ? (results.yes / totalVotes) * 100 : 0
  const noPercentage = totalVotes > 0 ? (results.no / totalVotes) * 100 : 0

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

  useEffect(() => {
    if (voted) {
      setTimeout(() => {
        setAnimatedYesPercentage(yesPercentage)
        setAnimatedNoPercentage(noPercentage)
      }, 100)
    }
  }, [voted, yesPercentage, noPercentage])

  const handleVote = async (vote: 'yes' | 'no') => {
    setVoted(true)
    await supabase.from('gta_vi_poll').insert([{ vote }])
  }

  return (
    <div className="text-white text-center mt-8 border-2 border-gta-pink p-4 rounded-lg">
      <h2 className="text-2xl mb-4">Are you excited for GTA VI?</h2>
      {!voted ? (
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleVote('yes')}
            className="bg-gta-pink text-white font-bold py-2 px-4 rounded border-2 border-white transition-opacity duration-300 hover:opacity-80"
          >
            Yes
          </button>
          <button
            onClick={() => handleVote('no')}
            className="bg-gta-pink text-white font-bold py-2 px-4 rounded border-2 border-white transition-opacity duration-300 hover:opacity-80"
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
                className="bg-gta-pink h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${animatedYesPercentage}%` }}
              ></div>
            </div>
          </div>
          <div>
            <p>No: {noPercentage.toFixed(2)}%</p>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gta-pink h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${animatedNoPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
