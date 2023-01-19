import UserSettingPassword from '../../components/MyHome';
import UserInfo from '../../components/MyHome/UserInfo/';
import UserSidebar from '../../components/Sidebar';

const MySettingPage = () => {
  return (
    <>
      <UserInfo />
      <UserSettingPassword />
      <UserSidebar />
    </>
  );
};
export default MySettingPage;
