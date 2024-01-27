import React from 'react';
import { useCollapse } from 'react-collapsed';

interface ExpandableProps {
  defaultExpanded?: boolean;
  headerText: string;
  children: React.ReactNode;
}

const Expandable: React.FC<ExpandableProps & { className?: string, headerClassName?: string, headerStyle?: React.CSSProperties }> = ({
  defaultExpanded = false,
  headerText,
  children,
  className,
  headerClassName,
  headerStyle,
}: ExpandableProps & { className?: string, headerClassName?: string, headerStyle?: React.CSSProperties }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded });

  return (
    <div className={`collapsible ${className || ''}`}>
      <div
        className={`header bg-black rounded-xl w-64 hover:bg-gray ${headerClassName || ''} hover:scale-150 hover:text-PinkNude transition-transform duration-300`}
        style={headerStyle}
        {...getToggleProps()}
      >
        {isExpanded ? 'Collapse' : headerText}
      </div>
      <div {...getCollapseProps()}>
        <div className="content bg-lpink w-full">{children}</div>
      </div>
    </div>
  );
};






// export default Expandable;

// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { SelectedPage } from '@/shared/types';

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const Expandable = ({ setSelectedPage }: Props) => {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
//   const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = ref.current!.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   return (
//     <motion.div
//       id="expandable"
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       initial="initial"
//       whileHover="whileHover"
//       className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
//     >
//       <div>
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             whileHover: { x: -16 },
//           }}
//           transition={{
//             type: 'spring',
//             staggerChildren: 0.075,
//             delayChildren: 0.25,
//           }}
//           className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
//         >
//           {'Expandable'.split('').map((l, i) => (
//             <motion.span
//               variants={{
//                 initial: { x: 0 },
//                 whileHover: { x: 16 },
//               }}
//               transition={{ type: 'spring' }}
//               className="inline-block"
//               key={i}
//             >
//               {l}
//             </motion.span>
//           ))}
//         </motion.span>
//         <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
//           {'Content'}
//         </span>
//       </div>

//       <motion.div
//         style={{
//           top,
//           left,
//           translateX: '-50%',
//           translateY: '-50%',
//         }}
//         variants={{
//           initial: { scale: 0, rotate: '-12.5deg' },
//           whileHover: { scale: 1, rotate: '12.5deg' },
//         }}
//         transition={{ type: 'spring' }}
//         className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
//       />

//       <motion.div
//         variants={{
//           initial: {
//             x: '25%',
//             opacity: 0,
//           },
//           whileHover: {
//             x: '0%',
//             opacity: 1,
//           },
//         }}
//         transition={{ type: 'spring' }}
//         className="relative z-10 p-4"
//       >
//         {/* Your content */}
//       </motion.div>
//     </motion.div>
//   );
// };


// import React, { useRef } from 'react';
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useCollapse } from 'react-collapsed';
// import { SelectedPage } from './types';

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const Expandable = ({ setSelectedPage }: Props) => {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

//   const ref = useRef<HTMLDivElement | null>(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
//   const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = ref.current!.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   return (
//     <motion.div
//       id="expandable"
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       initial="initial"
//       whileHover="whileHover"
//       className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
//     >
//       <div>
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             whileHover: { x: -16 },
//           }}
//           transition={{
//             type: 'spring',
//             staggerChildren: 0.075,
//             delayChildren: 0.25,
//           }}
//           className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
//           {...getToggleProps()}
//         >
//           {isExpanded ? 'Collapse' : 'Expand'}
//         </motion.span>
//         <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
//           {'Content'}
//         </span>
//       </div>

//       <motion.div
//         style={{
//           top,
//           left,
//           translateX: '-50%',
//           translateY: '-50%',
//         }}
//         variants={{
//           initial: { scale: 0, rotate: '-12.5deg' },
//           whileHover: { scale: 1, rotate: '12.5deg' },
//         }}
//         transition={{ type: 'spring' }}
//         className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
//       />

//       <motion.div
//         {...getCollapseProps()}
//         variants={{
//           initial: {
//             x: '25%',
//             opacity: 0,
//           },
//           whileHover: {
//             x: '0%',
//             opacity: 1,
//           },
//         }}
//         transition={{ type: 'spring' }}
//         className="relative z-10 p-4"
//       >
//         {/* Your content */}
//       </motion.div>
//     </motion.div>
//   );
// };



export default Expandable;
