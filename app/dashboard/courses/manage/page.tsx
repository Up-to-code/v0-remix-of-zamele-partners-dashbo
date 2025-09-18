import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Eye, Edit, BarChart3, MessageSquare, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ManageCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "أساسيات البرمجة بـ Python",
      students: 156,
      completion: 75,
      rating: 4.8,
      revenue: "46,644 ريال",
      status: "نشط",
      lastUpdated: "2024-01-20",
      views: 1234,
      comments: 45,
    },
    {
      id: 2,
      title: "تصميم واجهات المستخدم",
      students: 89,
      completion: 45,
      rating: 4.6,
      revenue: "35,511 ريال",
      status: "قيد التطوير",
      lastUpdated: "2024-02-05",
      views: 567,
      comments: 23,
    },
    {
      id: 3,
      title: "التسويق الرقمي المتقدم",
      students: 234,
      completion: 90,
      rating: 4.9,
      revenue: "116,766 ريال",
      status: "مكتمل",
      lastUpdated: "2024-01-10",
      views: 2156,
      comments: 78,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">إدارة الدورات</h1>
          <p className="text-muted-foreground">تتبع أداء دوراتك وإدارة المحتوى</p>
        </div>
        <Link href="/dashboard/courses/create">
          <Button className="no-shadow">إنشاء دورة جديدة</Button>
        </Link>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">إجمالي الطلاب</p>
                <p className="text-2xl font-bold">479</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs text-success mt-2">+12% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">إجمالي الإيرادات</p>
                <p className="text-2xl font-bold">198,921 ريال</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
            <p className="text-xs text-success mt-2">+8% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">متوسط التقييم</p>
                <p className="text-2xl font-bold">4.8</p>
              </div>
              <Star className="w-8 h-8 text-warning" />
            </div>
            <p className="text-xs text-success mt-2">+0.2 من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">معدل الإكمال</p>
                <p className="text-2xl font-bold">70%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-xs text-success mt-2">+5% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      {/* Courses Management */}
      <Card className="no-shadow">
        <CardHeader>
          <CardTitle>دوراتك</CardTitle>
          <CardDescription>إدارة وتتبع أداء جميع دوراتك</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 no-shadow">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="active">نشط</TabsTrigger>
              <TabsTrigger value="draft">مسودة</TabsTrigger>
              <TabsTrigger value="completed">مكتمل</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-6">
              {courses.map((course) => (
                <Card key={course.id} className="no-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <Badge
                            variant={
                              course.status === "نشط" ? "default" : course.status === "مكتمل" ? "secondary" : "outline"
                            }
                            className="no-shadow"
                          >
                            {course.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground">الطلاب</p>
                            <p className="text-lg font-semibold">{course.students}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">معدل الإكمال</p>
                            <div className="flex items-center gap-2">
                              <Progress value={course.completion} className="w-16" />
                              <span className="text-sm font-medium">{course.completion}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">التقييم</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-warning fill-current" />
                              <span className="text-lg font-semibold">{course.rating}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">الإيرادات</p>
                            <p className="text-lg font-semibold text-success">{course.revenue}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">آخر تحديث</p>
                            <p className="text-sm">{course.lastUpdated}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {course.views} مشاهدة
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {course.comments} تعليق
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="no-shadow bg-transparent">
                          <BarChart3 className="w-4 h-4 ml-1" />
                          الإحصائيات
                        </Button>
                        <Button variant="outline" size="sm" className="no-shadow bg-transparent">
                          <Edit className="w-4 h-4 ml-1" />
                          تعديل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="active">
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">الدورات النشطة ستظهر هنا</p>
              </div>
            </TabsContent>

            <TabsContent value="draft">
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">المسودات ستظهر هنا</p>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">الدورات المكتملة ستظهر هنا</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
