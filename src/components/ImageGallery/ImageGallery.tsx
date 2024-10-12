import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Picture {
  urls: { small: string; regular: string };
  alt_description: string;
  id: string;
}

type Props = {
  pictures: Picture[];
  onPictureClick: (url: string) => void;
};

const ImageGallery = ({ pictures, onPictureClick }: Props) => {
  return (
    <ul className={s.gallery}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard onPictureClick={onPictureClick} picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
