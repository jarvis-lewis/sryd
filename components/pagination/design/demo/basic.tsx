import React from 'react';
import { Pagination } from 'sryd';

const App: React.FC = () => <Pagination defaultCurrent={2} total={50} showSizeChanger={false} />;

export default App;
