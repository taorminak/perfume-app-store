import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      Sorry, this page doesn&apos;t exist. Go <Link to="/">home</Link>.
    </div>
  );
};

export default NotFoundPage;
