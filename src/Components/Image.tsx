interface IProps{
    ImageURl:string,
    alt:string,
    className:string
}

const Image = ({ImageURl,alt,className}:IProps) => {
  return <img src={ImageURl} alt={alt} className={className} />
}

export default Image