import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center container-padding">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground">Zamele Partners</h1>
              <p className="text-xs text-muted-foreground">شركاء زميلي</p>
            </div>
          </Link>
        </div>

        <Card className="minimal-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-title-1">تسجيل الدخول</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              أدخل بياناتك للوصول إلى حسابك
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </Label>
              <Input id="email" type="email" placeholder="example@zamele.com" className="minimal-input h-12" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </Label>
              <Input id="password" type="password" placeholder="••••••••" className="minimal-input h-12" />
            </div>
            <div className="flex items-center justify-end">
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                نسيت كلمة المرور؟
              </Link>
            </div>
            <Button className="w-full minimal-button h-12 text-base" size="lg">
              تسجيل الدخول
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link href="/auth/register" className="text-primary hover:underline font-medium">
                إنشاء حساب جديد
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-xs text-muted-foreground leading-relaxed">
          بتسجيل الدخول، أنت توافق على{" "}
          <Link href="#" className="text-primary hover:underline">
            شروط الخدمة
          </Link>{" "}
          و{" "}
          <Link href="#" className="text-primary hover:underline">
            سياسة الخصوصية
          </Link>
        </div>
      </div>
    </div>
  )
}
