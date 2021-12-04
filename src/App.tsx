import './App.scss';
import Body from './components/generic/Body';
import Header from './components/generic/Header';
import BaseTemplate from './components/templates/BaseTemplate';

function App() {
	return (
		<div className="w-screen h-screen main">
			<BaseTemplate header={<Header/>} body={<Body />} sidebar="sidebar" footer="footer" />
		</div>
	);
}

export default App;
