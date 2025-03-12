import Image from "next/image";

type Prize = {
  name: string
  image: string
}

type Inventory = Prize[]

const Inventory = async () => {
  const response = await fetch(`${process.env.API_URL}/inventory`)
  const inventory: Inventory = await response.json()

  return (
    <div>
      {inventory.map((item) => (
        <div key={item.name}>
          <Image className="w-[25%] h-auto" src={item.image} alt={item.name} width={0} height={0} sizes="50vw" />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Inventory
