type QueryResult = {
  Result: Element[];
  Query: string;
};

class Oct8Query {
  private Results: QueryResult;

  constructor(query: string) {
    this.Results = {
      Result: Array.from(document.querySelectorAll(query)),
      Query: query
    };
  }

where(predicate: string): Oct8Query {
  const filtered: Element[] = [];

  // Para cada elemento atual, busca filhos que batem com o seletor
  this.Results.Result.forEach(el => {
    filtered.push(...Array.from(el.querySelectorAll(predicate)));
  });

  // Atualiza o resultado com os filhos encontrados
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
  return this; // mantém encadeamento
}


}

export {Oct8Query}