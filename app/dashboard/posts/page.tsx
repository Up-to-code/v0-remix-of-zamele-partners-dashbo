import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  FileText,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Heart,
  MessageSquare,
  Share,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function PostsPage() {
  const posts = [
    {
      id: 1,
      title: "نصائح لتعلم البرمجة بفعالية",
      content: "في هذا المنشور، سأشارككم أهم النصائح التي ساعدتني في رحلة تعلم البرمجة...",
      author: "أحمد محمد",
      authorAvatar: "/placeholder.svg?key=author1",
      publishedAt: "2024-02-15",
      status: "منشور",
      category: "نصائح",
      likes: 45,
      comments: 12,
      shares: 8,
      views: 234,
      featured: true,
    },
    {
      id: 2,
      title: "أفضل الأدوات للمطورين في 2024",
      content: "قائمة بأهم الأدوات والتقنيات التي يجب على كل مطور معرفتها هذا العام...",
      author: "أحمد محمد",
      authorAvatar: "/placeholder.svg?key=author2",
      publishedAt: "2024-02-10",
      status: "منشور",
      category: "أدوات",
      likes: 67,
      comments: 23,
      shares: 15,
      views: 456,
      featured: false,
    },
    {
      id: 3,
      title: "كيفية بناء مشروع برمجي من الصفر",
      content: "دليل شامل لبناء مشروع برمجي احترافي خطوة بخطوة...",
      author: "أحمد محمد",
      authorAvatar: "/placeholder.svg?key=author3",
      publishedAt: "2024-02-05",
      status: "مسودة",
      category: "تعليمي",
      likes: 0,
      comments: 0,
      shares: 0,
      views: 0,
      featured: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">إدارة المنشورات</h1>
          <p className="text-muted-foreground">أنشئ وأدر منشوراتك في المجتمع</p>
        </div>
        <Link href="/dashboard/posts/create">
          <Button className="no-shadow">
            <Plus className="w-4 h-4 ml-2" />
            منشور جديد
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">إجمالي المنشورات</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs text-success mt-2">+3 هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">إجمالي الإعجابات</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Heart className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-xs text-success mt-2">+89 هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">التعليقات</p>
                <p className="text-2xl font-bold">456</p>
              </div>
              <MessageSquare className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-xs text-success mt-2">+23 هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card className="no-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">المشاهدات</p>
                <p className="text-2xl font-bold">12.5K</p>
              </div>
              <Eye className="w-8 h-8 text-success" />
            </div>
            <p className="text-xs text-success mt-2">+1.2K هذا الأسبوع</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="no-shadow">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="البحث في المنشورات..." className="pr-10 no-shadow" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 no-shadow">
                <SelectValue placeholder="الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                <SelectItem value="tips">نصائح</SelectItem>
                <SelectItem value="tools">أدوات</SelectItem>
                <SelectItem value="tutorial">تعليمي</SelectItem>
                <SelectItem value="news">أخبار</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48 no-shadow">
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="published">منشور</SelectItem>
                <SelectItem value="draft">مسودة</SelectItem>
                <SelectItem value="scheduled">مجدول</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="no-shadow bg-transparent">
              <Filter className="w-4 h-4 ml-2" />
              تصفية
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="no-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold line-clamp-1">{post.title}</h3>
                        {post.featured && (
                          <Badge variant="secondary" className="no-shadow">
                            مميز
                          </Badge>
                        )}
                        <Badge variant={post.status === "منشور" ? "default" : "outline"} className="no-shadow">
                          {post.status}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground line-clamp-2 mb-3">{post.content}</p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.publishedAt}</span>
                        <Badge variant="outline" className="no-shadow">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="no-shadow">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="no-shadow">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 ml-2" />
                          عرض
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 ml-2" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 ml-2" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="w-4 h-4" />
                        {post.shares}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="no-shadow bg-transparent">
                        <Eye className="w-4 h-4 ml-1" />
                        عرض
                      </Button>
                      <Button variant="outline" size="sm" className="no-shadow bg-transparent">
                        <Edit className="w-4 h-4 ml-1" />
                        تعديل
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (if no posts) */}
      {posts.length === 0 && (
        <Card className="no-shadow">
          <CardContent className="text-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">لا توجد منشورات بعد</h3>
            <p className="text-muted-foreground mb-6">ابدأ بإنشاء منشورك الأول</p>
            <Link href="/dashboard/posts/create">
              <Button className="no-shadow">
                <Plus className="w-4 h-4 ml-2" />
                إنشاء منشور جديد
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
