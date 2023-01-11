import styled from '@emotion/styled';

const MyhomeModal = ({ visible, handlerModalClose, postDetail }) => {
  // postDetail 가지고 수정해줘야함
  console.log(postDetail);

  return (
    <>
      {/*<button className="open" onClick={handlerModal}>*/}
      {/*  모달 사진*/}
      {/*</button>*/}
      <p>모달 테스트</p>

      <ModalBlock className={visible ? 'openModal modal' : 'modal'}>
        {visible ? (
          <ModalContent>
            <header>
              <div>
                <button className="close" onClick={handlerModalClose}>
                  {' '}
                  &times;{' '}
                </button>
                <div className="movie-info">
                  <p>타이틀</p>
                </div>
              </div>
            </header>
          </ModalContent>
        ) : null}
      </ModalBlock>
    </>
  );
};

export default MyhomeModal;

const ModalBlock = styled.div`
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  &.openModal {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-bg-show 0.3s;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
