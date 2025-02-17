import Navbar from "./Navbar/Navbar"
import Progress from "./Progress/Progress"
import Charts from "./Charts/Charts"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Navbar/>
        <Progress/>
        <Charts/>
    </div>
  )
}

export default Dashboard
