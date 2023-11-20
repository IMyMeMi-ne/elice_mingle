import React, { useState } from "react";
import {
  ContainerStyle,
  GenreButtonStyle,
  ModalStyle,
  TitleStyle,
  GridStyle,
  ButtonStyle,
  ButtonContainerStyle,
} from "./styles";

interface GenreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const genres = [
  { id: 1, name: "발라드", image: "../../../public/img/Ballad.png" },
  { id: 2, name: "록", image: "../../../public/img/Rock.png" },
  { id: 3, name: "댄스", image: "../../../public/img/Dance.png" },
  { id: 4, name: "클래식", image: "../../../public/img/Classic.png" },
  { id: 5, name: "힙합", image: "../../../public/img/Hip-Hop.png" },
];

export default function RecommendGenreComponent({
  isOpen,
  onClose,
}: GenreModalProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prev: string[]) => {
      if (prev.includes(genre)) {
        return prev.filter((g: string) => g !== genre);
      } else {
        return [...prev, genre];
      }
    });
  };

  if (!isOpen) return null;

  return (
    <ModalStyle>
      <ContainerStyle>
        <TitleStyle>음악 취향 선택</TitleStyle>
        <GridStyle>
          {genres.map((genre) => (
            <GenreButtonStyle
              key={genre.id}
              onClick={() => handleGenreClick(genre.name)}
              className={
                selectedGenres.includes(genre.name) ? "bg-blue-200" : ""
              }
            >
              <img src={genre.image} alt={genre.name} />
              <span>{genre.name}</span>
            </GenreButtonStyle>
          ))}
        </GridStyle>
        <ButtonContainerStyle>
          <ButtonStyle onClick={onClose}>완료</ButtonStyle>
        </ButtonContainerStyle>
      </ContainerStyle>
    </ModalStyle>
  );
}
