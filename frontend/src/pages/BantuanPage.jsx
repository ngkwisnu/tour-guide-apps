import React, { useEffect, useState } from "react";
import Accordion from "../component/Accordion";

export default function BantuanPage() {
  const [openContent, setOpenContent] = useState();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://54.254.36.46:5000/pusat-bantuan", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(datas);
  return (
    <div className="profile-container mb-8">
      <h1 className="profile-header text-center my-8 font-bold">
        Informasi Umum
      </h1>
      <div className="flex flex-col gap-6">
        {datas.map((faq, index) => (
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
