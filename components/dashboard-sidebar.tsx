"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, FileText, CreditCard, Settings, Users, BarChart3, LogOut, DollarSign } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "الرئيسية",
    href: "/dashboard",
    icon: Home,
    description: "لوحة التحكم الرئيسية",
  },
  {
    title: "الدورات",
    href: "/dashboard/courses",
    icon: BookOpen,
    description: "إدارة الدورات التعليمية",
  },
  {
    title: "المنشورات",
    href: "/dashboard/posts",
    icon: FileText,
    description: "إدارة المنشورات والمحتوى",
  },
  {
    title: "الخطط",
    href: "/dashboard/plans",
    icon: CreditCard,
    description: "خطط الاشتراك والأسعار",
  },
  {
    title: "الأرباح",
    href: "/dashboard/earnings",
    icon: DollarSign,
    description: "تقارير الأرباح والمدفوعات",
  },
  {
    title: "الإحصائيات",
    href: "/dashboard/analytics",
    icon: BarChart3,
    description: "إحصائيات الأداء والتحليلات",
  },
  {
    title: "المجتمع",
    href: "/dashboard/community",
    icon: Users,
    description: "إدارة المجتمع والطلاب",
  },
  {
    title: "الإعدادات",
    href: "/dashboard/settings",
    icon: Settings,
    description: "إعدادات الحساب والتطبيق",
  },
]

interface DashboardSidebarProps {
  className?: string
}

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn("pb-12 min-h-screen bg-sidebar border-r border-sidebar-border", className)}
      role="navigation"
      aria-label="القائمة الرئيسية"
    >
      <div className="space-y-4 py-6">
        <div className="px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">Zamele</h1>
              <p className="text-xs text-muted-foreground">شركاء زميلي</p>
            </div>
          </div>

          <nav className="space-y-1" role="list">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start h-10 transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50",
                  )}
                  asChild
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`${item.title} - ${item.description}`}
                    role="listitem"
                  >
                    <item.icon className="w-4 h-4" aria-hidden="true" />
                    <span className="mr-3">{item.title}</span>
                  </Link>
                </Button>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 focus:ring-2 focus:ring-destructive focus:ring-offset-2"
          aria-label="تسجيل الخروج من الحساب"
        >
          <LogOut className="w-4 h-4" aria-hidden="true" />
          <span className="mr-3">تسجيل الخروج</span>
        </Button>
      </div>
    </aside>
  )
}
