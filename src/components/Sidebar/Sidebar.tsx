import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

export const sidebarVariants = cva(
  'fixed z-50 flex h-full flex-col bg-white shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        left: 'inset-y-0 left-0 w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'left',
    },
  },
)

export type SidebarSide = NonNullable<VariantProps<typeof sidebarVariants>['side']>

const Root = DialogPrimitive.Root
const Trigger = DialogPrimitive.Trigger
const Close = DialogPrimitive.Close
const Portal = DialogPrimitive.Portal

const Overlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
Overlay.displayName = 'SidebarOverlay'

export interface SidebarContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sidebarVariants> {
  /** Hide the built-in close (X) button. */
  hideClose?: boolean
}

const Content = forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, SidebarContentProps>(
  ({ className, children, side = 'left', hideClose = false, ...props }, ref) => (
    <Portal>
      <Overlay />
      <DialogPrimitive.Content ref={ref} className={cn(sidebarVariants({ side }), className)} {...props}>
        {children}
        {!hideClose && (
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </Portal>
  ),
)
Content.displayName = 'SidebarContent'

const Header = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('shrink-0', className)} {...props} />
  ),
)
Header.displayName = 'SidebarHeader'

const Title = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'border-b border-neutral-200 py-3 text-center text-xl font-semibold leading-none tracking-normal text-neutral-700',
      className,
    )}
    {...props}
  />
))
Title.displayName = 'SidebarTitle'

const Description = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-neutral-500', className)} {...props} />
))
Description.displayName = 'SidebarDescription'

/** Scrollable body region for the sidebar's menu content. */
const Body = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 overflow-y-auto', className)} {...props} />
  ),
)
Body.displayName = 'SidebarBody'

/**
 * Slide-in navigation sidebar built on Radix Dialog.
 *
 * A generic, data-free drawer: compose the menu content (links, {@link Accordion},
 * a search field, etc.) inside `Sidebar.Body`. Router- and fetch-agnostic.
 *
 * @example
 * <Sidebar.Root>
 *   <Sidebar.Trigger>Menu</Sidebar.Trigger>
 *   <Sidebar.Content side="left">
 *     <Sidebar.Header>
 *       <Sidebar.Title>Menu</Sidebar.Title>
 *     </Sidebar.Header>
 *     <Sidebar.Body>…</Sidebar.Body>
 *   </Sidebar.Content>
 * </Sidebar.Root>
 */
export const Sidebar = {
  Root,
  Trigger,
  Close,
  Portal,
  Overlay,
  Content,
  Header,
  Title,
  Description,
  Body,
}
