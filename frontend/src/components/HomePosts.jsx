// /* eslint-disable react/prop-types */
// import {IF} from '../url'


// const HomePosts = ({post}) => {
//   return (
//     <div className="w-full flex mt-8 space-x-4">
//     {/* left */}
//     <div className="w-[65%] h-[400px] flex justify-center items-center">
//     <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
//     </div>
//     {/* right */}
//     <div className="flex flex-col w-[65%]">
//       <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
//       {post.title}
//       </h1>
//       <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
//        <p>@{post.username}</p>
//        <div className="flex space-x-2 text-sm">
//        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//        <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//        </div>
//       </div>
//       <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
//     </div>

//     </div>
//   )
// }

// export default HomePosts


/* eslint-disable react/prop-types */



/* eslint-disable react/prop-types */
import { IF } from '../url';

const HomePosts = ({ post }) => {
  return (
    <main className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img src={IF + post.photo} alt="" className="w-full h-64 object-cover rounded-t-lg" />
        <div className="flex flex-col p-4">
          <h1 className="text-2xl font-bold mb-2">
            {post.title}
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between">
            <p>@{post.username}</p>
            <div className="flex space-x-2 text-sm">
              <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
            </div>
          </div>
          <p className="text-sm md:text-lg">{post.desc.slice(0,200) + " ...Read more"}</p>
        </div>
      </article>
    </main>
  );
};

export default HomePosts;


