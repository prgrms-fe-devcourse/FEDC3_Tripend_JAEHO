import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { MissingPageContainer, MainPageLink, MissingMessage } from './style.js';

const MissingPage = () => {
  return (
    <>
      <MissingPageContainer>
        <MissingMessage>
          <SentimentDissatisfiedIcon />
          404 NOT FOUND
        </MissingMessage>
        <MainPageLink href="/main">Do you want to go to the main page? click me!</MainPageLink>
      </MissingPageContainer>
    </>
  );
};
export default MissingPage;
