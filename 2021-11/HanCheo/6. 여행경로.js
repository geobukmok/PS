function solution(tickets) {
	var answer = [];

	const DFS = (currentRoute, routes, ticketsArr) => {
		if (routes.length === tickets.length + 1) {
			answer.push(routes);
			return;
		}

		ticketsArr.forEach((ticket, idx) => {
			if (currentRoute === ticket[0]) {
				const nextTicket = [...ticketsArr];
				nextTicket.splice(idx, 1);
				
				DFS(ticket[1], [...routes, ticket[1]], nextTicket);
			}
		});
	};

	DFS('ICN', ['ICN'], tickets);
	return answer.sort((a, b) => a.join('').localeCompare(b.join('')))[0];
}
