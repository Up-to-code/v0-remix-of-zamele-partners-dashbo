import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <div className="fixed inset-y-0 right-0 z-50 w-64 hidden md:block">
        <DashboardSidebar />
      </div>

      <div className="flex-1 md:mr-64 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-background" role="main" aria-label="المحتوى الرئيسي">
          <div className="container mx-auto container-padding section-padding content-max-width">{children}</div>
        </main>
      </div>

      <div className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      <div className="md:hidden fixed inset-y-0 right-0 z-50 w-64" role="dialog" aria-label="القائمة الجانبية">
        <DashboardSidebar />
      </div>
    </div>
  )
}
