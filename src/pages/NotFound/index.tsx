import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { MissingMessage, MissingPageContainer } from './style';

const MissingPage = () => {
  return (
    <MissingPageContainer>
      <MissingMessage>
        <SentimentDissatisfiedIcon />
        404 NOT FOUND
      </MissingMessage>
      <a href="/main">Do you want to go to the main page? click me!</a>
    </MissingPageContainer>
  );
};
export default MissingPage;
