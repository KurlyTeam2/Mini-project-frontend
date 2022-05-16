import {Button, Modal} from "react-bootstrap";
import {deleteUser} from "../api/userApi";
import {useNavigate} from "react-router-dom";

interface Props {
    id: number
    isWithdrawalModalShow: boolean
    setIsWithdrawalModalShow: (isWithdrawalModalShow: boolean) => void
}

const WithdrawalModal = (props: Props) => {
  const {id, isWithdrawalModalShow, setIsWithdrawalModalShow} = props;

  const navigate = useNavigate();

  const handleWithdrawalButtonClick = async () => {
    const response = await deleteUser(id);
    console.log(response);
    alert("탈퇴가 완료되었습니다.")
    navigate("/");
  }

  return (
    <Modal show={isWithdrawalModalShow} onHide={() => setIsWithdrawalModalShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>계정 탈퇴</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        정말 탈퇴하시겠습니까?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsWithdrawalModalShow(false)}>닫기</Button>
        <Button variant="danger" onClick={() => handleWithdrawalButtonClick()}>탈퇴</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WithdrawalModal;