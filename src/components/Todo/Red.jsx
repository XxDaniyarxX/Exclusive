export default function Red({ changeColor }) {
  return (
    <div>
      <button onClick={() => changeColor('red')}>Red</button>
    </div>
  );
}