// ✅ method chaining is a technique that allows you to call multiple methods on the same object consecutively.
// ✅ In the above example, we have a function called dateFormat that takes a date as an argument.
// ✅ It returns an object with two methods: fromNow and format.
// ✅ The fromNow method returns a string that represents the time difference between the date passed in and the current date.

const dateFormat = (date) => {
	return {
		fromNow: () => {
			const now = new Date().getTime();
			const diff = now - new Date(date).getTime();
			const seconds = Math.floor(diff / 1000);
			const minutes = Math.floor(seconds / 60);
			const hours = Math.floor(minutes / 60);
			const days = Math.floor(hours / 24);
			const months = Math.floor(days / 30);
			const years = Math.floor(months / 12);

			if (seconds < 60) {
				if (seconds < 10) {
					return `just now`;
				}
				return `${seconds} seconds ago`;
			} else if (minutes < 60) {
				return `${minutes} minutes ago`;
			} else if (hours < 24) {
				return `${hours} hours ago`;
			} else if (days < 30) {
				return `${days} days ago`;
			} else if (months < 12) {
				return `${months} months ago`;
			} else {
				return `${years} years ago`;
			}
		},
		format: (format = 'LL') => {
			return {
				toString: () => date,
				toNumber: () => new Date(date).getTime(),
				toDate: () => new Date(date).toLocaleDateString('en-US', { dateStyle: 'full' })
			};
		}
	};
};

console.log(dateFormat('2020-01-01').format().toDate());
console.log(dateFormat());
//
