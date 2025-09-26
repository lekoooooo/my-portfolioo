// import Image from "next/image";
// export default function Page() {
//   return (
//     <div>
//       <section className="py-20">
//         <div>
//           <h2 className="text-[#FFFFFF] text-[45px]">Hi, i am Leko bebei.</h2>
//           <p className="text-[#C7C7C7] text-[20px]">
//             From Tbilisi, Georgia. Front end developer , passionate about
//             building accessible and user-friendly websites.{" "}
//           </p>
//         </div>
//         <div className="flex mt-[40px] gap-[36px]">
//           <button> CONTACT ME </button>
//           <button>
//             <Image
//               src="/images/lilhub.svg"
//               width={26}
//               height={26}
//               alt="Github"
//             />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <section className="py-20">
        <div>
          <h2 className="text-[#FFFFFF] text-[45px]">Hi, i am Leko bebei.</h2>
          <p className="text-[#C7C7C7] text-[20px]">
            From Tbilisi, Georgia. Front end developer, passionate about
            building accessible and user-friendly websites.
          </p>
        </div>

        <div className="flex mt-[40px] gap-[20px]">
          <button
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-full
              bg-[#D6F868] text-black font-semibold
              shadow-md
              active:scale-95 active:shadow-inner
              transition-transform duration-150 ease-in-out
            "
          >
            CONTACT ME
            <span className="w-2 h-2 rounded-full bg-black"></span>
          </button>

          <button
            className="
              flex items-center justify-center
              w-[52px] h-[52px] rounded-full
              bg-[#2c2c2c]
              shadow-md
              active:scale-95 active:shadow-inner
              transition-transform duration-150 ease-in-out
            "
          >
            <Image
              src="/images/lilhub.svg"
              width={24}
              height={24}
              alt="Github"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
