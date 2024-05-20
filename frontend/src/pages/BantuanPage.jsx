import React, { useState } from "react";
import Accordion from "../component/Accordion";

const faqTemp = [
  {
    title: "apa itu invoice?",
    content: `Invoice adalah faktur yang akan didapatkan saat Anda sudah berhasil melakukan pembayaran dan upload bukti pembayaran`,
  },
  {
    title: "bagaimana cara saya memesan tour guide?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        incidunt amet accusamus aperiam laboriosam facere ipsa impedit
        natus, asperiores a!`,
  },
  {
    title: "bagaimana mengubah akun saya?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        incidunt amet accusamus aperiam laboriosam facere ipsa impedit
        natus, asperiores a!`,
  },
];

export default function BantuanPage() {
  const [openContent, setOpenContent] = useState();

  return (
    <div className="profile-container">
      <h1 className="profile-header text-center mb-8">Informasi Umum</h1>
      <div className="flex flex-col gap-6">
        {faqTemp.map((faq, index) => (
          <Accordion
            key={index}
            faq={faq}
            index={index}
            openContent={openContent}
            setOpenContent={setOpenContent}
          />
        ))}
      </div>
    </div>
  );
}
