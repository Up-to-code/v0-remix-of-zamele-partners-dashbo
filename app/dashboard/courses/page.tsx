"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Users, Clock, Plus, Search, Filter, Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function CoursesPage() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "أساسيات البرمجة بـ Python",
      description: "تعلم أساسيات البرمجة باستخدام لغة Python من الصفر",
      thumbnail: "/python-programming-course.png",
      students: 156,
      lessons: 24,
      duration: "8 ساعات",
      status: "نشط",
      category: "البرمجة",
      price: "299 ريال",
      rating: 4.8,
      created: "2024-01-15",
    },
    {
      id: 2,
      title: "تصميم واجهات المستخدم",
      description: "تعلم تصميم واجهات مستخدم جذابة وسهلة الاستخدام",
      thumbnail: "/ui-design-course.png",
      students: 89,
      lessons: 18,
      duration: "6 ساعات",
      status: "قيد التطوير",
      category: "التصميم",
      price: "399 ريال",
      rating: 4.6,
      created: "2024-02-01",
    },
    {
      id: 3,
      title: "التسويق الرقمي المتقدم",
      description: "استراتيجيات التسويق الرقمي الحديثة وأدوات التحليل",
      thumbnail: "/digital-marketing-course.png",
      students: 234,
      lessons: 32,
      duration: "12 ساعة",
      status: "مكتمل",
      category: "التسويق",
      price: "499 ريال",
      rating: 4.9,
      created: "2023-12-10",
    },
  ])

  const deleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  const duplicateCourse = (id: number) => {
    const course = courses.find((c) => c.id === id)
    if (course) {
      const newCourse = {
        ...course,
        id: Math.max(...courses.map((c) => c.id)) + 1,
        title: `${course.title} (نسخة)`,
        students: 0,
        status: "قيد التطوير",
      }
      setCourses([...courses, newCourse])
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display">إدارة الدورات</h1>
          <p className="text-body text-muted-foreground mt-2">أنشئ وأدر دوراتك التعليمية</p>
        </div>
        <Link href="/dashboard/courses/create">
          <Button className="apple-button bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95">
            <Plus className="w-4 h-4 ml-2" />
            دورة جديدة
          </Button>
        </Link>
      </div>

      {/* Enhanced Filters */}
      <Card className="apple-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="البحث في الدورات..." className="apple-input pr-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 apple-input">
                <SelectValue placeholder="الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                <SelectItem value="programming">البرمجة</SelectItem>
                <SelectItem value="design">التصميم</SelectItem>
                <SelectItem value="marketing">التسويق</SelectItem>
                <SelectItem value="business">الأعمال</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48 apple-input">
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="draft">قيد التطوير</SelectItem>
                <SelectItem value="completed">مكتمل</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="apple-button bg-transparent border-border hover:scale-105 active:scale-95"
            >
              <Filter className="w-4 h-4 ml-2" />
              تصفية
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="apple-card overflow-hidden group hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <div className="aspect-video relative">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <Badge
                className={`absolute top-3 right-3 ${
                  course.status === "نشط" ? "bg-success" : course.status === "مكتمل" ? "bg-primary" : "bg-warning"
                }`}
              >
                {course.status}
              </Badge>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                <Button
                  size="sm"
                  className="apple-button bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 active:scale-90"
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  className="apple-button bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 active:scale-90"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-headline line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2 text-callout">{course.description}</CardDescription>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="apple-button hover:scale-110 active:scale-90">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 ml-2" />
                      عرض التفاصيل
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 ml-2" />
                      تعديل الدورة
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => duplicateCourse(course.id)}>
                      <BookOpen className="w-4 h-4 ml-2" />
                      نسخ الدورة
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => deleteCourse(course.id)}
                    >
                      <Trash2 className="w-4 h-4 ml-2" />
                      حذف الدورة
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center gap-4 text-callout text-muted-foreground mt-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {course.lessons} درس
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-title-3 font-bold text-primary">{course.price}</div>
                <div className="flex items-center gap-1">
                  <span className="text-callout font-medium">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(course.rating) ? "text-warning" : "text-muted-foreground"
                        }`}
                      >
                        ★
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {courses.length === 0 && (
        <Card className="apple-card">
          <CardContent className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-title-3 mb-2">لا توجد دورات بعد</h3>
            <p className="text-body text-muted-foreground mb-6">ابدأ بإنشاء دورتك الأولى</p>
            <Link href="/dashboard/courses/create">
              <Button className="apple-button bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95">
                <Plus className="w-4 h-4 ml-2" />
                إنشاء دورة جديدة
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
