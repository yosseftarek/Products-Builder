import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/UI/Modal";
import { formInputsList, productList } from "./Data";
import Button from "./Components/UI/Button";
import Input from "./Components/UI/Input";

const App = () => {
  // ** State
  let [isOpen, setIsOpen] = useState(false);

  // ** Handler
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ** Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input type={input.type} name={input.name} id={input.id} />
    </div>
  ));
  return (
    <>
      <main className="container">
        <div className="flex">
          <Button
            className="bg-red-700 hover:bg-indigo-800 mt-5 m-auto"
            width="w-fit"
            onClick={openModal}
          >
            Add product
          </Button>
        </div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={closeModal} title="add a new product">
          <div className="space-y-3">
            {renderInputList}
            <div className="flex items-center space-x-3">
              <Button
                className="bg-indigo-700 hover:bg-indigo-800"
                width="w-full"
              >
                Edit
              </Button>
              <Button className="bg-red-700 hover:bg-indigo-800" width="w-full">
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
};

export default App;
