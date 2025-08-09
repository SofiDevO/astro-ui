const titleVariants = {
    default: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 cursor-pointer max-w-[max-content]", // Default
    primary: "bg-violet-900 text-violet-400 hover:bg-violet-600 hover:text-white focus:ring-blue-500  ",
    secondary: "bg-[#3e3947] text-white hover:bg-[#3e3947cd] focus:ring-purple-500  ", // Secondary
    accent: "bg-[#2d3e6b] text-[#3b82f6] hover:bg-[#2d3e6bda] focus:ring-indigo-500  ", // Accent
    info: "bg-[#1d4e62] textwhite hover:bg-[#245e75] focus:ring-cyan-500  ", // Info
    success: "bg-[#1b5439] text-[#02ca4b] hover:bg-[#216545] focus:ring-green-500  ", // Success
    warning: "bg-yellow-800 text-yellow-200 hover:bg-yellow-600 focus:ring-yellow-500  ", // Warning
    error: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500  ", // Error
  };



const variantClasses = {
  h1: "text-2xl font-bold uppercase lg:text-4xl",
  h2: "text-lg font-medium uppercase lg:text-2xl",
  h3: "text-2xl font-semibold uppercase ",
  h4: "text-xl font-semibold uppercase",
  h5: "text-lg font-semibold uppercase",
  p: "text-base font-medium",
};

const colorClasses = {
  white: "text-white ",
  black: "text-black",
  primary: "text-grey-600",
  neutral: "text-neutral-300",
  warnining: "text-yellow-500",
  danger: "text-red-500",
  gradient: "bg-gradient-to-r from-blue-500 to-violet-900 bg-clip-text  font-extrabold text-transparent",
};

export { colorClasses as c, titleVariants as t, variantClasses as v };
