import styled from '@emotion/styled';
import { memo, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const arrowStyle = { position: 'relative', top: '4px' };
const RightIcon = <ArrowRightIcon style={arrowStyle} />;
const BottomIcon = <ArrowDropDownIcon style={arrowStyle} />;

const SortedChannel = memo(({ title, channels, fold, onClickFold }) => {
  return (
    <SortedChannelContainer>
      <DescriptionTitle onClick={onClickFold}>
        {fold ? RightIcon : BottomIcon}
        <span>{title}</span>
      </DescriptionTitle>
      {!fold && channels.map(({ name }, i) => <Channel key={i}>{name}</Channel>)}
    </SortedChannelContainer>
  );
});

export default SortedChannel;

const SortedChannelContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  cursor: pointer;
`;
const Channel = styled.li`
  font-size: 15px;
  padding: 3px 0 3px 25px;
`;
