import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Users, TrendingUp, Plus, DollarSign, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-display text-balance">مرحباً، أحمد محمد</h1>
          <p className="text-muted-foreground mt-2 text-lg">إليك نظرة عامة على أداءك اليوم</p>
        </div>
        <Link href="/dashboard/courses/create">
          <Button className="minimal-button">
            <Plus className="w-4 h-4 ml-2" />
            دورة جديدة
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="minimal-card p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">الأرباح الشهرية</CardTitle>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">$2,847</div>
              <Badge variant="secondary" className="text-xs text-success">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <Card className="minimal-card p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الدورات</CardTitle>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">12</div>
              <Badge variant="secondary" className="text-xs text-success">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +2
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <Card className="minimal-card p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">الطلاب النشطون</CardTitle>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">1,234</div>
              <Badge variant="secondary" className="text-xs text-success">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +180
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <Card className="minimal-card p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-sm font-medium text-muted-foreground">معدل الإكمال</CardTitle>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">89%</div>
              <Badge variant="secondary" className="text-xs text-success">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12%
              </Badge>
            </div>
          </CardHeader>
        </Card>
      </div>

      <Card className="minimal-card">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-title-3">الدورات الحديثة</CardTitle>
              <CardDescription className="mt-1">آخر الدورات التي تم إنشاؤها</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/courses">عرض الكل</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "أساسيات البرمجة بـ Python",
              students: 156,
              progress: 75,
              status: "نشط",
              earnings: "$450",
            },
            {
              title: "تصميم واجهات المستخدم",
              students: 89,
              progress: 45,
              status: "قيد التطوير",
              earnings: "$280",
            },
            {
              title: "التسويق الرقمي المتقدم",
              students: 234,
              progress: 90,
              status: "مكتمل",
              earnings: "$680",
            },
          ].map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{course.title}</h4>
                  <span className="text-sm font-semibold text-primary">{course.earnings}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {course.students} طالب
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {course.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={course.progress} className="flex-1 h-2" />
                  <span className="text-xs text-muted-foreground">{course.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="minimal-card">
        <CardHeader>
          <CardTitle className="text-title-3">إجراءات سريعة</CardTitle>
          <CardDescription>الأدوات الأكثر استخداماً</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-background hover:bg-muted/50">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">إنشاء دورة</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-background hover:bg-muted/50">
              <Users className="w-6 h-6" />
              <span className="text-sm">إدارة الطلاب</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-background hover:bg-muted/50">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm">عرض الإحصائيات</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 bg-background hover:bg-muted/50">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">تقرير الأرباح</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
