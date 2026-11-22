import StatsCard from "../components/StatsCard";
function Dashboard(){
    return (
        <div>
            <h1>Admin Dashbord</h1>
            <StatsCard title="students" value={120}/>
            <StatsCard title="courses" value={8}/>
            <StatsCard title="revenue" value={50000}/>
        </div>
    )
}
export default Dashboard;