
// "success": true,
//   "data": {
//     "summary": {
//       "total": 43119112,
//       "confirmedCasesIndian": 43119064,
//       "confirmedCasesForeign": 48,
//       "discharged": 42576815,
//       "deaths": 524201,
//       "confirmedButLocationUnidentified": 0
//     },

        fetch("https://api.rootnet.in/covid19-in/stats/latest")
            .then((response) => response.json())
            .then((data) => {
                const tableBody = document.getElementById("covid-data");
                const regionalData = data.data.regional;

                regionalData.forEach((state, index) => {
                    const row = `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${state.loc}</td>
                            <td>${state.confirmedCasesIndian}</td>
                            <td>${state.confirmedCasesForeign}</td>
                            <td>${state.discharged}</td>
                            <td>${state.deaths}</td>
                            <td>${state.totalConfirmed}</td>
                        </tr>
                    `;
                    tableBody.innerHTML += row;
                });
            })
            .catch((error) => {
                document.writeln("Error fetching data: " + error);
            });