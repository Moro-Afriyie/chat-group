import React from "react";
import Modal from "./Modal";

interface INewChannelModal {
  closeModal: (value: boolean) => void;
}
const NewChannelModal: React.FC<INewChannelModal> = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <h5 className=" text-lg uppercase">New Channel</h5>
      <input
        type="search"
        placeholder="Channel name"
        className="block w-full p-4 h-12 text-sm font-light text-light-grey text-white border-none bg-input-bg rounded-lg mt-4"
      />
      <textarea
        placeholder="Channel Description"
        className="block w-full p-4 h-20 text-sm font-light text-light-grey text-white border-none bg-input-bg rounded-lg mt-4"
      />
      <div className="py-3 w-full flex flex-row-reverse ">
        <button
          type="button"
          className="mt-3 inline-flex justify-center rounded-md text-white bg-blue-500 px-6 py-2 font-medium hover:bg-blue-600 shadow-sm sm:w-fit text-sm"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default NewChannelModal;
