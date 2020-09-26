import Enzyme from 'enzyme';
const Adapter = require('enzyme-adapter-react-16.3');

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });