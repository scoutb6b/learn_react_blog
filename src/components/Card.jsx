import React from "react";
import { posts } from "../data/posts";
import { format } from "date-fns";

const Card = () => {
  const dateFormat = (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  };
  return (
    <div className="mt-8">
      {posts.map((item) => {
        return (
          <div
            key={item.id}
            className="w-3/4 mx-auto border border-gray-300 p-4 mb-6 rounded-lg "
          >
            <div className="flex justify-between">
              <p>{dateFormat(item.createdAt)}</p>
              <div className="flex gap-2">
                {item.categories.map((category) => (
                  <p className="border border-blue-300 rounded-md px-2 py-1 text-blue-500 ">
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-bold my-4">{item.title}</h2>
            <p className="w-3/4 line-clamp-2">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
