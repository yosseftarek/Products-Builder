import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/UI/Modal";
import { productList } from "./Data";
import Button from "./Components/UI/Button";

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
  return (
    <>
      <main className="container">
        <Button
          className="bg-red-700 hover:bg-indigo-800 mt-5 m-auto"
          width="w-fit"
          onClick={openModal}
        >
          Add product
        </Button>{" "}
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={closeModal}>
          <div className="flex items-center space-x-2">
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
        </Modal>
      </main>
    </>
  );
};

export default App;
