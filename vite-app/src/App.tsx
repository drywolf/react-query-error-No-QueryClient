import { useData_inMyLib } from 'my-lib';
import { useData_inViteApp } from './useData';

function App() {
  const data = useData_inMyLib();
  // const data = useData_inViteApp();

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
