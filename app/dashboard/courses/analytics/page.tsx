"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  TrendingUp,
  Users,
  Star,
  Download,
  BookOpen,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from "lucide-react"

export default function CourseAnalyticsPage() {
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [timeRange, setTimeRange] = useState("30d")

  const courses = [
    { id: "1", name: "أساسيات البرمجة بـ Python", students: 156 },
    { id: "2", name: "تصميم واجهات المستخدم", students: 89 },
    { id: "3", name: "التسويق الرقمي المتقدم", students: 234 },
  ]

  const analyticsData = {
    overview: {
      totalRevenue: "198,921",
      totalStudents: 479,
      avgRating: 4.8,
      completionRate: 78,
      trends: {
        revenue: 12.5,
        students: 8.3,
        rating: 0.2,
        completion: -2.1,
      },
    },
    topCourses: [
      {
        id: 1,
        title: "التسويق الرقمي المتقدم",
        students: 234,
        revenue: "116,766",
        rating: 4.9,
        completion: 85,
        growth: 15.2,
      },
      {
        id: 2,
        title: "أساسيات البرمجة بـ Python",
        students: 156,
        revenue: "46,644",
        rating: 4.8,
        completion: 78,
        growth: 8.7,
      },
      {
        id: 3,
        title: "تصميم واجهات المستخدم",
        students: 89,
        revenue: "35,511",
        rating: 4.6,
        completion: 65,
        growth: -3.2,
      },
    ],
    studentEngagement: [
      { name: "محمد أحمد", courses: 3, progress: 85, lastActive: "اليوم" },
      { name: "فاطمة علي", courses: 2, progress: 92, lastActive: "أمس" },
      { name: "عبدالله محمد", courses: 1, progress: 45, lastActive: "منذ 3 أيام" },
      { name: "نورا سالم", courses: 4, progress: 78, lastActive: "اليوم" },
      { name: "خالد يوسف", courses: 2, progress: 67, lastActive: "منذ يومين" },
    ],
    recentActivity: [
      { type: "enrollment", student: "أحمد محمد", course: "أساسيات البرمجة", time: "منذ 5 دقائق" },
      { type: "completion", student: "سارة علي", course: "التسويق الرقمي", time: "منذ 15 دقيقة" },
      { type: "review", student: "محمد خالد", course: "تصميم واجهات", rating: 5, time: "منذ 30 دقيقة" },
      { type: "enrollment", student: "فاطمة أحمد", course: "أساسيات البرمجة", time: "منذ ساعة" },
    ],
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-display">تحليلات الدورات</h1>
          <p className="text-body text-muted-foreground mt-2">رؤى مفصلة حول أداء دوراتك وتفاعل الطلاب</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="minimal-button bg-transparent">
            <Download className="w-4 h-4 ml-2" />
            تصدير التقرير
          </Button>
          <Button className="minimal-button">
            <BarChart3 className="w-4 h-4 ml-2" />
            تقرير مخصص
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="minimal-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-full md:w-64 minimal-input">
                <SelectValue placeholder="اختر الدورة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الدورات</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-full md:w-48 minimal-input">
                <SelectValue placeholder="الفترة الزمنية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">آخر 7 أيام</SelectItem>
                <SelectItem value="30d">آخر 30 يوم</SelectItem>
                <SelectItem value="90d">آخر 3 أشهر</SelectItem>
                <SelectItem value="1y">آخر سنة</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="minimal-button bg-transparent">
              <Filter className="w-4 h-4 ml-2" />
              مرشحات متقدمة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">إجمالي الإيرادات</p>
                <p className="text-title-2 font-bold">{analyticsData.overview.totalRevenue} ريال</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3 h-3 text-success" />
              <span className="text-caption text-success">+{analyticsData.overview.trends.revenue}%</span>
              <span className="text-caption text-muted-foreground">من الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">إجمالي الطلاب</p>
                <p className="text-title-2 font-bold">{analyticsData.overview.totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3 h-3 text-success" />
              <span className="text-caption text-success">+{analyticsData.overview.trends.students}%</span>
              <span className="text-caption text-muted-foreground">من الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">متوسط التقييم</p>
                <p className="text-title-2 font-bold">{analyticsData.overview.avgRating}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3 h-3 text-success" />
              <span className="text-caption text-success">+{analyticsData.overview.trends.rating}</span>
              <span className="text-caption text-muted-foreground">من الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-callout font-medium text-muted-foreground">معدل الإكمال</p>
                <p className="text-title-2 font-bold">{analyticsData.overview.completionRate}%</p>
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowDownRight className="w-3 h-3 text-destructive" />
              <span className="text-caption text-destructive">{analyticsData.overview.trends.completion}%</span>
              <span className="text-caption text-muted-foreground">من الشهر الماضي</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4 minimal-tabs">
          <TabsTrigger value="performance">أداء الدورات</TabsTrigger>
          <TabsTrigger value="students">الطلاب</TabsTrigger>
          <TabsTrigger value="engagement">التفاعل</TabsTrigger>
          <TabsTrigger value="revenue">الإيرادات</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6 mt-6">
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-title-3">أفضل الدورات أداءً</CardTitle>
              <CardDescription>الدورات الأكثر نجاحاً من حيث الطلاب والإيرادات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topCourses.map((course, index) => (
                  <div key={course.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-callout font-bold text-primary">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-callout font-medium">{course.title}</h4>
                        <div className="flex items-center gap-4 text-caption text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {course.students} طالب
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {course.rating}
                          </span>
                          <span>{course.completion}% إكمال</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-callout font-bold text-success">{course.revenue} ريال</p>
                      <div className="flex items-center gap-1 mt-1">
                        {course.growth > 0 ? (
                          <ArrowUpRight className="w-3 h-3 text-success" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 text-destructive" />
                        )}
                        <span className={`text-caption ${course.growth > 0 ? "text-success" : "text-destructive"}`}>
                          {Math.abs(course.growth)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6 mt-6">
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-title-3">أكثر الطلاب تفاعلاً</CardTitle>
              <CardDescription>الطلاب الأكثر نشاطاً في دوراتك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.studentEngagement.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/ceholder-svg-key-student.jpg?key=student${index}`} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-callout font-medium">{student.name}</h4>
                        <div className="flex items-center gap-4 text-caption text-muted-foreground mt-1">
                          <span>{student.courses} دورات</span>
                          <span>آخر نشاط: {student.lastActive}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-callout font-medium">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="w-20 h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6 mt-6">
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-title-3">النشاط الأخير</CardTitle>
              <CardDescription>آخر الأنشطة في دوراتك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      {activity.type === "enrollment" && <Users className="w-4 h-4 text-primary" />}
                      {activity.type === "completion" && <BookOpen className="w-4 h-4 text-success" />}
                      {activity.type === "review" && <Star className="w-4 h-4 text-warning" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-callout">
                        <span className="font-medium">{activity.student}</span>
                        {activity.type === "enrollment" && " انضم إلى دورة "}
                        {activity.type === "completion" && " أكمل دورة "}
                        {activity.type === "review" && " قيّم دورة "}
                        <span className="font-medium">{activity.course}</span>
                        {activity.type === "review" && (
                          <span className="mr-2">
                            {Array.from({ length: activity.rating }, (_, i) => (
                              <Star key={i} className="w-3 h-3 inline text-warning fill-current" />
                            ))}
                          </span>
                        )}
                      </p>
                      <p className="text-caption text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6 mt-6">
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-title-3">تحليل الإيرادات</CardTitle>
              <CardDescription>تفصيل الإيرادات حسب الدورة والفترة الزمنية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-callout font-medium text-muted-foreground">إيرادات هذا الشهر</p>
                  <p className="text-title-2 font-bold">45,230 ريال</p>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-success" />
                    <span className="text-caption text-success">+18.2%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-callout font-medium text-muted-foreground">متوسط الإيرادات اليومية</p>
                  <p className="text-title-2 font-bold">1,507 ريال</p>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-success" />
                    <span className="text-caption text-success">+12.5%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-callout font-medium text-muted-foreground">أعلى دورة إيراداً</p>
                  <p className="text-title-2 font-bold">التسويق الرقمي</p>
                  <p className="text-caption text-muted-foreground">116,766 ريال</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
