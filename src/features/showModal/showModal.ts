import style from './showModal.module.scss';
import { div, button } from 'shared/lib/dom/tag-function';

const activeModal = 'active-modal';

const showModal = (content: HTMLElement, callback?: () => void) => {
  document.body.style.overflow = 'hidden';
  const overlay = div({ className: `${style.overlay} ${activeModal}` });
  const closeBtn = div({
    className: style.close,
    onclick: () => closeModal(modal, overlay),
  });
  const saveBtn = button({
    className: style.btn,
    textContent: 'Save',
    onclick: () => {
      if (callback) callback();
      closeModal(modal, overlay);
    },
  });
  const cancelBtn = button({
    className: style.cancel,
    textContent: 'Cancel',
    onclick: () => closeModal(modal, overlay),
  });
  const modal = div({ className: style.modal, textContent: 'Enter new value' }, [
    content,
    closeBtn,
    div({ className: style.btnCover }, [cancelBtn, saveBtn]),
  ]);

  overlay.append(modal);
  document.body.append(overlay);
  setTimeout(() => modal.classList.add(style['modal-active']), 10);
};

const closeModal = (modal: HTMLElement, overlay: HTMLElement) => {
  document.body.style.overflow = 'auto';
  modal.classList.remove(style['modal-active']);
  setTimeout(() => {
    modal.remove();
    overlay.remove();
  }, 300);
};

export { showModal, activeModal };
