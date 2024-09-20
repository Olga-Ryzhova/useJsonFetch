import React from 'react';
import DataComponent from '../DataComponent/DataComponent ';
import ErrorComponent from '../ErrorComponent/ErrorComponent ';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

import './app.css'

const App = () => {
	return (
    <div className='container'>
      <h1 className='header'>Использование useJsonFetch:</h1>
			
			<div className='block'>
				<h2>Индикатор загрузки:</h2>
				 <LoadingComponent /> 
			</div> 

			<div className='block'>
				<h2>Успешное получение данных:</h2>
				<DataComponent />
			</div>

			<div className='block'>
				<h2>Получение 500 ошибки:</h2>
				<ErrorComponent />
			</div>
    </div>
  );
}

export default App;