import type { SVGProps } from 'react'

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.0364 0H15.9636C7.14713 0 0 7.14713 0 15.9636V16.0364C0 24.8529 7.14713 32 15.9636 32H16.0364C24.8529 32 32 24.8529 32 16.0364V15.9636C32 7.14713 24.8529 0 16.0364 0Z"
        fill="url(#instagram_gradient)"
      />
      <path
        d="M20.9515 6.50977H11.0498C8.31428 6.50977 6.08887 8.73518 6.08887 11.4707V20.5293C6.08887 23.2648 8.31428 25.4903 11.0498 25.4903H20.9515C23.687 25.4903 25.9124 23.2648 25.9124 20.5293V11.4707C25.9124 8.73518 23.687 6.50977 20.9515 6.50977ZM7.83893 11.4707C7.83893 9.70046 9.27956 8.25983 11.0498 8.25983H20.9515C22.7217 8.25983 24.1624 9.70046 24.1624 11.4707V20.5293C24.1624 22.2996 22.7217 23.7402 20.9515 23.7402H11.0498C9.27956 23.7402 7.83893 22.2996 7.83893 20.5293V11.4707Z"
        fill="white"
      />
      <path
        d="M16.0003 20.6138C18.5441 20.6138 20.6148 18.5442 20.6148 15.9993C20.6148 13.4543 18.5452 11.3848 16.0003 11.3848C13.4553 11.3848 11.3857 13.4543 11.3857 15.9993C11.3857 18.5442 13.4553 20.6138 16.0003 20.6138ZM16.0003 13.1359C17.5799 13.1359 18.8647 14.4207 18.8647 16.0004C18.8647 17.5801 17.5799 18.8648 16.0003 18.8648C14.4206 18.8648 13.1358 17.5801 13.1358 16.0004C13.1358 14.4207 14.4206 13.1359 16.0003 13.1359Z"
        fill="white"
      />
      <path
        d="M21.0421 12.1309C21.7271 12.1309 22.2855 11.5736 22.2855 10.8872C22.2855 10.2009 21.7283 9.64355 21.0421 9.64355C20.356 9.64355 19.7988 10.2009 19.7988 10.8872C19.7988 11.5736 20.356 12.1309 21.0421 12.1309Z"
        fill="white"
      />
      <defs>
        <linearGradient id="instagram_gradient" x1="4.67505" y1="27.3249" x2="27.3249" y2="4.67617" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAD4F" />
          <stop offset="0.35" stopColor="#DD2A7B" />
          <stop offset="0.62" stopColor="#9537B0" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M31.9978 16.0006C31.9978 24.0816 26.0078 30.7623 18.2265 31.8464C17.4989 31.9473 16.7545 32 15.9989 32C15.1267 32 14.2702 31.9305 13.4361 31.796C5.81838 30.5695 0 23.9638 0 16.0006C0 7.16393 7.16368 0 16 0C24.8363 0 32 7.16393 32 16.0006H31.9978Z"
        fill="#1C1C1B"
      />
      <path
        d="M6.48933 7.05664L13.8682 16.9225L6.44336 24.944H8.11489L14.616 17.9214L19.8683 24.944H25.5555L17.7617 14.5233L24.6732 7.05664H23.0017L17.0151 13.5244L12.1777 7.05664H6.49044H6.48933ZM8.94672 8.28763H11.5588L23.0958 23.7131H20.4837L8.94672 8.28763Z"
        fill="white"
      />
    </svg>
  )
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="16" fill="#1877F2" />
      <path
        d="M22.2281 20.625L22.9375 16H18.5V13C18.5 11.7344 19.1188 10.5 21.1063 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5438 6.25C15.8875 6.25 13.5 8.46563 13.5 12.475V16H9.4375V20.625H13.5V31.8062C14.3156 31.9344 15.15 32 16 32C16.85 32 17.6844 31.9344 18.5 31.8062V20.625H22.2281Z"
        fill="white"
      />
    </svg>
  )
}

/** Map of social network name -> icon component (lowercase keys). */
export const socialIcons = {
  instagram: InstagramIcon,
  x: XIcon,
  facebook: FacebookIcon,
} as const

export type SocialIconName = keyof typeof socialIcons
