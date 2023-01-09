import AppRouter from './Router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
};

export default App;
