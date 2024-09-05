import Image from 'next/image';

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flex__center gap-3 rounded-full border px-6 py-4 ${variant} ${full && 'w-full'}`}
      type={type}
    >
      <span className="cursor-pointer whitespace-nowrap">{title}</span>
      {icon && <Image src={icon} alt="" width={24} height={24} />}
    </button>
  );
};
export default Button;
