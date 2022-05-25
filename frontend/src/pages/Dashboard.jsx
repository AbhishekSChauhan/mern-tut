import { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayGoals from '../components/DisplayGoals'
import GoalForm from '../components/GoalForm'
import { AuthContext } from '../Context/Auth/AuthContext'


const Dashboard = () => {
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user,navigate])
  

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section> 

      <GoalForm />
      <DisplayGoals />
    </>
  )
}

export default Dashboard