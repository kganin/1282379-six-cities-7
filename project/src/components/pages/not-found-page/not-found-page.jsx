import React from 'react';
import Header from '../../header/header';

function NotFoundPage() {
  return (
    <div className="page">
      <Header />
      <main className="page__main" style={{textAlign: 'center', padding: '40px'}}>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </main>
    </div>
  );
}

export default NotFoundPage;
