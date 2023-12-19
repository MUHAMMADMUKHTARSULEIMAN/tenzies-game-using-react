export default function Die(props) {
  const styles = props.on ? {backgroundColor: "#FFFFFF"} : {backgroundColor: "#32CD32"};

  return (
    <div style={styles} id="die" onClick={() => props.toggle(props.name)}>
      <h1>{props.value}</h1>
    </div>
  )
}