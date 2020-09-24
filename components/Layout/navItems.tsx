import React, { ReactNode } from 'react'
import {
  LayoutNavigationTree,
  LayoutNavigationItem,
  HomeSVGIcon,
  TvSVGIcon, SubwaySVGIcon
} from 'react-md'

/**
 * Note: The `parentId` **must** be defaulted to `null` for the navigation tree
 * to render correctly since this uses the @react-md/tree package behind the
 * scenes. Each item that has a `parentId` set to `null` will appear at the root
 * level of your navigation tree.
 */
function createRoute(
  pathname: string,
  children: string,
  leftAddon: ReactNode | undefined,
  parentId: string | null = null
): LayoutNavigationItem {
  return {
    itemId: pathname,
    parentId,
    href: pathname,
    children,
    leftAddon,
  }
}

const navItems: LayoutNavigationTree = {
  '/': createRoute('/', 'Home', <HomeSVGIcon />),
  '/route-1': createRoute('/route-1', 'Route 1', <TvSVGIcon />),
  '/customers': createRoute('/customers', 'Customers', <SubwaySVGIcon />),
 
}

export default navItems
