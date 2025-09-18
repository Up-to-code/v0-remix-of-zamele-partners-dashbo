import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
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
            <CardTitle className="text-title-1">استعادة كلمة المرور</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2 leading-relaxed">
              أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </Label>
              <Input id="email" type="email" placeholder="example@zamele.com" className="minimal-input h-12" />
            </div>

            <Button className="w-full minimal-button h-12 text-base" size="lg">
              إرسال رابط الاستعادة
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>

            <div className="text-center pt-4">
              <Link
                href="/auth/login"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 ml-1" />
                العودة إلى تسجيل الدخول
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
