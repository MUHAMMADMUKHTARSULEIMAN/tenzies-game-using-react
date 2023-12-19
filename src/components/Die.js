export default function Die(props) {
  const styles = props.on ? {backgroundColor: "#FFFFFF"} : {backgroundColor: "#5BCD5B"};

  return (
    <div style={styles} id="die" onClick={() => props.toggle(props.name)}>
      <h1>{props.value}</h1>
    </div>
  )
}