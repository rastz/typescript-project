function BindThis(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
	const currentMethod: Function = descriptor.value;

	const modifiedDescriptor: PropertyDescriptor = {
		configurable: true,

		get() {
			return currentMethod.bind(this);
		},
	};
	return modifiedDescriptor;
}

export default BindThis;
