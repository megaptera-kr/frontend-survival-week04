import React from 'react';

interface CenterProps extends Omit<HTMLDivElement, 'children' | 'id'> {
  type: 'center' | 'row' | 'column';
  children: React.ReactNode;

  id: string;
}

function Stack({ children, type, id }: Partial<CenterProps>) {
  return (
    <div className={`${type}-div`} id={id}>
      {children}
    </div>
  );
}

export default Stack;
