import { useLayoutEffect } from 'react'
import { addClass } from '../formatting/classNameModifier';

export default function useModalDOM() {
    useLayoutEffect(() => {
        const openModal = (event: MouseEvent) => {
            const targetElement = event.target as HTMLElement;

            const modalWrapper = document.createElement("div");
            const modalOverlay = document.createElement("div");

            modalOverlay.addEventListener("click", function () {
                modalWrapper.remove();
            });

            addClass(modalWrapper, "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen");
            addClass(modalOverlay, modalWrapperClassNames);

            const modalContent = document.createElement("div");
            const dataContent = targetElement.getAttribute("data-content");
            if (dataContent) {
                modalContent.innerHTML = dataContent;
            }
            addClass(modalContent, "bg-white p-0 md:p-6 z-10");
            modalWrapper.append(modalOverlay);
            modalWrapper.append(modalContent);
            document.body.append(modalWrapper);
        }

        const modalTriggers = document.getElementsByClassName("modal-trigger");
        const modalWrapperClassNames = "fixed inset-0 bg-black opacity-35";

        const eventListener = (event: MouseEvent) => {
            openModal(event);
        };

        for (let index = 0; index < modalTriggers.length; index++) {
            const e = modalTriggers[index] as HTMLElement;

            e.addEventListener("click", eventListener);
        }

        return () => {
            for (let index = 0; index < modalTriggers.length; index++) {
                const e = modalTriggers[index] as HTMLElement;

                e.removeEventListener("click", eventListener);
            }
        }
    })
}
