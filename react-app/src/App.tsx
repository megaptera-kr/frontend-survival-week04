import { StrictMode } from 'react';
import { useDocumentTitle } from 'usehooks-ts';
import FoodCourtKiosk from './components/FoodCourtKiosk';

export default function App() {
  useDocumentTitle('FOOD COURT KIOSK');
  return (
    <StrictMode>
      <div />
      <FoodCourtKiosk />
    </StrictMode>
  );
}
