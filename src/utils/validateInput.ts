interface Validatable {
	value: string | number;
	isRequired: boolean;

	//porps for input as string
	minLength?: number;
	maxLength?: number;

	//props for inupt as number
	min?: number;
	max?: number;
}

function validateInput({
	value,
	isRequired = true,
	min,
	max,
	minLength,
	maxLength,
}: Validatable): boolean {
	let isValid = true;

	if (isRequired) {
		isValid = isValid && value.toString().trim().length !== 0;
	}

	if (minLength != null && typeof value === "string") {
		// != null means: check if not null or undefined
		isValid = isValid && value.length > minLength;
	}

	if (maxLength != null && typeof value === "string") {
		// != null means: check if not null or undefined
		isValid = isValid && value.length <= maxLength;
	}

	if (min != null && typeof value === "number") {
		isValid = isValid && value >= min;
	}

	if (max != null && typeof value === "number") {
		isValid = isValid && value <= max;
	}

	return isValid;
}

export default validateInput;
