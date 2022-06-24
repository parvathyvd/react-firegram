import { useEffect, useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [url, setUrl] = useState(null);

  return (
    <div className="firegram">
      <Title />
      <UploadForm />
      <ImageGrid setUrl={setUrl} />
      {url && <Modal url={url} setUrl={setUrl} />}
    </div>
  );
}

export default App;
