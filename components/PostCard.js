import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({item}) => {
  console.log(item)
  return (
    <Link  href={`posts/${item.slug}`}>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-12 cursor-pointer">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <img
            src={item.image.url}
            className="object-top absolute h-80 min-w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            alt=""
          />
        </div>
        <div className="">{item.title}</div>

        <div className="">{item.excerpt}</div>
      </div>
    </Link>
  );
}

export default PostCard