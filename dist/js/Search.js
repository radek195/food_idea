class SearchClass {
    constructor() {
        this.parameters = [];
        this.minCal;
        this.maxCal;
        this.minCarb;
        this.maxCarb;
        this.minProtein;
        this.maxProtein;
        this.minFat;
        this.maxFat;
    }

    addParameter(param) {
        this.parameters = [param, ...this.parameters];
    }
    clearParameters() {
        this.parameters = [];
        parameterContainer.innerHTML = "";
    }
    clearCalorie() {
        this.minCal = null;
        this.maxCal = null;
    }
    clearProtein() {
        this.minProtein = null;
        this.maxProtein = null;
    }
    clearCarb() {
        this.minCarb = null;
        this.maxCarb = null;
        
    }
    clearFat() {
        this.minFat = null;
        this.maxFat = null;
    }
}