"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Upload,
  X,
  Plus,
  ArrowLeft,
  Save,
  Eye,
  FileText,
  Video,
  ImageIcon,
  LinkIcon,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import NextLink from "next/link"

export default function CreateCoursePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [lessons, setLessons] = useState([
    { id: 1, title: "", description: "", duration: "", videoFile: null, type: "video", completed: false },
  ])
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: "",
    duration: "",
    thumbnail: null,
    tags: [],
    requirements: "",
    objectives: [],
    status: "draft",
  })

  const steps = [
    { id: 1, title: "المعلومات الأساسية", description: "تفاصيل الدورة الأساسية" },
    { id: 2, title: "المحتوى والدروس", description: "إضافة الدروس والمواد" },
    { id: 3, title: "الإعدادات المتقدمة", description: "التسعير والنشر" },
    { id: 4, title: "المراجعة والنشر", description: "مراجعة نهائية ونشر الدورة" },
  ]

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: lessons.length + 1,
        title: "",
        description: "",
        duration: "",
        videoFile: null,
        type: "video",
        completed: false,
      },
    ])
  }

  const removeLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id))
  }

  const addObjective = () => {
    setCourseData({
      ...courseData,
      objectives: [...courseData.objectives, ""],
    })
  }

  const removeObjective = (index: number) => {
    setCourseData({
      ...courseData,
      objectives: courseData.objectives.filter((_, i) => i !== index),
    })
  }

  const updateObjective = (index: number, value: string) => {
    const newObjectives = [...courseData.objectives]
    newObjectives[index] = value
    setCourseData({ ...courseData, objectives: newObjectives })
  }

  const getStepProgress = () => {
    return (currentStep / steps.length) * 100
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return courseData.title && courseData.description && courseData.category && courseData.level
      case 2:
        return lessons.length > 0 && lessons[0].title
      case 3:
        return courseData.price
      default:
        return true
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NextLink href="/dashboard/courses">
            <Button variant="ghost" size="sm" className="minimal-button">
              <ArrowLeft className="w-4 h-4 ml-1" />
              العودة
            </Button>
          </NextLink>
          <div>
            <h1 className="text-display">إنشاء دورة جديدة</h1>
            <p className="text-body text-muted-foreground mt-2">أضف محتوى تعليمي جديد للمنصة</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="minimal-button bg-transparent">
            <Eye className="w-4 h-4 ml-2" />
            معاينة
          </Button>
          <Button className="minimal-button">
            <Save className="w-4 h-4 ml-2" />
            حفظ المسودة
          </Button>
        </div>
      </div>

      {/* Progress Indicator */}
      <Card className="minimal-card">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-title-3">تقدم إنشاء الدورة</h3>
              <span className="text-callout font-medium">{Math.round(getStepProgress())}%</span>
            </div>
            <Progress value={getStepProgress()} className="h-2" />
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                    currentStep === step.id
                      ? "bg-primary/10 text-primary"
                      : currentStep > step.id
                        ? "bg-success/10 text-success"
                        : "bg-muted/30 text-muted-foreground"
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      currentStep === step.id
                        ? "bg-primary text-white"
                        : currentStep > step.id
                          ? "bg-success text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-3 h-3" /> : step.id}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-caption font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={currentStep.toString()} className="w-full">
        {/* Step 1: Basic Information */}
        <TabsContent value="1" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="minimal-card">
                <CardHeader>
                  <CardTitle className="text-title-3">المعلومات الأساسية</CardTitle>
                  <CardDescription>أدخل التفاصيل الأساسية للدورة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">عنوان الدورة *</Label>
                    <Input
                      id="title"
                      placeholder="مثال: أساسيات البرمجة بـ Python"
                      value={courseData.title}
                      onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                      className="minimal-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">وصف الدورة *</Label>
                    <Textarea
                      id="description"
                      placeholder="اكتب وصفاً شاملاً للدورة وما سيتعلمه الطلاب..."
                      rows={4}
                      value={courseData.description}
                      onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                      className="minimal-input"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">الفئة *</Label>
                      <Select
                        value={courseData.category}
                        onValueChange={(value) => setCourseData({ ...courseData, category: value })}
                      >
                        <SelectTrigger className="minimal-input">
                          <SelectValue placeholder="اختر الفئة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programming">البرمجة</SelectItem>
                          <SelectItem value="design">التصميم</SelectItem>
                          <SelectItem value="marketing">التسويق</SelectItem>
                          <SelectItem value="business">الأعمال</SelectItem>
                          <SelectItem value="languages">اللغات</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="level">المستوى *</Label>
                      <Select
                        value={courseData.level}
                        onValueChange={(value) => setCourseData({ ...courseData, level: value })}
                      >
                        <SelectTrigger className="minimal-input">
                          <SelectValue placeholder="اختر المستوى" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">مبتدئ</SelectItem>
                          <SelectItem value="intermediate">متوسط</SelectItem>
                          <SelectItem value="advanced">متقدم</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>أهداف التعلم</Label>
                    <div className="space-y-2">
                      {courseData.objectives.map((objective, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="مثال: فهم أساسيات البرمجة"
                            value={objective}
                            onChange={(e) => updateObjective(index, e.target.value)}
                            className="minimal-input"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeObjective(index)}
                            className="minimal-button text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={addObjective}
                        className="minimal-button bg-transparent"
                      >
                        <Plus className="w-4 h-4 ml-1" />
                        إضافة هدف
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="minimal-card">
                <CardHeader>
                  <CardTitle className="text-title-3">صورة الدورة</CardTitle>
                  <CardDescription>ارفع صورة جذابة تمثل محتوى الدورة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-callout font-medium mb-2">ارفع صورة الدورة</h3>
                    <p className="text-caption text-muted-foreground mb-4">PNG, JPG أو GIF (الحد الأقصى 5MB)</p>
                    <Button variant="outline" className="minimal-button bg-transparent">
                      اختيار ملف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="minimal-card">
                <CardHeader>
                  <CardTitle className="text-title-3">معاينة الدورة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-callout font-medium">{courseData.title || "عنوان الدورة"}</h4>
                    <p className="text-caption text-muted-foreground mt-1">
                      {courseData.description || "وصف الدورة سيظهر هنا..."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {courseData.category && (
                      <Badge variant="outline" className="minimal-badge">
                        {courseData.category}
                      </Badge>
                    )}
                    {courseData.level && (
                      <Badge variant="outline" className="minimal-badge">
                        {courseData.level}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="minimal-card">
                <CardHeader>
                  <CardTitle className="text-title-3">متطلبات الدورة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="مثال: معرفة أساسية بالحاسوب، لا يتطلب خبرة سابقة في البرمجة..."
                    rows={4}
                    value={courseData.requirements}
                    onChange={(e) => setCourseData({ ...courseData, requirements: e.target.value })}
                    className="minimal-input"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setCurrentStep(2)} disabled={!validateStep(1)} className="minimal-button">
              التالي: المحتوى والدروس
            </Button>
          </div>
        </TabsContent>

        {/* Step 2: Content and Lessons */}
        <TabsContent value="2" className="space-y-6">
          <Card className="minimal-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-title-3">دروس الدورة</CardTitle>
                  <CardDescription>أضف الدروس والمحتوى التعليمي</CardDescription>
                </div>
                <Button onClick={addLesson} variant="outline" size="sm" className="minimal-button bg-transparent">
                  <Plus className="w-4 h-4 ml-1" />
                  إضافة درس
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="minimal-badge">
                        الدرس {index + 1}
                      </Badge>
                      <Select defaultValue="video">
                        <SelectTrigger className="w-32 minimal-input">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">
                            <div className="flex items-center gap-2">
                              <Video className="w-4 h-4" />
                              فيديو
                            </div>
                          </SelectItem>
                          <SelectItem value="text">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              نص
                            </div>
                          </SelectItem>
                          <SelectItem value="quiz">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              اختبار
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {lessons.length > 1 && (
                      <Button
                        onClick={() => removeLesson(lesson.id)}
                        variant="ghost"
                        size="sm"
                        className="minimal-button text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>عنوان الدرس *</Label>
                      <Input placeholder="مثال: مقدمة في Python" className="minimal-input" />
                    </div>
                    <div className="space-y-2">
                      <Label>مدة الدرس</Label>
                      <div className="relative">
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input placeholder="15 دقيقة" className="minimal-input pr-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>وصف الدرس</Label>
                    <Textarea placeholder="اكتب وصفاً مختصراً للدرس..." rows={2} className="minimal-input" />
                  </div>

                  <div className="space-y-2">
                    <Label>محتوى الدرس</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <Video className="w-8 h-8 text-muted-foreground" />
                        <FileText className="w-8 h-8 text-muted-foreground" />
                        <LinkIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-callout font-medium mb-2">ارفع محتوى الدرس</p>
                      <p className="text-caption text-muted-foreground mb-4">فيديو، مستند، أو رابط خارجي</p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="outline" size="sm" className="minimal-button bg-transparent">
                          <Upload className="w-4 h-4 ml-1" />
                          رفع ملف
                        </Button>
                        <Button variant="outline" size="sm" className="minimal-button bg-transparent">
                          <LinkIcon className="w-4 h-4 ml-1" />
                          إضافة رابط
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(1)} className="minimal-button bg-transparent">
              السابق
            </Button>
            <Button onClick={() => setCurrentStep(3)} disabled={!validateStep(2)} className="minimal-button">
              التالي: الإعدادات المتقدمة
            </Button>
          </div>
        </TabsContent>

        {/* Step 3: Advanced Settings */}
        <TabsContent value="3" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-title-3">التسعير والوصول</CardTitle>
                <CardDescription>حدد سعر الدورة وإعدادات الوصول</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="price">سعر الدورة (ريال) *</Label>
                  <div className="relative">
                    <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="price"
                      type="number"
                      placeholder="299"
                      value={courseData.price}
                      onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                      className="minimal-input pr-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">المدة المتوقعة</Label>
                  <div className="relative">
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="duration"
                      placeholder="8 ساعات"
                      value={courseData.duration}
                      onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                      className="minimal-input pr-10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="free-preview">معاينة مجانية</Label>
                  <Switch id="free-preview" />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="certificate">شهادة إتمام</Label>
                  <Switch id="certificate" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="downloadable">محتوى قابل للتحميل</Label>
                  <Switch id="downloadable" />
                </div>
              </CardContent>
            </Card>

            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-title-3">إعدادات النشر</CardTitle>
                <CardDescription>تحكم في كيفية ووقت نشر الدورة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>حالة الدورة</Label>
                  <Select
                    value={courseData.status}
                    onValueChange={(value) => setCourseData({ ...courseData, status: value })}
                  >
                    <SelectTrigger className="minimal-input">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">مسودة</SelectItem>
                      <SelectItem value="review">قيد المراجعة</SelectItem>
                      <SelectItem value="published">منشور</SelectItem>
                      <SelectItem value="scheduled">مجدول</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publish-date">تاريخ النشر</Label>
                  <Input id="publish-date" type="datetime-local" className="minimal-input" />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="featured">دورة مميزة</Label>
                  <Switch id="featured" />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="comments">السماح بالتعليقات</Label>
                  <Switch id="comments" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="enrollment-limit">حد التسجيل</Label>
                  <Switch id="enrollment-limit" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(2)} className="minimal-button bg-transparent">
              السابق
            </Button>
            <Button onClick={() => setCurrentStep(4)} disabled={!validateStep(3)} className="minimal-button">
              التالي: المراجعة والنشر
            </Button>
          </div>
        </TabsContent>

        {/* Step 4: Review and Publish */}
        <TabsContent value="4" className="space-y-6">
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-title-3">مراجعة الدورة</CardTitle>
              <CardDescription>تأكد من صحة جميع المعلومات قبل النشر</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">عنوان الدورة</h4>
                    <p className="text-callout">{courseData.title || "غير محدد"}</p>
                  </div>
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">الفئة والمستوى</h4>
                    <div className="flex gap-2 mt-1">
                      {courseData.category && (
                        <Badge variant="outline" className="minimal-badge">
                          {courseData.category}
                        </Badge>
                      )}
                      {courseData.level && (
                        <Badge variant="outline" className="minimal-badge">
                          {courseData.level}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">السعر والمدة</h4>
                    <p className="text-callout">
                      {courseData.price} ريال - {courseData.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">عدد الدروس</h4>
                    <p className="text-callout">{lessons.length} درس</p>
                  </div>
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">أهداف التعلم</h4>
                    <p className="text-callout">{courseData.objectives.length} هدف</p>
                  </div>
                  <div>
                    <h4 className="text-callout font-medium text-muted-foreground">حالة النشر</h4>
                    <Badge variant="outline" className="minimal-badge">
                      {courseData.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-callout font-medium">قائمة التحقق النهائية</h4>
                <div className="space-y-2">
                  {[
                    { label: "تم إضافة عنوان ووصف الدورة", completed: courseData.title && courseData.description },
                    { label: "تم تحديد الفئة والمستوى", completed: courseData.category && courseData.level },
                    { label: "تم إضافة درس واحد على الأقل", completed: lessons.length > 0 },
                    { label: "تم تحديد السعر", completed: courseData.price },
                    { label: "تم رفع صورة الدورة", completed: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-warning" />
                      )}
                      <span className={`text-callout ${item.completed ? "text-foreground" : "text-muted-foreground"}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(3)} className="minimal-button bg-transparent">
              السابق
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="minimal-button bg-transparent">
                <Save className="w-4 h-4 ml-2" />
                حفظ كمسودة
              </Button>
              <Button className="minimal-button">
                <CheckCircle className="w-4 h-4 ml-2" />
                نشر الدورة
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
