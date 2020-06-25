import React from "react";
import Popup from "reactjs-popup";
import './quotePopup.css';
import QuoteForm from './quoteForm';
export default function QuotePopup() {
    return (
  <Popup trigger={<button className="button"> Ask For a Quote </button>} modal>
    <QuoteForm></QuoteForm>
  </Popup>
);
}