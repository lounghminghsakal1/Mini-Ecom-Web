import Modal from "./Modal";

export default function ConfirmPopup({ isOpen,message, onConfirm, onCancel }) {
    if (!isOpen) return null;
    
    return(
        <Modal
            isOpen={isOpen}
            onClose={onCancel}
            title="Confirm Action"
        >
            <p className="text-gray-600 mt-0" >{message}</p>
            <div className="flex justify-between items-center mt-2 ">
                <button onClick={onConfirm} className="bg-green-500 px-2 py-1 text-white text-sm rounded hover:bg-green-400 cursor-pointer" >Ok</button>
                <button onClick={onCancel} className="bg-gray-500 px-2 py-1 text-white text-sm rounded hover:bg-gray-400 cursor-pointer">Cancel</button>
            </div>
        </Modal>
    );
}