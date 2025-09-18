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
import { Upload, X, ArrowLeft, Save, Eye, ImageIcon, Video, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function CreatePostPage() {
  const [tags, setTags] = useState(["برمجة", "نصائح"])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/posts">
            <Button variant="ghost" size="sm" className="no-shadow">
              <ArrowLeft className="w-4 h-4 ml-1" />
              العودة
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">إنشاء منشور جديد</h1>
            <p className="text-muted-foreground">شارك معرفتك مع المجتمع</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="no-shadow bg-transparent">
            <Eye className="w-4 h-4 ml-2" />
            معاينة
          </Button>
          <Button className="no-shadow">
            <Save className="w-4 h-4 ml-2" />
            نشر
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Content */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>محتوى المنشور</CardTitle>
              <CardDescription>اكتب محتوى منشورك هنا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">عنوان المنشور</Label>
                <Input id="title" placeholder="مثال: نصائح لتعلم البرمجة بفعالية" className="no-shadow" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">مقتطف (اختياري)</Label>
                <Textarea
                  id="excerpt"
                  placeholder="مقتطف قصير يظهر في معاينة المنشور..."
                  rows={2}
                  className="no-shadow"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">المحتوى</Label>
                <Textarea id="content" placeholder="اكتب محتوى منشورك هنا..." rows={12} className="no-shadow" />
              </div>

              {/* Rich Text Toolbar */}
              <div className="flex items-center gap-2 p-2 border border-border rounded-lg">
                <Button variant="ghost" size="sm" className="no-shadow">
                  <strong>B</strong>
                </Button>
                <Button variant="ghost" size="sm" className="no-shadow">
                  <em>I</em>
                </Button>
                <Button variant="ghost" size="sm" className="no-shadow">
                  <u>U</u>
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm" className="no-shadow">
                  <LinkIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="no-shadow">
                  <ImageIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="no-shadow">
                  <Video className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Media Upload */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>الوسائط</CardTitle>
              <CardDescription>أضف صور أو فيديوهات لمنشورك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">ارفع الوسائط</h3>
                <p className="text-sm text-muted-foreground mb-4">PNG, JPG, GIF, MP4 (الحد الأقصى 10MB)</p>
                <Button variant="outline" className="no-shadow bg-transparent">
                  اختيار ملفات
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Post Settings */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>إعدادات المنشور</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>الحالة</Label>
                <Select>
                  <SelectTrigger className="no-shadow">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">مسودة</SelectItem>
                    <SelectItem value="published">منشور</SelectItem>
                    <SelectItem value="scheduled">مجدول</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>الفئة</Label>
                <Select>
                  <SelectTrigger className="no-shadow">
                    <SelectValue placeholder="اختر الفئة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tips">نصائح</SelectItem>
                    <SelectItem value="tools">أدوات</SelectItem>
                    <SelectItem value="tutorial">تعليمي</SelectItem>
                    <SelectItem value="news">أخبار</SelectItem>
                    <SelectItem value="discussion">نقاش</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="featured">منشور مميز</Label>
                <Switch id="featured" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="comments">السماح بالتعليقات</Label>
                <Switch id="comments" defaultChecked />
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">تاريخ الإنشاء:</span>
                  <span className="font-medium">{new Date().toLocaleDateString("ar-SA")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">آخر تعديل:</span>
                  <span className="font-medium">الآن</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>الكلمات المفتاحية</CardTitle>
              <CardDescription>أضف كلمات مفتاحية لتسهيل البحث</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="أضف كلمة مفتاحية"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                  className="no-shadow"
                />
                <Button onClick={addTag} variant="outline" className="no-shadow bg-transparent">
                  إضافة
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="no-shadow">
                    {tag}
                    <X className="w-3 h-3 mr-1 cursor-pointer" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>إعدادات SEO</CardTitle>
              <CardDescription>تحسين المنشور لمحركات البحث</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">عنوان SEO</Label>
                <Input id="metaTitle" placeholder="عنوان محسن لمحركات البحث" className="no-shadow" />
                <p className="text-xs text-muted-foreground">0/60 حرف</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">وصف SEO</Label>
                <Textarea id="metaDescription" placeholder="وصف مختصر للمنشور" rows={3} className="no-shadow" />
                <p className="text-xs text-muted-foreground">0/160 حرف</p>
              </div>
            </CardContent>
          </Card>

          {/* Scheduling */}
          <Card className="no-shadow">
            <CardHeader>
              <CardTitle>جدولة النشر</CardTitle>
              <CardDescription>حدد موعد نشر المنشور</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="publishDate">تاريخ النشر</Label>
                <Input id="publishDate" type="datetime-local" className="no-shadow" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="autoPublish">نشر تلقائي</Label>
                <Switch id="autoPublish" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
