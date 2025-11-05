import Image from "next/image";

const header = () => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border">
      <div className="col-span-2 flex items-center justify-between space-x-2 hover:cursor-pointer hover:opacity-80 ml-4">
        <Image src="/logo.svg" alt="Echo" width={40} height={40} />
      </div>
    </header>
  );
};

export default header;
