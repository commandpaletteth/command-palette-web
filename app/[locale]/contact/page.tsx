"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Building2, User, Mail, Phone, Users, MessageSquare, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('Contact'); // ✅ ใช้ JSON เพื่อความ Professional
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        // Parse response เพื่อดูผลลัพธ์จาก API
        const result = await res.json();

        if (res.ok && result.success) {
            alert(t('alert_success'));
            setFormData({ name: "", company: "", email: "", tel: "", size: "", inquiry: "" });
        } else {
            alert(t('alert_error'));
        }
    } catch (error) {
        console.error(error);
        alert(t('alert_error'));
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100/50 overflow-hidden relative flex flex-col">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-200/30 blur-[120px] animate-pulse-slow mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-700 mix-blend-multiply" />
      </div>

      <section className="relative z-10 pt-40 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          {t('title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('title_highlight')}</span>
        </h1>
        <p className="text-xl text-slate-600">
          {t('subtitle')}
        </p>
      </section>

      {/* Form Section */}
      <div className="relative z-10 container mx-auto px-6 pb-24 max-w-2xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" /> {t('label_name')} <span className="text-red-500">*</span>
              </label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                required 
                className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder={t('holder_name')}
              />
            </div>

            {/* 2. Company */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" /> {t('label_company')}
              </label>
              <input 
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text" 
                className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder={t('holder_company')}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* 3. Email */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" /> {t('label_email')} <span className="text-red-500">*</span>
                    </label>
                    <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        required 
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder={t('holder_email')}
                    />
                </div>

                {/* 4. Tel */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" /> {t('label_tel')}
                    </label>
                    <input 
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder={t('holder_tel')}
                    />
                </div>
            </div>

            {/* 5. Company Size */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" /> {t('label_size')}
              </label>
              <div className="relative">
                <select 
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none cursor-pointer text-slate-700"
                >
                    <option value="" disabled>{t('select_size')}</option>
                    <option value="1-10">1-10 (Small)</option>
                    <option value="10-50">10-50 (Medium)</option>
                    <option value="50-100">50-100 (Large)</option>
                    <option value="100+">100+ (Enterprise)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
              </div>
            </div>

            {/* 6. Inquiry */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" /> {t('label_inquiry')} <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required 
                rows={5}
                className="w-full p-4 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder={t('holder_inquiry')}
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
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> {t('btn_sending')}</>
                    ) : (
                        <><Send className="w-5 h-5 mr-2" /> {t('btn_submit')}</>
                    )}
                </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}