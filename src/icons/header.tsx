import type { SVGProps } from 'react'

/** Combined menu + search icon (from the mobile header's Menu.svg). */
export function MenuSearchIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M2 14.5H6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 23H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16.4144 16.8237C19.8511 17.5048 23.1892 15.271 23.8704 11.8343C24.5515 8.39758 22.3176 5.05942 18.8809 4.3783C15.4442 3.69718 12.106 5.93102 11.4249 9.36774C10.7438 12.8044 12.9777 16.1426 16.4144 16.8237Z"
        stroke="currentColor"
        strokeWidth="1.77551"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21.1758 15.8735L24.0626 20.1874" stroke="currentColor" strokeWidth="1.77551" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** User / account icon (from the mobile header's User Icon.svg). */
export function UserCircleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17.5C16.4162 17.5 18.375 15.5412 18.375 13.125C18.375 10.7088 16.4162 8.75 14 8.75C11.5838 8.75 9.625 10.7088 9.625 13.125C9.625 15.5412 11.5838 17.5 14 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.97852 21.8065C7.63762 20.5107 8.64246 19.4225 9.8818 18.6624C11.1211 17.9023 12.5466 17.5 14.0005 17.5C15.4543 17.5 16.8798 17.9023 18.1192 18.6624C19.3585 19.4224 20.3633 20.5106 21.0225 21.8065"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
