import { CSSProperties } from 'react';

declare global {
  type Styles = Record<string, CSSProperties>

  type UnknownObject = Record<string, unknown>
}
