import TextField from "@/ui/TextField";
import { useState } from "react";

export const metadata = {
  title: "ثبت نام",
};

function Signup() {
  const [ form, setForm]=useState({})
  
  return (
    <div>
      <h1>ثبت نام</h1>
      <form action="">
        <TextField name="name" label="نام و نام خانوادگی" value={} onChange={} isRequired type="text" />
      </form>
    </div>
  );
}

export default page;
