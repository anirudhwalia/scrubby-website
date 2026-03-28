// Shim for react-router-dom — replaces Link/Navigate with native HTML equivalents
// This allows existing React page components to work in Astro without modification

import { createElement, useEffect, useState } from 'react'

// Link → <a> tag
export function Link({ to, children, className, style, onClick, ...rest }) {
  const handleClick = (e) => {
    if (onClick) onClick(e)
    // Let the browser handle navigation naturally
  }
  return createElement('a', { href: to, className, style, onClick: handleClick, ...rest }, children)
}

// Navigate → redirect via window.location
export function Navigate({ to, replace }) {
  useEffect(() => {
    if (replace) {
      window.location.replace(to)
    } else {
      window.location.href = to
    }
  }, [to, replace])
  return null
}

// useParams → parse from URL
export function useParams() {
  const [params, setParams] = useState({})
  useEffect(() => {
    const path = window.location.pathname
    // Extract slug from common patterns
    const parts = path.split('/').filter(Boolean)
    // For /blog/:slug, /faq/:slug, /blog/category/:slug, /blog/author/:slug
    if (parts.length >= 2) {
      setParams({ slug: parts[parts.length - 1] })
    }
  }, [])
  return params
}

// useLocation → window.location
export function useLocation() {
  const [location, setLocation] = useState({
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    search: typeof window !== 'undefined' ? window.location.search : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
  })
  return location
}

// useNavigate → return function that sets window.location
export function useNavigate() {
  return (to) => {
    window.location.href = to
  }
}

// Outlet — not needed in Astro (layouts handle this)
export function Outlet() {
  return null
}
