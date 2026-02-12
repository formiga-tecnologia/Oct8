class Oct8Query {
    constructor(query) {
        this.Results = {
            Result: Array.from(document.querySelectorAll(query)),
            Query: query
        };
    }
    where(predicate) {
        const filtered = [];
        // Para cada elemento atual, busca filhos que batem com o seletor
        this.Results.Result.forEach(el => {
            filtered.push(...Array.from(el.querySelectorAll(predicate)));
        });
        // Atualiza o resultado com os filhos encontrados
        this.Results.Result = filtered;
        this.Results.Query += ` -> ${predicate}`;
        return this;
    }
    update(value, eraseContent = true) {
        let indx = 0;
        this.Results.Result.forEach(el => {
            if (eraseContent) {
                el.innerHTML = value;
            }
            else {
                el.innerHTML += value;
            }
        });
        return this;
    }
    delete() {
        this.Results.Result.forEach(el => {
            el.remove();
        });
        return this;
    }
}
export { Oct8Query };
//# sourceMappingURL=Oct8Query.js.map