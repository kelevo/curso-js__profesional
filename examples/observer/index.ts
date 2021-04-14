interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor() {
        const el: HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        // Para sacarlo primero tenemos que saber en que indice esta
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        // Parametros (index, 1) a partir de ese index cuantos elementos quieres sacar
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;

    constructor() {
        this.el = document.querySelector("#price")
    }

    update(data: any) {
        this.el.innerText = data;
    }
}

// Crear instancias para poder suscribirlas
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(
    () => value.unsubscribe(display),
    5000
)