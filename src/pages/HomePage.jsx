import { AppBar } from '../components/AppBar';
import { Modal } from '../components/Modal';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { useModal } from '../Hooks/ModalHook';

function HomePage() {
  const { isModalShown, toggleModal } = useModal();

  return (
    <>
      <AppBar onToggleModal={toggleModal} />
      {isModalShown && (
        <Modal onToggleModal={toggleModal}>
          <div>
            <button type="button" onClick={toggleModal}>
              X
            </button>
            <RegisterForm />
          </div>
        </Modal>
      )}
    </>
  );
}

export default HomePage;
