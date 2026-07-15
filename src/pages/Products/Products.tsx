import type { ProductsNavItem } from "../../types/navigation"
import { Brain, Link2 } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "AI & Data Science": <Brain className="w-7 h-7 text-indigo-600" />,
  "Blockchain": <Link2 className="w-7 h-7 text-amber-600" />,
}

function Products({ setCurrentPage }: any) {
  const productCards: ProductsNavItem[] = [
    {
      label: "AI Medical Diagnoses",
      description: "Identifying Medical Diagnoses by Image-Based Deep Learning.",
      href: "/ai-medical-diagnoses",
      parentHref: "/products",
      groupLabel: "AI & Data Science",
      pageId: "ai-medical-diagnoses",
    },
    {
      label: "Token Creator",
      description: "Create and manage custom tokens on the blockchain.",
      href: "/token-creator",
      parentHref: "/products",
      groupLabel: "Blockchain",
      pageId: "token-creator",
    },
  ]

  const handleClick = (e: React.MouseEvent, card: ProductsNavItem) => {
    e.preventDefault()
    history.pushState(null, "", card.parentHref + card.href)
    setCurrentPage(card.pageId)
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">Products</h1>
      <div className="space-y-4">
        {productCards.map((card) => (
          <a
            key={card.label}
            href={card.parentHref + card.href}
            onClick={(e) => handleClick(e, card)}
            className="flex items-center gap-5 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 shrink-0">
              {iconMap[card.groupLabel] ?? "📦"}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-gray-900">{card.label}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{card.description}</p>
            </div>
            <span className="hidden sm:block text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
              {card.groupLabel}
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}

export default Products