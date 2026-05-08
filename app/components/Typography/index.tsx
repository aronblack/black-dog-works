import { type JSX, type ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/utils'

// ---------------------------------------------------------------------------
// Heading 1  — hero titles (Barlow 900)
// ---------------------------------------------------------------------------
type Heading1Props = ComponentPropsWithoutRef<'h1'> & { as?: keyof JSX.IntrinsicElements }

export function Heading1({ as: Tag = 'h1', className, ...props }: Heading1Props) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-4xl font-black tracking-tight md:text-6xl', className)}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// Heading 2  — section headings (Barlow 900)
// ---------------------------------------------------------------------------
type Heading2Props = ComponentPropsWithoutRef<'h2'> & { as?: keyof JSX.IntrinsicElements }

export function Heading2({ as: Tag = 'h2', className, ...props }: Heading2Props) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-3xl font-black md:text-4xl', className)}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// Heading 3  — card / article headings (Barlow 900)
// ---------------------------------------------------------------------------
type Heading3Props = ComponentPropsWithoutRef<'h3'> & { as?: keyof JSX.IntrinsicElements }

export function Heading3({ as: Tag = 'h3', className, ...props }: Heading3Props) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-xl font-black', className)}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// Eyebrow  — small uppercase label above headings (Barlow 900)
// ---------------------------------------------------------------------------
type EyebrowProps = ComponentPropsWithoutRef<'p'> & { as?: keyof JSX.IntrinsicElements }

export function Eyebrow({ as: Tag = 'p', className, ...props }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'font-[family-name:var(--font-roboto-slab)] text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400',
        className,
      )}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// Body  — standard paragraph text (Barlow 400)
// ---------------------------------------------------------------------------
type BodyProps = ComponentPropsWithoutRef<'p'> & { as?: keyof JSX.IntrinsicElements }

export function Body({ as: Tag = 'p', className, ...props }: BodyProps) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-base font-normal leading-7', className)}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// BodySmall  — captions, meta, secondary text (Barlow 400)
// ---------------------------------------------------------------------------
type BodySmallProps = ComponentPropsWithoutRef<'p'> & { as?: keyof JSX.IntrinsicElements }

export function BodySmall({ as: Tag = 'p', className, ...props }: BodySmallProps) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-sm font-normal leading-6', className)}
      {...(props as object)}
    />
  )
}

// ---------------------------------------------------------------------------
// Label  — form labels, small UI labels (Barlow 500)
// ---------------------------------------------------------------------------
type LabelTypoProps = ComponentPropsWithoutRef<'span'> & { as?: keyof JSX.IntrinsicElements }

export function LabelTypo({ as: Tag = 'span', className, ...props }: LabelTypoProps) {
  return (
    <Tag
      className={cn('font-[family-name:var(--font-roboto-slab)] text-sm font-medium', className)}
      {...(props as object)}
    />
  )
}
