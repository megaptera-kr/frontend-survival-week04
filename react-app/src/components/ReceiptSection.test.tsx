import { render } from '@testing-library/react';
import Receipt from '../types/Receipt';

import ReceiptSection from './ReceiptSection';

let receipt: Receipt;

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
