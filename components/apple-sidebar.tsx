"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  BookOpen,
  FileText,
  CreditCard,
  Settings,
  User,
  Search,
  Plus,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const navigation = [
  { name: "الرئيسية", href: "/dashboard", icon: Home },
  { name: "الدورات", href: "/dashboard/courses", icon: BookOpen, badge: "12" },
  { name: "المنشورات", href: "/dashboard/posts", icon: FileText, badge: "3" },
  { name: "الخطط", href: "/dashboard/plans", icon: CreditCard },
  { name: "الإعدادات", href: "/dashboard/settings", icon: Settings },
]

interface AppleSidebarProps {
  className?: string
}

export function AppleSidebar({ className }: AppleSidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 right-4 z-50 md:hidden apple-button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-40 h-screen bg-sidebar/95 backdrop-blur-xl border-l border-sidebar-border transition-all duration-300 ease-out",
          isCollapsed ? "w-20" : "w-72",
          isMobileOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          className,
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-headline font-bold">زميلي</h1>
                  <p className="text-caption">شركاء التعلم</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex apple-button"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>

          {/* Search */}
          {!isCollapsed && (
            <div className="p-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="البحث..." className="apple-input w-full pr-10" />
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isCollapsed && "justify-center",
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions */}
          {!isCollapsed && (
            <div className="p-4 border-t border-sidebar-border">
              <Button className="w-full apple-button bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 ml-2" />
                إنشاء جديد
              </Button>
            </div>
          )}

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border">
            <div
              className={cn(
                "flex items-center gap-3 rounded-xl p-3 hover:bg-sidebar-accent transition-colors",
                isCollapsed && "justify-center",
              )}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">أحمد محمد</p>
                  <p className="text-xs text-muted-foreground truncate">ahmed@zamele.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
