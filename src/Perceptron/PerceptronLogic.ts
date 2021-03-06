type Input = number[]

const activations = {
    d: (x: number): number => x,
    RL: (x: number): number => Math.max(0, x),
    sig: (x: number): number => 1 / (1 + Math.exp(-x)),
}

export class PerceptronClass {
    public weights: number[] = [0, 0]
    public accuracy: number = 0
    protected threshold: number = 1
    protected learningRate: number = .1
    private activation = activations.d
    private b: number = 1
    private error = 1 / 1e6

    constructor(opts: {
        threshold?: number,
        learningRate?: number,
    }) {
        Object.assign(this, opts);
    }

    public train(points: Input[]): boolean {
        let success = true
        points.forEach((point, i) => {
            success = this.adjustWeights(point, i) && success
        })

        return success
    }

    public predict(point: Input): number {
        return this.activation(this.sum(point))
    }

    public learn(points: Input[], deadline: number = 100) {
        while (true) {
            if (deadline / points.length <= 0 || this.train(points)) {
                break;
            }
            deadline--
        }

        return this.accuracy
    }

    private adjustWeights(point: Input, i: number): boolean {
        const delta = this.delta(this.predict(point));
        if (Math.abs(delta) < this.error || delta * Math.pow(-1, i) < 0) {
            return true
        }
        this.weights = this.weights.map((w, i) => {
                return w + delta * point[i] * this.learningRate
        });
        this.accuracy = 1 - delta;
        return false
    }

    private delta(y: number): number {
        return this.threshold - y
    }

    private sum(point: Input): number {
        return point.reduce((sum, x, i) => sum + x * this.weights[i], 0) + this.b
    }
}
