import * as style from './style';
import { memo } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const arrowStyle = { position: 'relative', top: '4px' };
const RightIcon = <ArrowRightIcon style={arrowStyle} />;
const BottomIcon = <ArrowDropDownIcon style={arrowStyle} />;

const SortedChannels = ({ title, channels, fold = true, onClickFold }) => {
  return (
    <style.SortedChannelContainer>
      <style.DescriptionTitle onClick={onClickFold}>
        {fold ? RightIcon : BottomIcon}
        <span>{title}</span>
      </style.DescriptionTitle>
      {!fold &&
        channels.map(({ name }, i) => (
          <style.Channel key={i} onClick={() => onClickFold(i)}>
            {name}
          </style.Channel>
        ))}
    </style.SortedChannelContainer>
  );
};

export default memo(SortedChannels, (prev, next) => prev.fold === next.fold);
