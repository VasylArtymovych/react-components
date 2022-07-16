import { AppBar } from '../components/AppBar';
import { Modal } from '../components/Modal';
import { useModal } from '../Hooks/ModalHook';

function HomePage() {
  const { isModalShown, toggleModal } = useModal();

  return (
    <>
      <AppBar onToggleModal={toggleModal} />
      {isModalShown && (
        <Modal onToggleModal={toggleModal}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            deserunt, omnis, vel optio amet earum molestiae quo nobis pariatur
            unde, sed odit delectus ab similique architecto. Est nemo reiciendis
            in repellendus pariatur atque.
          </div>
          <button type="button" onClick={toggleModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default HomePage;
