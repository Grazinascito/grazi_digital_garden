import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Self-contained function body so Explorer can serialize it to the browser
// (arrow functions from TS/esbuild break client-side with undefined __name helpers).
const mapOfContentsSortFn = new Function(
  "a",
  "b",
  `
  var order = ["Sobre mim", "Computação", "Carreira", "Engenharia de Software", "UI/UX Design"];
  function mocIndex(node) {
    var slug = (node.data && node.data.slug) || "";
    if (slug.indexOf("map-of-contents/") === -1 || slug.slice(-6) === "/index") return null;
    var idx = order.indexOf(node.displayName);
    return idx === -1 ? null : idx;
  }
  var aOrder = mocIndex(a);
  var bOrder = mocIndex(b);
  if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
  if (aOrder !== null) return -1;
  if (bOrder !== null) return 1;
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" });
  }
  if (!a.isFolder && b.isFolder) return 1;
  return -1;
`,
) as (a: { isFolder: boolean; displayName: string; data?: { slug?: string } | null }, b: {
  isFolder: boolean
  displayName: string
  data?: { slug?: string } | null
}) => number

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: mapOfContentsSortFn,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
