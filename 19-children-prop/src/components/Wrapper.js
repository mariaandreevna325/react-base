function Wrapper(props) {
  const style = {
    background: props.color,
    width: props.width,
    height: props.height,
    padding: props.padding,
    margin: props.margin,
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
