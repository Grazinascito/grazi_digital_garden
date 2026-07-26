import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

const MAP_OF_CONTENTS_ORDER = [
  "Sobre mim",
  "Computação",
  "Carreira",
  "Engenharia de Software",
  "UI/UX Design",
]

function defaultExplorerSort(
  a: { isFolder: boolean; displayName: string },
  b: { isFolder: boolean; displayName: string },
): number {
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }

  if (!a.isFolder && b.isFolder) return 1
  return -1
}

function mocOrderIndex(node: {
  data?: { slug?: string } | null
  displayName: string
}): number | null {
  const slug = node.data?.slug ?? ""
  if (!slug.includes("map-of-contents/") || slug.endsWith("/index")) return null
  const idx = MAP_OF_CONTENTS_ORDER.indexOf(node.displayName)
  return idx === -1 ? null : idx
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (
    a: { isFolder: boolean; displayName: string; data?: { slug?: string } | null },
    b: { isFolder: boolean; displayName: string; data?: { slug?: string } | null },
  ) => {
    const aOrder = mocOrderIndex(a)
    const bOrder = mocOrderIndex(b)
    if (aOrder !== null && bOrder !== null) return aOrder - bOrder
    if (aOrder !== null) return -1
    if (bOrder !== null) return 1
    return defaultExplorerSort(a, b)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
