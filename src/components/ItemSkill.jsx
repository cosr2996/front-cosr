import { Progress } from 'flowbite-react';

const ItemSkill = ({title,image,progress,nivel}) => {
  return (
    <div className=" bg-white w-60 h-60 flex  flex-col justify-center items-center rounded-md">
    {/* logo */}
    <div className="w-1/2">
        <img className='w-full'  src={image} alt="" />
    </div>
    <h2 className="font-bold">{title}</h2>
    <div className="w-3/4 		">
    <Progress
         progress={progress}
         color="dark"
         size="xl"
         />
    </div>
    <span className="opacity-50">{nivel}</span>

  </div>
  )
}

export default ItemSkill