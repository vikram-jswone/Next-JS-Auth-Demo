import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = React.memo(
  ({ children, open, onClose }) => {
    return (
      <Transition appear show={open} as={Fragment}>
        <Dialog onClose={onClose} as="div" className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-1 flex-col">{children}</Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
);
