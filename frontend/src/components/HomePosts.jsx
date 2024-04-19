
// import { useState } from 'react';
// import axios from 'axios';
// import { IF } from '../url';

// const HomePosts = ({ post }) => {
 

//   return (
       
//       <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//         <img src={IF + post.photo} alt="" class="w-full h-64 object-cover rounded-t-lg" />
//         <div className="flex flex-col p-4">
//           <h1 className="text-2xl font-bold mb-2">
//             {post.title}
//           </h1>
//           <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between">
//             <p>@{post.username}</p>
//             <div className="flex space-x-2 text-sm">
//               <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
//               <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//             </div>
//           </div>
//           <p class ="text-gray-700">{post.desc.slice(0,200) + " ...Read more"}</p>
         
//         </div>
//       </article>
  
//   );
// };

// export default HomePosts;



import { useState } from 'react';
import axios from 'axios';
import { IF } from '../url';

const HomePosts = ({ post }) => {
 

  return (
       
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img src={IF + post.photo} alt="" class="w-full h-64 object-cover rounded-t-lg" />
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
          <p class ="text-gray-700">{post.desc.slice(0,200) + " ...Read more"}</p>
         
        </div>
      </article>
  
  );
};

export default HomePosts;






