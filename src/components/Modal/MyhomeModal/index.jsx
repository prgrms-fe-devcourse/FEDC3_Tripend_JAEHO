import styled from '@emotion/styled';
import UploadAndDisplayImage from '../../UploadImage';
import { useRecoilValue } from 'recoil';
import { uploadImageState } from '../../../recoil/uploadImage';

const MyhomeModal = ({ visible, handlerModalClose, postDetail }) => {
  // postDetail 가지고 수정해줘야함

  console.log(postDetail);

  const imageValue = useRecoilValue(uploadImageState);

  console.log(imageValue);
  return (
    <>
      {/*<button className="open" onClick={handlerModal}>*/}
      {/*  모달 사진*/}
      {/*</button>*/}

      <ModalBlock className={visible ? 'openModal modal' : 'modal'}>
        {visible ? (
          <ModalContent>
            <header>
              <div>
                <button className="close" onClick={handlerModalClose}>
                  {' '}
                  &times;{' '}
                </button>
              </div>

              <div>
                <ModalLeft>
                  <UploadAndDisplayImage />
                </ModalLeft>

                <ModalRight>
                  <div>
                    <div>
                      <h3>AR JaKir</h3>
                      <span>20대 중반/남자</span>
                    </div>

                    <div>
                      <div>
                        <span>날짜</span>
                        <input type="text" placeholder="날짜를 입력해주세요" />
                      </div>

                      <div>
                        <span>인원</span>
                        <input type="text" placeholder="인원을 입력해주세요" />
                        <span>원하는 성별</span>
                        <input type="text" placeholder="원하는 성별 선택해주세요" />
                      </div>

                      <div>
                        <span>제목</span>
                        <input type="text" placeholder="제목을 입력해주세요" />
                      </div>
                    </div>
                  </div>
                </ModalRight>
              </div>
            </header>
          </ModalContent>
        ) : null}
      </ModalBlock>
    </>
  );
};

export default MyhomeModal;

const ModalRight = styled.div`
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
  border: 3px solid black;
`;

const ModalLeft = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  box-sizing: border-box;
  border: 3px solid blue;
`;

const ModalBlock = styled.div`
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &.openModal {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-bg-show 1s;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
