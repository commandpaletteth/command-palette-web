"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Building2, User, Mail, Phone, Users, MessageSquare, Loader2 } from "lucide-react"; // เพิ่ม Loader2
import { useLocale } from "next-intl";

export default function ContactPage() {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // เพิ่ม state สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    tel: "",
    size: "",
    inquiry: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert("Sent Successfully! / ส่งข้อความเรียบร้อยแล้วครับ เราจะติดต่อกลับโดยเร็วที่สุด");
            // เคลียร์ฟอร์ม
            setFormData({ name: "", company: "", email: "", tel: "", size: "", inquiry: "" });
        } else {
            alert("Failed to send. Please try again. / เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }
    } catch (error) {
        console.error(error);
        alert("Error sending message.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* Background & Header เหมือนเดิม... */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
      </div>

      <section className="relative z-10 pt-40 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
        </h1>
        <p className="text-xl text-slate-600">
          กรอกข้อมูลเพื่อให้เราติดต่อกลับ / Please fill in the form below
        </p>
      </section>

      {/* Form Section */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-2xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" /> Contact Name / ชื่อผู้ติดต่อ <span className="text-red-500">*</span>
              </label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                required 
                className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Mr. John Doe"
              />
            </div>

            {/* 2. Company */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" /> Company's Name / ชื่อบริษัท
              </label>
              <input 
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text" 
                className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Command & Palette Co., Ltd."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* 3. Email */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" /> Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        required 
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                {/* 4. Tel */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" /> Tel / เบอร์โทรติดต่อ
                    </label>
                    <input 
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="081-234-5678"
                    />
                </div>
            </div>

            {/* 5. Company Size */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" /> Company Size
              </label>
              <div className="relative">
                <select 
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none cursor-pointer text-slate-700"
                >
                    <option value="" disabled>Select size...</option>
                    <option value="1-10">1-10 คน (Small)</option>
                    <option value="10-50">10-50 คน (Medium)</option>
                    <option value="50-100">50-100 คน (Large)</option>
                    <option value="100+">100+ คน (Enterprise)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
              </div>
            </div>

            {/* 6. Inquiry */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" /> Inquiry / รายละเอียดที่ต้องการปรึกษา <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required 
                rows={5}
                className="w-full p-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl transition-all hover:scale-[1.02]"
                >
                    {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                    ) : (
                        <><Send className="w-5 h-5 mr-2" /> Send Inquiry</>
                    )}
                </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}