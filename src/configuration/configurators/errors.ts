
export class ConfigurationNotSuppliedError extends Error {
	constructor({ key }: {
		key: string
	}) {
		super(`configuration not supplied: ${key}`);
	}
}
