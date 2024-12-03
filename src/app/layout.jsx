import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

export const metadata = {
  // title: "بلاگ اپ",
  title: {
    template: "%s | بلاگ ها",
    default: "بلاگ اپ", //a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <div>
          <Header />
        </div>
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
