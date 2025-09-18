import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center container-padding py-12">
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
            <CardTitle className="text-title-1">إنشاء حساب جديد</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              انضم إلى مجتمع زميلي للشركاء
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  الاسم الأول
                </Label>
                <Input id="firstName" placeholder="أحمد" className="minimal-input h-12" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  الاسم الأخير
                </Label>
                <Input id="lastName" placeholder="محمد" className="minimal-input h-12" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </Label>
              <Input id="email" type="email" placeholder="example@zamele.com" className="minimal-input h-12" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-medium">
                رقم الهاتف
              </Label>
              <Input id="phone" type="tel" placeholder="+966 50 123 4567" className="minimal-input h-12" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="specialization" className="text-sm font-medium">
                التخصص
              </Label>
              <Select>
                <SelectTrigger className="minimal-input h-12">
                  <SelectValue placeholder="اختر تخصصك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programming">البرمجة وتطوير البرمجيات</SelectItem>
                  <SelectItem value="design">التصميم والجرافيك</SelectItem>
                  <SelectItem value="marketing">التسويق الرقمي</SelectItem>
                  <SelectItem value="business">إدارة الأعمال</SelectItem>
                  <SelectItem value="languages">اللغات</SelectItem>
                  <SelectItem value="science">العلوم والرياضيات</SelectItem>
                  <SelectItem value="other">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </Label>
              <Input id="password" type="password" placeholder="••••••••" className="minimal-input h-12" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                تأكيد كلمة المرور
              </Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" className="minimal-input h-12" />
            </div>

            <div className="flex items-start space-x-3 space-x-reverse pt-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                أوافق على{" "}
                <Link href="#" className="text-primary hover:underline">
                  شروط الخدمة
                </Link>{" "}
                و{" "}
                <Link href="#" className="text-primary hover:underline">
                  سياسة الخصوصية
                </Link>
              </Label>
            </div>

            <Button className="w-full minimal-button h-12 text-base" size="lg">
              إنشاء الحساب
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted-foreground">
              لديك حساب بالفعل؟{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                تسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
