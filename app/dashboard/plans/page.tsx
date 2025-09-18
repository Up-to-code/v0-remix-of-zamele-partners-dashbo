import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Check, Crown, Zap, TrendingUp, Users, BookOpen, Calendar, CreditCard, Download } from "lucide-react"

export default function PlansPage() {
  const plans = [
    {
      name: "المجاني",
      price: "0",
      period: "شهرياً",
      description: "مثالي للمبتدئين",
      features: ["إنشاء حتى 3 دورات", "حتى 50 طالب لكل دورة", "دعم أساسي", "تحليلات بسيطة", "مساحة تخزين 1 جيجا"],
      current: true,
      icon: Zap,
      color: "text-primary",
    },
    {
      name: "الاحترافي",
      price: "99",
      period: "شهرياً",
      description: "للشركاء النشطين",
      features: [
        "دورات غير محدودة",
        "طلاب غير محدودين",
        "دعم أولوية",
        "تحليلات متقدمة",
        "مساحة تخزين 50 جيجا",
        "شهادات مخصصة",
        "أدوات تسويق متقدمة",
      ],
      popular: true,
      icon: Crown,
      color: "text-secondary",
    },
    {
      name: "المؤسسي",
      price: "299",
      period: "شهرياً",
      description: "للمؤسسات الكبيرة",
      features: [
        "جميع ميزات الاحترافي",
        "فريق متعدد المستخدمين",
        "دعم مخصص 24/7",
        "تكامل API",
        "مساحة تخزين غير محدودة",
        "تقارير مفصلة",
        "تدريب شخصي",
        "إدارة متقدمة للمستخدمين",
      ],
      icon: Crown,
      color: "text-warning",
    },
  ]

  const currentUsage = {
    courses: { used: 2, limit: 3, percentage: 67 },
    students: { used: 89, limit: 150, percentage: 59 },
    storage: { used: 0.8, limit: 1, percentage: 80 },
  }

  const billingHistory = [
    { date: "2024-02-01", plan: "المجاني", amount: "0 ريال", status: "نشط" },
    { date: "2024-01-01", plan: "المجاني", amount: "0 ريال", status: "مكتمل" },
    { date: "2023-12-01", plan: "المجاني", amount: "0 ريال", status: "مكتمل" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-display text-balance">اختر الخطة المناسبة لك</h1>
        <p className="text-body text-muted-foreground text-balance mt-2">خطط مرنة تناسب جميع احتياجاتك التعليمية</p>
      </div>

      <Card className="minimal-card">
        <CardHeader>
          <CardTitle className="text-title-3">الاستخدام الحالي</CardTitle>
          <CardDescription>مراقبة استخدامك للخطة الحالية</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-callout font-medium">الدورات</span>
                </div>
                <span className="text-callout text-muted-foreground">
                  {currentUsage.courses.used}/{currentUsage.courses.limit}
                </span>
              </div>
              <Progress value={currentUsage.courses.percentage} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-callout font-medium">الطلاب</span>
                </div>
                <span className="text-callout text-muted-foreground">
                  {currentUsage.students.used}/{currentUsage.students.limit}
                </span>
              </div>
              <Progress value={currentUsage.students.percentage} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-callout font-medium">التخزين</span>
                </div>
                <span className="text-callout text-muted-foreground">
                  {currentUsage.storage.used}/{currentUsage.storage.limit} جيجا
                </span>
              </div>
              <Progress value={currentUsage.storage.percentage} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`minimal-card relative ${plan.popular ? "border-primary" : ""}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 minimal-badge" variant="default">
                الأكثر شعبية
              </Badge>
            )}

            <CardHeader className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                <plan.icon className={`w-6 h-6 ${plan.color}`} />
              </div>
              <CardTitle className="text-title-2">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> ريال/{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-callout">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full minimal-button ${plan.current ? "opacity-50" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                disabled={plan.current}
              >
                {plan.current ? "الخطة الحالية" : "اختيار الخطة"}
              </Button>

              {plan.current && (
                <p className="text-center text-caption text-muted-foreground">أنت تستخدم هذه الخطة حالياً</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="minimal-card">
          <CardHeader>
            <CardTitle className="text-title-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              تاريخ الفواتير
            </CardTitle>
            <CardDescription>سجل المدفوعات والاشتراكات السابقة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingHistory.map((bill, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-callout font-medium">{bill.plan}</span>
                      <Badge variant="outline" className="minimal-badge text-caption">
                        {bill.status}
                      </Badge>
                    </div>
                    <p className="text-caption text-muted-foreground">{bill.date}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-callout font-semibold">{bill.amount}</p>
                    <Button variant="ghost" size="sm" className="minimal-button h-auto p-0 text-caption">
                      <Download className="w-3 h-3 ml-1" />
                      تحميل
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="minimal-card">
          <CardHeader>
            <CardTitle className="text-title-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              معلومات الاشتراك
            </CardTitle>
            <CardDescription>تفاصيل اشتراكك الحالي</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-callout text-muted-foreground">الخطة الحالية:</span>
                <span className="text-callout font-medium">المجاني</span>
              </div>
              <div className="flex justify-between">
                <span className="text-callout text-muted-foreground">تاريخ البدء:</span>
                <span className="text-callout font-medium">2024-01-01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-callout text-muted-foreground">التجديد التالي:</span>
                <span className="text-callout font-medium">-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-callout text-muted-foreground">طريقة الدفع:</span>
                <span className="text-callout font-medium">غير محدد</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Button variant="outline" className="w-full minimal-button bg-transparent">
                إضافة طريقة دفع
              </Button>
              <Button variant="ghost" className="w-full minimal-button text-destructive">
                إلغاء الاشتراك
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-title-3 mb-4">أسئلة حول الخطط؟</h3>
        <p className="text-body text-muted-foreground mb-6">فريقنا جاهز لمساعدتك في اختيار الخطة المناسبة لاحتياجاتك</p>
        <Button variant="outline" className="minimal-button bg-transparent">
          تواصل معنا
        </Button>
      </div>
    </div>
  )
}
