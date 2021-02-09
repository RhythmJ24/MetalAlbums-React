const Image = (props) => {
  const { url, alt, type } = props;
  return(
    <img 
      className = {`${type === 'aprofile' ? 'aprofile' : 'image-album-class'}`}
      src ={url}
      alt ={alt}
    />
  );
};

export {Image};