import React from 'react';
export default function IconMenu({
  width = 24,
  height = 24,
  className,
  ...restProps
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...restProps}>
        <path d="M2 8H22V10H2V8Z" fill="currentColor"/>
        <path d="M2 14H22V16H2V14Z" fill="currentColor"/>
    </svg>
  );
}
