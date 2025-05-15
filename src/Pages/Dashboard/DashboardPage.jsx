import { useTitle } from "../../hooks/useTitle"
import DashboardCard from "./compoents/DashboardCard"
import DashboardEmpty from "./compoents/DashboardEmpty"


const DashboardPage = () => {
    const orders = true
    useTitle("Dashboard")
  return (
    <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-200 my-10 underline underline-offset-0">
                My Dashboard
            </p>
        </section>

        <section>
            {orders && (
                <DashboardCard/>
            )}
        </section>

        <section>
            {!orders && (
                <DashboardEmpty/>
            )}
        </section>
        
    </main>
  )
}

export default DashboardPage
