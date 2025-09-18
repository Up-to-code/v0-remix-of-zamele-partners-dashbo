"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  MessageSquare,
  UserCheck,
  UserX,
  Download,
  Plus,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
} from "lucide-react"

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [courseFilter, setCourseFilter] = useState("all")

  const students = [
    {
      id: 1,
      name: "أحمد محمد علي",
      email: "ahmed.mohamed@example.com",
      avatar: "/placeholder.svg?key=student1",
      enrolledCourses: 3,
      completedCourses: 1,
      totalProgress: 78,
      lastActive: "اليوم",
      joinDate: "2024-01-15",
      status: "نشط",
      currentCourse: "أساسيات البرمجة بـ Python",
      courseProgress: 85,
      totalSpent: "897 ريال",
      certificates: 1,
    },
    {
      id: 2,
      name: "فاطمة سالم أحمد",
      email: "fatima.salem@example.com",
      avatar: "/placeholder.svg?key=student2",
      enrolledCourses: 2,
      completedCourses: 2,
      totalProgress: 100,
      lastActive: "أمس",
      joinDate: "2023-12-10",
      status: "مكتمل",
      currentCourse: "التسويق الرقمي المتقدم",
      courseProgress: 100,
      totalSpent: "798 ريال",
      certificates: 2,
    },
    {
      id: 3,
      name: "عبدالله خالد يوسف",
      email: "abdullah.khalid@example.com",
      avatar: "/placeholder.svg?key=student3",
      enrolledCourses: 1,
      completedCourses: 0,
      totalProgress: 45,
      lastActive: "منذ 3 أيام",
      joinDate: "2024-02-01",
      status: "متوقف",
      currentCourse: "تصميم واجهات المستخدم",
      courseProgress: 45,
      totalSpent: "399 ريال",
      certificates: 0,
    },
    {
      id: 4,
      name: "نورا عبدالرحمن",
      email: "nora.abdulrahman@example.com",
      avatar: "/placeholder.svg?key=student4",
      enrolledCourses: 4,
      completedCourses: 2,
      totalProgress: 92,
      lastActive: "اليوم",
      joinDate: "2023-11-20",
      status: "نشط",
      currentCourse: "أساسيات البرمجة بـ Python",
      courseProgress: 92,
      totalSpent: "1,596 ريال",
      certificates: 2,
    },
    {
      id: 5,
      name: "محمد سعد الدين",
      email: "mohamed.saad@example.com",
      avatar: "/placeholder.svg?key=student5",
      enrolledCourses: 2,
      completedCourses: 1,
      totalProgress: 67,
      lastActive: "منذ يومين",
      joinDate: "2024-01-08",
      status: "نشط",
      currentCourse: "التسويق الرقمي المتقدم",
      courseProgress: 34,
      totalSpent: "698 ريال",
      certificates: 1,
    },
  ]

  const courses = [
    { id: "1", name: "أساسيات البرمجة بـ Python" },
    { id: "2", name: "تصميم واجهات المستخدم" },
    { id: "3", name: "التسويق الرقمي المتقدم" },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    const matchesCourse = courseFilter === "all" || student.currentCourse.includes(courseFilter)

    return matchesSearch && matchesStatus && matchesCourse
  })

  const stats = {
    totalStudents: students.length,
    activeStudents: students.filter((s) => s.status === "نشط").length,
    completedStudents: students.filter((s) => s.status === "مكتمل").length,
    avgProgress: Math.round(students.reduce((acc, s) => acc + s.totalProgress, 0) / students.length),
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-display">إدارة الطلاب</h1>
          <p className="text-body text-muted-foreground mt-2">تتبع تقدم الطلاب وإدارة تفاعلهم مع الدورات</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="minimal-button bg-transparent">
            <Download className="w-4 h-4 ml-2" />
            تصدير البيانات
          </Button>
          <Button className="minimal-button">
            <Plus className="w-4 h-4 ml-2" />
            إضافة طالب
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">إجمالي الطلاب</p>
                <p className="text-title-2 font-bold">{stats.totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-caption text-success mt-2">+12 هذا الشهر</p>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">الطلاب النشطون</p>
                <p className="text-title-2 font-bold">{stats.activeStudents}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-success" />
              </div>
            </div>
            <p className="text-caption text-success mt-2">+8 هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">أكملوا الدورات</p>
                <p className="text-title-2 font-bold">{stats.completedStudents}</p>
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
            </div>
            <p className="text-caption text-success mt-2">+3 هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">متوسط التقدم</p>
                <p className="text-title-2 font-bold">{stats.avgProgress}%</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-warning" />
              </div>
            </div>
            <p className="text-caption text-success mt-2">+5% هذا الشهر</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <TabsList className="grid w-full md:w-auto grid-cols-4 minimal-tabs">
            <TabsTrigger value="all">الكل ({students.length})</TabsTrigger>
            <TabsTrigger value="active">نشط ({stats.activeStudents})</TabsTrigger>
            <TabsTrigger value="completed">مكتمل ({stats.completedStudents})</TabsTrigger>
            <TabsTrigger value="inactive">متوقف ({students.filter((s) => s.status === "متوقف").length})</TabsTrigger>
          </TabsList>

          {/* Filters */}
          <Card className="minimal-card">
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="البحث عن طالب..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="minimal-input pr-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-40 minimal-input">
                    <SelectValue placeholder="الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="نشط">نشط</SelectItem>
                    <SelectItem value="مكتمل">مكتمل</SelectItem>
                    <SelectItem value="متوقف">متوقف</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger className="w-full md:w-48 minimal-input">
                    <SelectValue placeholder="الدورة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الدورات</SelectItem>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.name}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" className="minimal-button bg-transparent">
                  <Filter className="w-4 h-4 ml-2" />
                  تصفية
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="all" className="space-y-4">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="minimal-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-callout font-semibold">{student.name}</h3>
                          <p className="text-caption text-muted-foreground">{student.email}</p>
                          <div className="flex items-center gap-4 mt-2 text-caption text-muted-foreground">
                            <span>انضم في {student.joinDate}</span>
                            <span>آخر نشاط: {student.lastActive}</span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            student.status === "نشط" ? "default" : student.status === "مكتمل" ? "secondary" : "outline"
                          }
                          className="minimal-badge"
                        >
                          {student.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-caption text-muted-foreground">الدورات المسجلة</p>
                          <p className="text-callout font-medium">{student.enrolledCourses}</p>
                        </div>
                        <div>
                          <p className="text-caption text-muted-foreground">الدورات المكتملة</p>
                          <p className="text-callout font-medium">{student.completedCourses}</p>
                        </div>
                        <div>
                          <p className="text-caption text-muted-foreground">إجمالي الإنفاق</p>
                          <p className="text-callout font-medium text-success">{student.totalSpent}</p>
                        </div>
                        <div>
                          <p className="text-caption text-muted-foreground">الشهادات</p>
                          <p className="text-callout font-medium">{student.certificates}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-caption text-muted-foreground">الدورة الحالية: {student.currentCourse}</p>
                          <span className="text-caption font-medium">{student.courseProgress}%</span>
                        </div>
                        <Progress value={student.courseProgress} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="minimal-button">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Mail className="w-4 h-4 ml-2" />
                        إرسال رسالة
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="w-4 h-4 ml-2" />
                        بدء محادثة
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BookOpen className="w-4 h-4 ml-2" />
                        عرض الدورات
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="w-4 h-4 ml-2" />
                        جدولة اجتماع
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <UserX className="w-4 h-4 ml-2" />
                        إلغاء التسجيل
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <div className="space-y-4">
            {filteredStudents
              .filter((s) => s.status === "نشط")
              .map((student) => (
                <Card key={student.id} className="minimal-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-callout font-medium">{student.name}</h4>
                        <p className="text-caption text-muted-foreground">آخر نشاط: {student.lastActive}</p>
                      </div>
                      <div className="text-left">
                        <p className="text-callout font-medium">{student.courseProgress}%</p>
                        <Progress value={student.courseProgress} className="w-20 h-2 mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {filteredStudents
              .filter((s) => s.status === "مكتمل")
              .map((student) => (
                <Card key={student.id} className="minimal-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-callout font-medium">{student.name}</h4>
                        <p className="text-caption text-muted-foreground">{student.completedCourses} دورات مكتملة</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-callout font-medium">{student.certificates}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="inactive">
          <div className="space-y-4">
            {filteredStudents
              .filter((s) => s.status === "متوقف")
              .map((student) => (
                <Card key={student.id} className="minimal-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-callout font-medium">{student.name}</h4>
                        <p className="text-caption text-muted-foreground">آخر نشاط: {student.lastActive}</p>
                      </div>
                      <Button variant="outline" size="sm" className="minimal-button bg-transparent">
                        <Mail className="w-4 h-4 ml-1" />
                        تذكير
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <Card className="minimal-card">
          <CardContent className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-title-3 mb-2">لا توجد نتائج</h3>
            <p className="text-body text-muted-foreground mb-6">جرب تعديل معايير البحث أو المرشحات</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("all")
                setCourseFilter("all")
              }}
              className="minimal-button bg-transparent"
            >
              مسح المرشحات
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
