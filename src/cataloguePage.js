import React, { Component } from 'react';
import CatalogueItem from './catalogueItem';

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
    items.push({
        'Name' : 'Iron Bars',
        'Description' : 'Iron bars for sale',
        'Vendor' : 'MS Industries'
    });
    const catalogueList = items.map((item, i) => {
        return (
         
          <CatalogueItem item = {item}></CatalogueItem>
        );
      });
    return (
      <div>
          {catalogueList}
      </div>
    );
  }