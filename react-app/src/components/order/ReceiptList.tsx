import styled from 'styled-components';
import Menu from '../../types/Menu';
import Receipt from '../../types/Receipt';
import Title from '../Title';

const Container = styled.div`
  width: 50%;
  padding: 2%;
`;

function ReceiptList({ receipt }: { receipt: Receipt }) {
  return (
    <Container>
      <Title title="영수증" />
      {receipt.id ? (
        <>
          <span>
            주문번호:
            {receipt.id}
          </span>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>품명</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              {receipt.menu?.map((r: Menu, i: number) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td>{r.name}</td>
                  <td>
                    <span>{`${r.price.toLocaleString()}원`}</span>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} />
                <td>
                  <span>{`총 가격: ${receipt.totalPrice?.toLocaleString()}원`}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <span>영수증 나오는 곳</span>
      )}
    </Container>
  );
}

export default ReceiptList;
