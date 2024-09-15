import { Dialog, DialogTrigger } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <>
      <Dialog>
        {/* <EmptyGoals /> */}
        <CreateGoal />
        <Summary />
      </Dialog>
    </>
  )
}
