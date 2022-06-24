import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ setUrl }) => {
  const { docs } = useFireStore("images");

  console.log(docs);
  return (
    <motion.div className="image-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setUrl(doc.url)}
              layout
            >
              <img src={doc.url} alt="uploaded pic" />
            </motion.div>
          );
        })}
    </motion.div>
  );
};

export default ImageGrid;
