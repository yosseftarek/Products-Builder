import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, category,price } = product;
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md flex flex-col  justify-between">
        <Image
          ImageURl={imageURL}
          alt="product image"
          className="rounded-md h-52 w-full lg:object-cover"
        />
        <h3>{title}</h3>
        <p>{txtSlicer(description)}</p>
        <div className="flex items-center space-x-2 my-4">
          <span className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-gray-700 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
        </div>
        <div className="flex justify-between items-center">
          <span>${price}</span>
          <Image
            ImageURl={category.imageURL}
            alt={category.name}
            className="rounded-full h-10 w-10 object-bottom"
          />    
        </div>
        <div className="flex  items-center justify-between space-x-2 mt-5">
          <Button className="bg-indigo-500" width="w-full">
            Edit
          </Button>
          <Button className="bg-red-500" width="w-full">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
