import { UserContext } from '@/utils/Context'
import React, { useContext } from 'react'
import { FaFrown, FaMeh, FaSmile } from 'react-icons/fa'
const ScoreCard = () => {
  const { score, total } = useContext(UserContext)
  // Calculate percentage score
  const percentageScore = (score / total) * 100
  // Determine icon based on score percentage
  let icon
  if (percentageScore < 50) {
    icon = <FaFrown size={50} className="text-red-500" />
  } else if (percentageScore >= 50 && percentageScore < 75) {
    icon = <FaMeh size={50} className="text-yellow-500" />
  } else if (percentageScore >= 75 && percentageScore < 85) {
    icon = <FaSmile size={50} className="text-blue-500" />
  } else {
    icon = <FaSmile size={50} className="text-green-500" />
  }

  return (
    <div className="text-center mb-4">
      <p className="text-xl font-semibold mb-2">
        Your Score: {score} / {total}
      </p>
      <div className=" flex justify-center items-center"> {icon}</div>
    </div>
  )
}

export default ScoreCard
