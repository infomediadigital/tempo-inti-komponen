// Ambient declarations for asset imports bundled by Vite.
declare module '*.css' {
  const content: string
  export default content
}
// `?inline` forces base64 data-URI inlining so the package ships self-contained.
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.svg?inline' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.png?inline' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.webp?inline' {
  const src: string
  export default src
}
