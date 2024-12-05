// import { debounce } from "lodash";
// import { useEffect, useRef, useState } from "react";
// // import Aos from "aos";
// // import "aos/dist/aos.css";

// const feature = () => {
//   const [data] = useState([
//     {
//       tag: "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       tagActive:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       feature:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n238mmulcmx7b2da.png",
//     },
//     {
//       tag: "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       tagActive:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       feature:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n238mmulcmx7b2da.png",
//     },
//     {
//       tag: "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       tagActive:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       feature:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n238mmulcmx7b2da.png",
//     },
//     {
//       tag: "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       tagActive:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       feature:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n238mmulcmx7b2da.png",
//     },
//     {
//       tag: "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       tagActive:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n2333ad8l3ton857h.png",
//       feature:
//         "https://cdn.aligames.com/raven/prod/upload/market-game-galaxy/page_642a4eb04023f80ab7f3fb17/m2n238mmulcmx7b2da.png",
//     },
//   ]);
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   const [activeKey, setActiveKey] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const [hoverKey, setHoverKey] = useState<string | null>(null);

//   const startNext = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     intervalRef.current = setInterval(() => {
//       setActiveKey((prevKey) => Math.floor((prevKey + 1) % data.length));
//     }, 3000);
//   };

//   const handleNext = (index: number) => {
//     setActiveKey(index);
//     startNext();
//   };

//   useEffect(() => {
//     startNext();
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current); // Cleanup interval on unmount
//       }
//     };
//   }, [data?.length]);

//   useEffect(() => {
//     const resizeHandler = debounce(() => {
//       if (containerRef.current) {
//         const { clientWidth, clientHeight } = containerRef.current;
//         setSize({ width: clientWidth, height: clientHeight });
//       }
//     }, 200);

//     // Ensure it runs once on mount
//     const runResizeHandler = () => {
//       requestAnimationFrame(resizeHandler);
//     };

//     runResizeHandler();
//     window.addEventListener("resize", resizeHandler);
//     return () => {
//       window.removeEventListener("resize", resizeHandler);
//     };
//   }, []);
//   // useEffect(function () {
//   //   Aos.init({ duration: 1000 });
//   // }, []);

//   return (
//     <section className="bg-lime-50 my-28">
//       <div className=" m-auto w-[1036px] ">
//         <div className="relative w-full h-full" ref={containerRef}>
//           <ul
//             className="flex gap-1"
//             style={{
//               height: `392px`,
//             }}
//           >
//             {data?.map((item, index) => (
//               <li
//                 key={index}
//                 className={`flex ${activeKey === index ? "w-full" : ""} gap-1`}
//                 onClick={() => handleNext(index)}
//                 // data-aos="fade-left"
//                 // data-aos-duration={500 * index}
//               >
//                 <img
//                   src={hoverKey ? hoverKey : item?.tag}
//                   className="w-full max-w-[62px]"
//                   alt={`tag-${index}`}
//                   style={{
//                     width: `62px`,
//                   }}
//                   onMouseEnter={() => setHoverKey(item?.tagActive)}
//                   onMouseLeave={() => setHoverKey(null)}
//                 />
//                 <img
//                   src={item?.feature}
//                   className={`${
//                     activeKey === index ? "block flex-1" : "hidden"
//                   } object-contain align-middle mt-[2px]`}
//                   alt={`feature-${index}`}
//                   style={{
//                     width: 100,
//                   }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default feature;