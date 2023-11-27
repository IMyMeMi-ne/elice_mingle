import React, { useState } from 'react';
import { faHeart as like } from '@fortawesome/free-solid-svg-icons';
import { faHeart as noLike } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChartItemImg, StyledTr } from './styles';
import { Link } from 'react-router-dom';

interface ChartItemComponentProps {
  _id: string;
  idx: number;
  title: string;
  img: string;
  artist?: string;
  length: string;
  isLiked: boolean;
}
export default function ChartItemComponent({
  _id,
  idx,
  title,
  img,
  artist,
  length,
  isLiked,
}: ChartItemComponentProps) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      {/* 추후 여기도 Navigator랑 통일 시켜야함  */}
      <Link to={`/song/${_id}`}>
        <StyledTr
          className="text-center"
          onClick={handleClick}
          isClick={isClick}
        >
          <td scope="row" className="w-1/12 pl-10 pr-6 py-4">
            {idx}
          </td>
          <td className="w-1/10 px-6 py-4">
            <ChartItemImg src={img} />
          </td>
          <td className="w-1/4 px-6 py-4">{title}</td>
          <td className="w-1/4 px-6 py-4">{artist}</td>
          <td className="w-1/4 px-6 py-4">{length}</td>
          <td className="w-1/4 px-6 py-4">
            {isLiked ? (
              <FontAwesomeIcon icon={like} color={'#9b59b6'} cursor="pointer" />
            ) : (
              <FontAwesomeIcon
                icon={noLike}
                color={'#9b59b6'}
                cursor="pointer"
              />
            )}
          </td>
        </StyledTr>
      </Link>
    </>
  );
}
