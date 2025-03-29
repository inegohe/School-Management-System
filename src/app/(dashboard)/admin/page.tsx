import AttendanceChart from "@/components/AttendanceChart"
import Cards from "@/components/Cards"
import CountChart from "@/components/CountChart"
import Header from "@/components/Header"

const AdminPage = () => {
  return (
    <main className="flex flex-col overflow-scroll gap-4">
      <Header />
      <section className="w-full flex gap-2 flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col gap-4 p-2">
          <Cards />
          <div className="flex gap-2 w-full flex-col md:flex-row">
            <CountChart />
            <AttendanceChart />
          </div>
        </div>
        <div className="md:w-1/3"></div>
      </section>
    </main>
  )
}

export default AdminPage