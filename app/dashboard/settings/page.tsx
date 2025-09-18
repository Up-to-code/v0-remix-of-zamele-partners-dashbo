"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Settings, Bell, Shield, Palette, CreditCard, Upload, Save, Eye, EyeOff, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">الإعدادات</h1>
          <p className="text-muted-foreground">إدارة حسابك وتخصيص تجربتك</p>
        </div>
        <Button className="no-shadow">
          <Save className="w-4 h-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-6 no-shadow">
          <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
          <TabsTrigger value="account">الحساب</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
          <TabsTrigger value="appearance">المظهر</TabsTrigger>
          <TabsTrigger value="billing">الفواتير</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                المعلومات الشخصية
              </CardTitle>
              <CardDescription>قم بتحديث معلوماتك الشخصية وصورتك الشخصية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?key=profile" alt="Profile" />
                  <AvatarFallback className="text-lg">أح</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="no-shadow bg-transparent">
                    <Upload className="w-4 h-4 ml-2" />
                    تغيير الصورة
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, PNG أو GIF (الحد الأقصى 2MB)</p>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">الاسم الأول</Label>
                  <Input id="firstName" defaultValue="أحمد" className="no-shadow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">الاسم الأخير</Label>
                  <Input id="lastName" defaultValue="محمد" className="no-shadow" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">نبذة شخصية</Label>
                <Textarea
                  id="bio"
                  placeholder="اكتب نبذة مختصرة عنك..."
                  rows={4}
                  className="no-shadow"
                  defaultValue="مطور برمجيات ومدرب تقني متخصص في تطوير تطبيقات الويب والهواتف الذكية"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" defaultValue="+966 50 123 4567" className="no-shadow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">الموقع</Label>
                  <Input id="location" defaultValue="الرياض، السعودية" className="no-shadow" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">الموقع الإلكتروني</Label>
                <Input id="website" placeholder="https://example.com" className="no-shadow" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">التخصص</Label>
                <Select defaultValue="programming">
                  <SelectTrigger className="no-shadow">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">البرمجة وتطوير البرمجيات</SelectItem>
                    <SelectItem value="design">التصميم والجرافيك</SelectItem>
                    <SelectItem value="marketing">التسويق الرقمي</SelectItem>
                    <SelectItem value="business">إدارة الأعمال</SelectItem>
                    <SelectItem value="languages">اللغات</SelectItem>
                    <SelectItem value="science">العلوم والرياضيات</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                إعدادات الحساب
              </CardTitle>
              <CardDescription>إدارة بيانات تسجيل الدخول وأمان الحساب</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" defaultValue="ahmed@zamele.com" className="no-shadow" />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">تغيير كلمة المرور</h3>
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                  <div className="relative">
                    <Input id="currentPassword" type={showPassword ? "text" : "password"} className="no-shadow pr-10" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute left-0 top-0 h-full px-3 no-shadow"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                  <Input id="newPassword" type="password" className="no-shadow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</Label>
                  <Input id="confirmPassword" type="password" className="no-shadow" />
                </div>
                <Button variant="outline" className="no-shadow bg-transparent">
                  تحديث كلمة المرور
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">المصادقة الثنائية</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">تفعيل المصادقة الثنائية</p>
                    <p className="text-sm text-muted-foreground">أضف طبقة حماية إضافية لحسابك</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-destructive">منطقة الخطر</h3>
                <div className="border border-destructive/20 rounded-lg p-4 space-y-4">
                  <div>
                    <h4 className="font-medium">حذف الحساب</h4>
                    <p className="text-sm text-muted-foreground">حذف حسابك نهائياً وجميع البيانات المرتبطة به</p>
                  </div>
                  <Button variant="destructive" className="no-shadow">
                    <Trash2 className="w-4 h-4 ml-2" />
                    حذف الحساب
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                إعدادات الإشعارات
              </CardTitle>
              <CardDescription>تحكم في الإشعارات التي تريد استلامها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">إشعارات البريد الإلكتروني</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تسجيل طلاب جدد</p>
                      <p className="text-sm text-muted-foreground">عند انضمام طلاب جدد لدوراتك</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تعليقات جديدة</p>
                      <p className="text-sm text-muted-foreground">عند إضافة تعليقات على دوراتك أو منشوراتك</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تقييمات جديدة</p>
                      <p className="text-sm text-muted-foreground">عند تقييم دوراتك من قبل الطلاب</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تحديثات المنصة</p>
                      <p className="text-sm text-muted-foreground">أخبار وتحديثات مهمة حول المنصة</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">الإشعارات الفورية</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">رسائل جديدة</p>
                      <p className="text-sm text-muted-foreground">عند استلام رسائل من الطلاب أو الشركاء</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تذكيرات الدورات</p>
                      <p className="text-sm text-muted-foreground">تذكيرات بالدروس المجدولة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إشعارات التسويق</p>
                      <p className="text-sm text-muted-foreground">عروض وفرص تسويقية جديدة</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                إعدادات الخصوصية
              </CardTitle>
              <CardDescription>تحكم في من يمكنه رؤية معلوماتك ومحتواك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">رؤية الملف الشخصي</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إظهار البريد الإلكتروني</p>
                      <p className="text-sm text-muted-foreground">السماح للآخرين برؤية بريدك الإلكتروني</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إظهار رقم الهاتف</p>
                      <p className="text-sm text-muted-foreground">السماح للطلاب بالتواصل معك هاتفياً</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">إظهار الإحصائيات</p>
                      <p className="text-sm text-muted-foreground">عرض إحصائيات دوراتك للعامة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">البيانات والتحليلات</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تحليلات الاستخدام</p>
                      <p className="text-sm text-muted-foreground">السماح بجمع بيانات الاستخدام لتحسين الخدمة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ملفات تعريف الارتباط</p>
                      <p className="text-sm text-muted-foreground">استخدام ملفات تعريف الارتباط لتحسين التجربة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                إعدادات المظهر
              </CardTitle>
              <CardDescription>تخصيص مظهر المنصة حسب تفضيلاتك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">المظهر العام</h3>

                <div className="space-y-2">
                  <Label>نمط المظهر</Label>
                  <Select defaultValue="light">
                    <SelectTrigger className="no-shadow">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">فاتح</SelectItem>
                      <SelectItem value="dark">داكن</SelectItem>
                      <SelectItem value="system">تلقائي (حسب النظام)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>اللغة</Label>
                  <Select defaultValue="ar">
                    <SelectTrigger className="no-shadow">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>المنطقة الزمنية</Label>
                  <Select defaultValue="riyadh">
                    <SelectTrigger className="no-shadow">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">الرياض (GMT+3)</SelectItem>
                      <SelectItem value="dubai">دبي (GMT+4)</SelectItem>
                      <SelectItem value="cairo">القاهرة (GMT+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">تخصيص الألوان</h3>
                <p className="text-sm text-muted-foreground">اختر نظام الألوان المفضل لديك</p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4 cursor-pointer hover:border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">الأزرق (افتراضي)</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                      <div className="w-6 h-6 bg-secondary rounded"></div>
                      <div className="w-6 h-6 bg-success rounded"></div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4 cursor-pointer hover:border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">الأخضر</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <div className="w-6 h-6 bg-green-600 rounded"></div>
                      <div className="w-6 h-6 bg-green-400 rounded"></div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4 cursor-pointer hover:border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">البنفسجي</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                الفواتير والاشتراك
              </CardTitle>
              <CardDescription>إدارة اشتراكك ومعلومات الدفع</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-semibold">الخطة الحالية</h3>
                  <p className="text-sm text-muted-foreground">الخطة المجانية</p>
                </div>
                <Badge variant="outline" className="no-shadow">
                  مجاني
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">ترقية الخطة</h3>
                <p className="text-sm text-muted-foreground">احصل على المزيد من الميزات مع الخطط المدفوعة</p>
                <Button className="no-shadow">عرض الخطط المتاحة</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">طرق الدفع</h3>
                <div className="text-center py-8 border border-dashed border-border rounded-lg">
                  <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">لم تتم إضافة أي طريقة دفع بعد</p>
                  <Button variant="outline" className="no-shadow bg-transparent">
                    إضافة طريقة دفع
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">سجل الفواتير</h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">لا توجد فواتير بعد</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
