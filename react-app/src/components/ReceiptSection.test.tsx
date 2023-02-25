import { render } from '@testing-library/react';

import ReceiptSection from './ReceiptSection';

const context = describe;
describe('ReceiptSection', () => {
  function renderReceiptSection() {
    render(<ReceiptSection />);
  }

  context('추후 작성', () => {
    it('추후 작성', () => {
      renderReceiptSection();
    });
  });
});
