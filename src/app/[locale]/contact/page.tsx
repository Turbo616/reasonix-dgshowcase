"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const { locale } = useParams<{ locale: string }>();
  const zh = locale === "zh";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Inquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="container-page section-padding">
      <h1 className="text-3xl font-bold mb-4">
        {zh ? "联系我们" : "Contact Us"}
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        {zh
          ? "您正在规划您的项目但不知道如何落地？留下您的信息，立即获取咨询。"
          : "Are you planning to design your project but don't know how to shape it? Leave your information for immediate consultation."}
      </p>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="name"
                placeholder={zh ? "姓名 *" : "Name *"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-secondary border-border"
              />
              <Input
                name="email"
                type="email"
                placeholder={zh ? "邮箱 *" : "Email *"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-secondary border-border"
              />
            </div>
            <Input
              name="phone"
              placeholder={zh ? "电话/WhatsApp" : "Phone/WhatsApp"}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-secondary border-border"
            />
            <Input
              name="company"
              placeholder={zh ? "公司名称" : "Company Name"}
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="bg-secondary border-border"
            />
            <select
              name="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full h-8 rounded-lg border border-border bg-secondary px-2.5 text-sm text-foreground outline-none focus-visible:border-ring"
            >
              <option value="">
                {zh ? "请选择服务类型" : "Select Service"}
              </option>
              <option value="new-store">
                {zh ? "新店开业" : "New Store Opening"}
              </option>
              <option value="renovation">
                {zh ? "店面改造" : "Store Renovation"}
              </option>
              <option value="purchase">
                {zh ? "仅购买展示柜" : "Display Case Purchase Only"}
              </option>
              <option value="design">
                {zh ? "仅设计服务" : "Design Services Only"}
              </option>
            </select>
            <Textarea
              name="message"
              placeholder={
                zh ? "请描述您的需求..." : "Describe your requirements..."
              }
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className="bg-secondary border-border"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light px-6 py-3 font-medium transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <span className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {status === "loading"
                ? zh
                  ? "发送中..."
                  : "Sending..."
                : zh
                  ? "立即发送询盘"
                  : "Send Inquiry Now"}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">{statusMessage}</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-rose-400 bg-rose-400/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{statusMessage}</span>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="bg-card/50 border-border p-6">
            <h3 className="font-semibold mb-4 text-gold">
              {zh ? "中国营销中心（展厅）" : "China Marketing Center (Showroom)"}
            </h3>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <span>
                {zh
                  ? "广州市从化区太平镇智汇国际大厦9楼（全层）"
                  : "9th Floor, Zhihui International Building, Taiping Town, Conghua District, Guangzhou"}
              </span>
            </div>
          </Card>

          <Card className="bg-card/50 border-border p-6">
            <h3 className="font-semibold mb-4 text-gold">
              {zh ? "中国制造中心" : "China Manufacturing Center"}
            </h3>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <span>
                {zh
                  ? "广州市从化区太平镇鼎贵工业园"
                  : "Dinggui Industrial Park, Taiping Town, Conghua District, Guangzhou"}
              </span>
            </div>
          </Card>

          <Card className="bg-card/50 border-border p-6">
            <h3 className="font-semibold mb-4 text-gold">
              {zh ? "联系方式" : "Contact Information"}
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span>+86 13610079233</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span>sales@degreefurniture.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span>dgshowcase@degreefurniture.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" />
                <span>
                  {zh
                    ? "周一至周六 9:00-18:00（北京时间）"
                    : "Mon-Sat 9:00-18:00 (Beijing Time)"}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
