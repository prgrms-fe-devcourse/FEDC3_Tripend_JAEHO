import { CSSProperties, HTMLAttributes } from 'react';

export interface SkeletonProps {
  line: number;
  props?: HTMLAttributes<HTMLDivElement>;
  style?: CSSProperties;
}
