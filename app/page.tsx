import Card from "@/components/Card";
import { Test10, Test11, Test12, Test4, Test5, Test6, Test7, Test8 } from "@/components/Test";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 1-3: ให้ออกแบบ code HTML CSS Stylesheet และ ให้เขียน Code เพิ่ม
            Effect ที่ทำให้หน้าหน้าสนใจมากขึ้น
          </h1>
        </div>

        <div>
          <h1 className="text-red-500 font-semibold text-5xl">RECOMMENTDED</h1>
          <h3 className="text-red-500 font-thin text-5xl italic">Recipes</h3>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <Card
            name="THANG NOODLE"
            title="20 mins | 4 sevirgs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit provident. Sapiente aspernatur veniam odit aliquam ipsa laborum iure hic consequuntur quas."
            image="/images/1.jpg"
          />
          <Card
            name="THANG NOODLE"
            title="20 mins | 4 sevirgs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit provident. Sapiente aspernatur veniam odit aliquam ipsa laborum iure hic consequuntur quas."
            image="/images/1.jpg"
          />
          <Card
            name="THANG NOODLE"
            title="20 mins | 4 sevirgs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit provident. Sapiente aspernatur veniam odit aliquam ipsa laborum iure hic consequuntur quas."
            image="/images/1.jpg"
          />
          <Card
            name="THANG NOODLE"
            title="20 mins | 4 sevirgs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit provident. Sapiente aspernatur veniam odit aliquam ipsa laborum iure hic consequuntur quas."
            image="/images/1.jpg"
          />
        </div>
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 4: จากตาราง Customer ให้เขียน Query เพื่อแสดงข้อมูล Used ที่มีค่ามากกว่า 500,000
          </h1>
        </div>
        <Test4 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 5: จากตาราง Customer และตาราง Order ให้เขียน Query เชื่อมข้อมูล 2 ตารางเข้าด้วยกัน
          </h1>
        </div>
        <Test5 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 6: ระบบจำหน่ายหนังสือออนไลน์
          </h1>
        </div>
        <Test6 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 7: ถังน้ำ 5,832 ลิตร ถูกใช้วันละ 1/3 ของปริมาณน้ำที่เหลืออยู่
            เป็นเวลา 7 วัน น้ำจะเหลือเท่าไหร่
          </h1>
        </div>
        <Test7 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 8: ให้เขียนโปรแกรมรับ Input เป็นตัวเลข 1 ตัว
            แล้วแสดงเป็นรูปสามเหลี่ยมกลับด้าน
          </h1>
        </div>
        <Test8 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 10: ตะกร้าผลไม้มีทั้งหมด 10 ลูก ส้มเป็น 2 เท่าของมังคุด มังคุด 
            X ลูก และมะม่วง 1 ลูก ถ้าหยิบผลไม้แบบสุ่ม 3 ลูก
            จงหาความน่าจะเป็นที่จะหยิบได้ผลไม้ชนิดละ 1 ลูก
          </h1>
        </div>
        <Test10 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 11: บวกเลขโดยใช้เฉพาะเลข 8 ให้ได้ 1,000
          </h1>
        </div>
        <Test11 />
        <div className="h-10 w-full bg-slate-800 shadow-xl flex items-center">
          <h1 className="text-white font-bold text-lg">
            ข้อ 12: ทอยลูกเต๋า 2 ลูก 1 ครั้ง จงหาความน่าจะเป็นที่
            ของผลรวมของแต้มเป็น 10 และของผลต่างของแต้มเป็น 2
          </h1>
        </div>
        <Test12 />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
