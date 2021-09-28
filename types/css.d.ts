declare module '*.css' {
  const classNames: { [className: string]: string };
  export default classNames;
}

declare module '*.scss' {
  const classNames: { [className: string]: string };
  export default classNames;
}