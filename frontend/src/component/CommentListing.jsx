import { Star } from 'lucide-react';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";

const DEMO_DATA = {
  name: 'Cody Fisher',
  date: 'May 20, 2021',
  comment: 'There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.',
  starPoint: 5,
};

const CommentListing= ({ className = '', data = DEMO_DATA, hasListingTitle }) => {
  const [datas, setDatas] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.141.9.175:5000/ulasan');
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        console.log(data);
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.141.9.175:5000/user');
        const fetchedDatas = await response.json();
        const { data } = fetchedDatas;
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  datas.filter((ulasan) => (ulasan.id_wisata == id)).map((data, index) => {
    console.log(data.ulasan);
  })
  return (
    <div className={`nc-CommentListing flex space-x-4 ${className}`} data-nc-id="CommentListing">
      <div className="pt-0.5">
        {/* <Avatar sizeClass="h-10 w-10 text-lg" radius="rounded-full" userName={data.name} imgUrl={data.avatar} /> */}
      </div>
      {datas.filter((ulasan) => (ulasan.id_wisata == id)).map((data, index) => {
        return <div className="flex-grow">
          <div className="flex justify-between space-x-3">
            <div className="flex flex-col">
              <div className="text-sm font-semibold">
                {users.filter(user => (data.id_user == user.id)).map((u, i) => ( 
                  <span>{u.username}</span>
                ))}
                {hasListingTitle && (
                  <>
                    <span className="text-neutral-500 dark:text-neutral-400 font-normal">{` review in `}</span>
                    <a href="/">The Lounge & Bar</a>
                  </>
                )}
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{format(
                        new Date(data.created_at),
                        "yyyy-MM-dd"
                      )}</span>
            </div>
            <div className="flex text-yellow-500">
              {Array.from({ length: data.rating }).map((_, i) => (
                <Star key={i} fill="#eab308" color="#eab308" className="w-4 h-4" />
              ))}
            </div>
          </div>
          <span className="block mt-3 text-neutral-6000 dark:text-neutral-300">{data.ulasan}</span>
        </div>
      })}
    </div>
  );
};

export default CommentListing;
