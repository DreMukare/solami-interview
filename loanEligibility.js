const eligibleOrNot = (salary, noOfYears, existingLoan) => {
	if (!Number.isInteger(salary)) Number(salary);
	if (!Number.isInteger(noOfYears)) Number(noOfYears);
	if (typeof existingLoan !== 'boolean') {
		if (existingLoan === 'True') {
			existingLoan = true;
		} else if (existingLoan === 'False') {
			existingLoan = false;
		}
	}

	let eligibilitySalary = true;
	let eligibilityNoOfYears = true;
	let eligibilityExistingLoan = true;

	if (salary < 30000) eligibilitySalary = false;
	if (noOfYears < 2) eligibilityNoOfYears = false;
	if (existingLoan) eligibilityExistingLoan = false;

	eligibilitySalary && eligibilityNoOfYears && eligibilityExistingLoan
		? console.log('Eligible')
		: console.log('Not Eligible');
};

eligibleOrNot(35000, 3, true);
eligibleOrNot(28000, 4, false);
eligibleOrNot(31000, 6, false);
eligibleOrNot(32000, 1, false);
