
export interface IConfigurationReader {
	/**
	 * reads mandatory configuration value from configurationSource. if the value is not exist in configurationSource, throws the error
	 * @param key key for configuration
	 */
	readMantatory(key: string): string | Promise<string>;

	/**
	 * reads configuration value from configurationSource. if the value is not exist in configurationSource, uses the default-value
	 * @param key key for configuration
	 * @param defaultValue default-value
	 */
	readOptional(key: string, defaultValue: string | null): null | string | Promise<string> | Promise<null>;
}
