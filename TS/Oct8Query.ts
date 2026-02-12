type QueryResult = {
  Result: Element[];
  Query: string;
};

class Oct8Query {
  Results: QueryResult;
  private Selected: Element[] = []; // lista acumulada de elementos selecionados


  constructor(query: string) {
    this.Results = {
      Result: Array.from(document.querySelectorAll(query)),
      Query: query
    };
  }
ReturnResult(){
    return this.Results
}


where(predicate: string): Oct8Query {
  const filtered: Element[] = [];

  this.Results.Result.forEach(el => {
    filtered.push(...Array.from(el.querySelectorAll(predicate)));
  });

  this.Results.Result = filtered;
  this.Results.Query += ` -> ${predicate}`;
  return this;
}
update(value:any,eraseContent=true): Oct8Query {
    let indx =0
  this.Results.Result.forEach(el => {
        if(eraseContent){
            
            el.innerHTML=value
        }
        else{
            el.innerHTML+= value;
        }

  });
  return this;
}
ReturnSelect():Oct8Query{
    let v = this.Results.Result
    return this
}
delete():Oct8Query{
     this.Results.Result.forEach(el => {
        el.remove()

  });
  return this;
}


}

export {Oct8Query}