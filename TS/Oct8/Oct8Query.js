class Oct8Query {
    constructor(query) {
        this.Results = {
            Result: Array.from(document.querySelectorAll(query)),
            Query: query
        };
    }
    ReturnResult() {
        return this.Results;
    }
    where(predicate) {
        const filtered = [];
        this.Results.Result.forEach(el => {
            filtered.push(...Array.from(el.querySelectorAll(predicate)));
        });
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
    SetAttribute(att, value) {
        this.Results.Result.forEach(el => {
            el.setAttribute(att, value);
        });
        return this;
    }
    ReturnSelect() {
        let v = this.Results.Result;
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