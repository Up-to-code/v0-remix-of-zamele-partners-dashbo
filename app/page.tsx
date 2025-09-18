import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto container-padding py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Zamele Partners</h1>
                <p className="text-xs text-muted-foreground">شركاء زميلي</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-sm">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="minimal-button">ابدأ الآن</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding container-padding">
        <div className="content-max-width text-center">
          <Badge variant="secondary" className="mb-8 text-xs px-3 py-1">
            منصة تعليمية متقدمة
          </Badge>
          <h1 className="text-display mb-8 text-balance">
            شركاء في رحلة
            <span className="text-primary block mt-2">التعلم</span>
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-12 max-w-2xl mx-auto leading-relaxed">
            انضم إلى مجتمع زميلي للشركاء وساهم في تعزيز تجربة التعلم للطلاب من خلال منصة شاملة ومتطورة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="minimal-button">
                ابدأ رحلتك الآن
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
                استكشف المنصة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding container-padding bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-6">لماذا زميلي؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              منصة متكاملة تجمع بين سهولة الاستخدام والميزات المتقدمة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="minimal-card p-8 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-title-3 mb-4">إدارة الدورات</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  أنشئ وأدر دوراتك التعليمية بسهولة مع أدوات متقدمة
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="minimal-card p-8 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-title-3 mb-4">مجتمع تفاعلي</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  تواصل مع الطلاب والشركاء في بيئة تعليمية محفزة
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="minimal-card p-8 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-title-3 mb-4">خطط مرنة</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  اختر الخطة المناسبة لك مع إمكانيات متنوعة
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding container-padding">
        <div className="content-max-width">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">شريك نشط</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">10K+</div>
              <div className="text-muted-foreground">طالب مستفيد</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-success">95%</div>
              <div className="text-muted-foreground">معدل الرضا</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-padding bg-muted/20">
        <div className="content-max-width text-center">
          <h2 className="text-title-1 mb-6">جاهز للبدء؟</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            انضم إلى آلاف الشركاء الذين يساهمون في تطوير التعليم
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="minimal-button">
              ابدأ مجاناً الآن
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-16 container-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Zamele Partners</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">منصة تعليمية متقدمة لتعزيز تجربة التعلم</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">المنصة</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/dashboard" className="hover:text-foreground transition-colors">
                    لوحة التحكم
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/courses" className="hover:text-foreground transition-colors">
                    الدورات
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/plans" className="hover:text-foreground transition-colors">
                    الخطط
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">الدعم</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    الأسئلة الشائعة
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">قانوني</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    الشروط
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    ملفات تعريف الارتباط
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Zamele Partners. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
