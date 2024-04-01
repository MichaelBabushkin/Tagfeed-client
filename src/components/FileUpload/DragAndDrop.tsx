import { Dropzone, FileMosaic } from "@dropzone-ui/react";

import { useState } from "react";

function DragAndDrop() {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      maxFiles={10}
      maxFileSize={2998000}
    >
      {files.map((file) => (
        <FileMosaic
          {...file}
          onDelete={onDelete}
          onSee={handleSee}
          preview
          info
          hd
        />
      ))}
    </Dropzone>
  );
}

export default DragAndDrop;
