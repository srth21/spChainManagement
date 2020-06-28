import React, { Component } from 'react';
import CatalogueItem from './catalogueItem';
import CatalogueRow from './catalogueRow';
import Footercat from './footerforcatalogue';
import Headercat from './headerforcat';
import ULogin from "./usrlogin";
import { BrowserRouter as Router, Route, Switch, BrowserHistory } from "react-router-dom";
export default function CataloguePage() { 
    var items = [];
    items.push({
        'Name' : 'Iron Bars',
        'Description' : 'Iron bars for sale',
        'Vendor' : 'MS Industries'
    });
    items.push({
        'Name' : 'Iron Bars',
        'Description' : 'Iron bars for sale',
        'Vendor' : 'MS Industries'
    });
    const catalogueGrid = items.map((item, i) => {
        return (         
          <CatalogueItem item = {item}></CatalogueItem>
        );
      });
    return (
     <div>
        <Headercat></Headercat>
      <div style={{margin: 40 + 'px ' + 0 + 'px ' + 100 + 'px '}}>
          <CatalogueRow row = {items}> </CatalogueRow>
      </div>
      <div style={{margin: 0 + 'px ' + 0 + 'px ' + 100 + 'px '}}>
          <CatalogueRow row = {items}> </CatalogueRow>
      </div>
      <div style={{marginBottom: 0 + 'px ' + 0 + 'px ' + 10 + 'px '}}>
          <CatalogueRow row = {items}> </CatalogueRow>
      </div>
      <Footercat></Footercat>
    </div>
    );
  }