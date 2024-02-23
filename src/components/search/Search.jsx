import React from 'react';
import './Search.css';
import { Blog, Header } from '../../containers';

const Search = ({header,paragragh}) => {
  return (
    <div className="search">
      <div className="search_paragraph">
        <Header header={"Save data. Download easily to watch offline."}/>
        <Blog paragragh={"Plans starting from R49/month. Cancel anytime."}/>
        <Blog paragragh={"Ready to watch? Enter your email to create or restart your membership."}/>
      </div>
      <div className="search_email">
        <input className='search_email-input' placeholder='Email address'/>
        <button type="button" className='search_email-button'>Get Started </button>
      </div>
    </div>
  )
}

export default Search