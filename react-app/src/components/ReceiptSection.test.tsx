import { render } from '@testing-library/react';
import Receipt from '../types/Receipt';

import ReceiptSection from './ReceiptSection';

const receipt: Receipt = {
  id: '12345678',
  menu: [
    { id: '10', name: '가라아게카레', price: 14000 },
    { id: '13', name: '닭가슴살카레', price: 13000 },
  ],
  totalPrice: 27000,
};

const context = describe;

describe('ReceiptSection', () => {
  function renderReceiptSection() {
    render(<ReceiptSection receipt={receipt} />);
  }

  context('추후 작성', () => {
    it('추후 작성', () => {
      renderReceiptSection();
    });
  });
});
