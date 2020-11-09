import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<div className="card">
				<h1> Counter: {counter}</h1>
				<button onClick={() => dispatch(increment(5))}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>

				{isLogged ? <h3> Log Stuff Showing Up hehe</h3> : ""}
			</div>{" "}
		</div>
	);
}

export default App;
