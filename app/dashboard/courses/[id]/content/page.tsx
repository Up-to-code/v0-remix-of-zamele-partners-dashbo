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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Upload,
  Plus,
  ArrowLeft,
  Save,
  Eye,
  FileText,
  Video,
  Clock,
  Users,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Move,
  Download,
  PlayCircle,
  BookOpen,
  CheckCircle,
  GripVertical,
} from "lucide-react"
import NextLink from "next/link"

export default function CourseContentPage({ params }: { params: { id: string } }) {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [editMode, setEditMode] = useState(false)

  const courseData = {
    id: params.id,
    title: "أساسيات البرمجة بـ Python",
    description: "تعلم أساسيات البرمجة باستخدام لغة Python من الصفر",
    status: "منشور",
    students: 156,
    progress: 75,
  }

  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "مقدمة في البرمجة",
      description: "نظرة عامة على البرمجة ولغة Python",
      type: "video",
      duration: "15:30",
      status: "published",
      order: 1,
      videoUrl: "/sample-video.mp4",
      materials: [
        { id: 1, name: "ملاحظات الدرس.pdf", type: "pdf", size: "2.5 MB" },
        { id: 2, name: "كود المثال.py", type: "code", size: "1.2 KB" },
      ],
      quiz: {
        questions: 5,
        passingScore: 80,
        attempts: 3,
      },
      completed: true,
    },
    {
      id: 2,
      title: "تثبيت Python وإعداد البيئة",
      description: "كيفية تثبيت Python وإعداد بيئة التطوير",
      type: "video",
      duration: "12:45",
      status: "published",
      order: 2,
      videoUrl: "/sample-video-2.mp4",
      materials: [{ id: 3, name: "دليل التثبيت.pdf", type: "pdf", size: "1.8 MB" }],
      quiz: null,
      completed: false,
    },
    {
      id: 3,
      title: "المتغيرات وأنواع البيانات",
      description: "فهم المتغيرات وأنواع البيانات المختلفة في Python",
      type: "video",
      duration: "18:20",
      status: "draft",
      order: 3,
      videoUrl: null,
      materials: [],
      quiz: {
        questions: 8,
        passingScore: 75,
        attempts: 2,
      },
      completed: false,
    },
    {
      id: 4,
      title: "اختبار الوحدة الأولى",
      description: "اختبار شامل لما تم تعلمه في الوحدة الأولى",
      type: "quiz",
      duration: "30:00",
      status: "published",
      order: 4,
      videoUrl: null,
      materials: [],
      quiz: {
        questions: 15,
        passingScore: 85,
        attempts: 2,
      },
      completed: false,
    },
  ])

  const addLesson = () => {
    const newLesson = {
      id: lessons.length + 1,
      title: "درس جديد",
      description: "",
      type: "video",
      duration: "00:00",
      status: "draft",
      order: lessons.length + 1,
      videoUrl: null,
      materials: [],
      quiz: null,
      completed: false,
    }
    setLessons([...lessons, newLesson])
    setSelectedLesson(newLesson.id)
    setEditMode(true)
  }

  const deleteLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id))
    if (selectedLesson === id) {
      setSelectedLesson(null)
    }
  }

  const duplicateLesson = (id: number) => {
    const lesson = lessons.find((l) => l.id === id)
    if (lesson) {
      const newLesson = {
        ...lesson,
        id: Math.max(...lessons.map((l) => l.id)) + 1,
        title: `${lesson.title} (نسخة)`,
        order: lessons.length + 1,
        status: "draft",
      }
      setLessons([...lessons, newLesson])
    }
  }

  const selectedLessonData = lessons.find((l) => l.id === selectedLesson)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NextLink href="/dashboard/courses">
            <Button variant="ghost" size="sm" className="minimal-button">
              <ArrowLeft className="w-4 h-4 ml-1" />
              العودة للدورات
            </Button>
          </NextLink>
          <div>
            <h1 className="text-display">إدارة محتوى الدورة</h1>
            <p className="text-body text-muted-foreground mt-2">{courseData.title}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="minimal-button bg-transparent">
            <Eye className="w-4 h-4 ml-2" />
            معاينة الدورة
          </Button>
          <Button className="minimal-button">
            <Save className="w-4 h-4 ml-2" />
            حفظ التغييرات
          </Button>
        </div>
      </div>

      {/* Course Overview */}
      <Card className="minimal-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-callout font-medium">{lessons.length} دروس</p>
                <p className="text-caption text-muted-foreground">إجمالي المحتوى</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-callout font-medium">{courseData.students} طالب</p>
                <p className="text-caption text-muted-foreground">مسجل في الدورة</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-callout font-medium">
                  {lessons
                    .reduce((acc, lesson) => {
                      const [minutes, seconds] = lesson.duration.split(":").map(Number)
                      return acc + minutes + seconds / 60
                    }, 0)
                    .toFixed(0)}{" "}
                  دقيقة
                </p>
                <p className="text-caption text-muted-foreground">المدة الإجمالية</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-callout font-medium">{courseData.progress}%</p>
                <p className="text-caption text-muted-foreground">متوسط الإكمال</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lessons List */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="minimal-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-title-3">قائمة الدروس</CardTitle>
                <Button onClick={addLesson} size="sm" className="minimal-button">
                  <Plus className="w-4 h-4 ml-1" />
                  إضافة
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedLesson === lesson.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted/30"
                  }`}
                  onClick={() => setSelectedLesson(lesson.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex items-center gap-2 mt-1">
                        <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
                        <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {lesson.type === "video" && <Video className="w-4 h-4 text-primary" />}
                          {lesson.type === "quiz" && <CheckCircle className="w-4 h-4 text-secondary" />}
                          {lesson.type === "text" && <FileText className="w-4 h-4 text-warning" />}
                          <h4 className="text-callout font-medium truncate">{lesson.title}</h4>
                        </div>
                        <div className="flex items-center gap-2 text-caption text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{lesson.duration}</span>
                          <Badge
                            variant={
                              lesson.status === "published"
                                ? "default"
                                : lesson.status === "draft"
                                  ? "outline"
                                  : "secondary"
                            }
                            className="minimal-badge text-xs"
                          >
                            {lesson.status === "published" ? "منشور" : lesson.status === "draft" ? "مسودة" : "مراجعة"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="minimal-button">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setEditMode(true)}>
                          <Edit className="w-4 h-4 ml-2" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => duplicateLesson(lesson.id)}>
                          <Copy className="w-4 h-4 ml-2" />
                          نسخ
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Move className="w-4 h-4 ml-2" />
                          نقل
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteLesson(lesson.id)} className="text-destructive">
                          <Trash2 className="w-4 h-4 ml-2" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Lesson Content Editor */}
        <div className="lg:col-span-2">
          {selectedLessonData ? (
            <Card className="minimal-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-title-3">{selectedLessonData.title}</CardTitle>
                    <CardDescription>تعديل محتوى الدرس وإعداداته</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditMode(!editMode)}
                      className="minimal-button bg-transparent"
                    >
                      {editMode ? <Eye className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                      {editMode ? "معاينة" : "تعديل"}
                    </Button>
                    <Button size="sm" className="minimal-button">
                      <Save className="w-4 h-4 ml-1" />
                      حفظ
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 minimal-tabs">
                    <TabsTrigger value="content">المحتوى</TabsTrigger>
                    <TabsTrigger value="materials">المواد</TabsTrigger>
                    <TabsTrigger value="quiz">الاختبار</TabsTrigger>
                    <TabsTrigger value="settings">الإعدادات</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-6 mt-6">
                    {editMode ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="lesson-title">عنوان الدرس</Label>
                          <Input id="lesson-title" value={selectedLessonData.title} className="minimal-input" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lesson-description">وصف الدرس</Label>
                          <Textarea
                            id="lesson-description"
                            value={selectedLessonData.description}
                            rows={3}
                            className="minimal-input"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>نوع المحتوى</Label>
                            <Select value={selectedLessonData.type}>
                              <SelectTrigger className="minimal-input">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="video">فيديو</SelectItem>
                                <SelectItem value="text">نص</SelectItem>
                                <SelectItem value="quiz">اختبار</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lesson-duration">المدة</Label>
                            <Input
                              id="lesson-duration"
                              value={selectedLessonData.duration}
                              placeholder="15:30"
                              className="minimal-input"
                            />
                          </div>
                        </div>
                        {selectedLessonData.type === "video" && (
                          <div className="space-y-2">
                            <Label>فيديو الدرس</Label>
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                              {selectedLessonData.videoUrl ? (
                                <div className="space-y-4">
                                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                                  </div>
                                  <div className="flex gap-2 justify-center">
                                    <Button variant="outline" size="sm" className="minimal-button bg-transparent">
                                      <Edit className="w-4 h-4 ml-1" />
                                      استبدال
                                    </Button>
                                    <Button variant="outline" size="sm" className="minimal-button bg-transparent">
                                      <Trash2 className="w-4 h-4 ml-1" />
                                      حذف
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                  <h3 className="text-callout font-medium mb-2">ارفع فيديو الدرس</h3>
                                  <p className="text-caption text-muted-foreground mb-4">
                                    MP4, MOV, AVI (الحد الأقصى 500MB)
                                  </p>
                                  <Button variant="outline" className="minimal-button bg-transparent">
                                    اختيار ملف
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-callout font-medium mb-2">{selectedLessonData.title}</h3>
                          <p className="text-callout text-muted-foreground">{selectedLessonData.description}</p>
                        </div>
                        {selectedLessonData.type === "video" && selectedLessonData.videoUrl && (
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <PlayCircle className="w-16 h-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="materials" className="space-y-6 mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-callout font-medium">مواد الدرس</h3>
                      <Button size="sm" className="minimal-button">
                        <Plus className="w-4 h-4 ml-1" />
                        إضافة مادة
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {selectedLessonData.materials.map((material) => (
                        <div key={material.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              {material.type === "pdf" && <FileText className="w-4 h-4 text-primary" />}
                              {material.type === "code" && <FileText className="w-4 h-4 text-secondary" />}
                            </div>
                            <div>
                              <p className="text-callout font-medium">{material.name}</p>
                              <p className="text-caption text-muted-foreground">{material.size}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="minimal-button">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="minimal-button text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {selectedLessonData.materials.length === 0 && (
                        <div className="text-center py-8">
                          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-callout text-muted-foreground">لا توجد مواد مرفقة</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="quiz" className="space-y-6 mt-6">
                    {selectedLessonData.quiz ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-callout font-medium">إعدادات الاختبار</h3>
                          <Button size="sm" className="minimal-button">
                            <Edit className="w-4 h-4 ml-1" />
                            تعديل الأسئلة
                          </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <p className="text-title-2 font-bold">{selectedLessonData.quiz.questions}</p>
                            <p className="text-caption text-muted-foreground">أسئلة</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <p className="text-title-2 font-bold">{selectedLessonData.quiz.passingScore}%</p>
                            <p className="text-caption text-muted-foreground">درجة النجاح</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <p className="text-title-2 font-bold">{selectedLessonData.quiz.attempts}</p>
                            <p className="text-caption text-muted-foreground">محاولات</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-callout text-muted-foreground mb-4">لا يوجد اختبار لهذا الدرس</p>
                        <Button className="minimal-button">
                          <Plus className="w-4 h-4 ml-2" />
                          إضافة اختبار
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-6 mt-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>حالة النشر</Label>
                        <Select value={selectedLessonData.status}>
                          <SelectTrigger className="minimal-input">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">مسودة</SelectItem>
                            <SelectItem value="review">قيد المراجعة</SelectItem>
                            <SelectItem value="published">منشور</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="preview">معاينة مجانية</Label>
                        <Switch id="preview" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="downloadable">قابل للتحميل</Label>
                        <Switch id="downloadable" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="comments">السماح بالتعليقات</Label>
                        <Switch id="comments" defaultChecked />
                      </div>
                      <Separator />
                      <div className="space-y-3 text-callout">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">تاريخ الإنشاء:</span>
                          <span>2024-02-15</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">آخر تعديل:</span>
                          <span>2024-02-20</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">المشاهدات:</span>
                          <span>1,234</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="minimal-card">
              <CardContent className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-title-3 mb-2">اختر درساً للتعديل</h3>
                <p className="text-body text-muted-foreground mb-6">اختر درساً من القائمة الجانبية لبدء تعديل محتواه</p>
                <Button onClick={addLesson} className="minimal-button">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة درس جديد
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
