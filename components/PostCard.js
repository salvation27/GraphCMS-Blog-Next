import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({item}) => {
  // console.log(item)
  return (
    <Link href={`posts/${item.slug}`}>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-12 cursor-pointer hover:drop-shadow-4xl">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <img
            src={item.image.url}
            className="object-top absolute h-80 min-w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            alt=""
          />
        </div>
        <h1 className="duration-600 transition text-center mb-8 cursor-pointer hover:text-pink-600 hover:bg-gray-100 text-3xl font-semibold">
          {item.title}
        </h1>

        <div className="flex text-center items-center mb-7 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto  m-auto">
            <img
              className="w-16 h-16 object-cover rounded-full align-middle"
              src={item.author.photo.url}
              alt=""
            />
            <p className="flex ml-3">{item.author.name}</p>
            <div className="font-medium text-gray-700 ml-7">
              Create post:
              <strong className="ml-2">
                {moment(item.createdAt).format("MMM DD, YYYY")}
              </strong>
            </div>
          </div>
        </div>
        <div className="text-center px-20 line-clamp-1">{item.excerpt}</div>
        <div className="duration-600 transition fotn-semibold w-1/4 bg-stone-400 text-center p-3 hover:bg-orange-600 hover:text-white-100 m-auto mt-6 rounded">
          Read more
        </div>
      </div>
    </Link>
  );
}

export default PostCard