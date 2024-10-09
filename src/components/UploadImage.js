import { useDropzone } from "react-dropzone";
import styles from '../assets/css/components/UploadImage.module.css';

const UploadImage = ({onUpload}) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
          const file = acceptedFiles[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              onUpload(reader.result);
            };
            reader.readAsDataURL(file);
          }
        },
      });
    
      return (
        <div {...getRootProps({ className: styles.dropzone })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select one</p>
        </div>
      );
}
 
export default UploadImage;