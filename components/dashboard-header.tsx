"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Bell, Search, Settings, User, LogOut, Menu } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40" role="banner">
      <div className="flex h-16 items-center container-padding gap-6">
        <Button variant="ghost" size="sm" className="md:hidden" aria-label="فتح القائمة الجانبية" aria-expanded="false">
          <Menu className="w-4 h-4" />
        </Button>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
              aria-hidden="true"
            />
            <Input
              placeholder="البحث..."
              className="minimal-input pr-10"
              aria-label="البحث في المحتوى"
              role="searchbox"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3" role="navigation" aria-label="أدوات المستخدم">
          <Button variant="ghost" size="sm" className="relative" aria-label="الإشعارات - 3 إشعارات جديدة">
            <Bell className="w-4 h-4" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-xs"
              aria-hidden="true"
            >
              3
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full" aria-label="قائمة المستخدم">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-user-avatars.png" alt="صورة المستخدم أحمد محمد" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">أح</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 minimal-shadow" align="end" forceMount>
              <DropdownMenuLabel className="font-normal p-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium leading-none">أحمد محمد</p>
                  <p className="text-xs leading-none text-muted-foreground">ahmed@zamele.com</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    شريك ذهبي
                  </Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-3" role="menuitem">
                <User className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>الملف الشخصي</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3" role="menuitem">
                <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>الإعدادات</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive p-3" role="menuitem">
                <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>تسجيل الخروج</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
