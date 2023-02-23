import { ChangeEvent } from 'react';

interface SearchProps {
    shopName: string,
    inputShopName: (e: ChangeEvent<HTMLInputElement>) => void; }

export default function SearchInput({ shopName, inputShopName }:SearchProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <label htmlFor="input-검색" style={{ paddingRight: '1rem' }}>검색</label>
      <input id="input-검색" type="text" placeholder="식당 이름" value={shopName} onChange={inputShopName} />
    </div>
  );
}
