const getDataFromApi = () => {
  const dataPromise = new Promise((resolve) => {
    const employee = [
      {
        id: 1,
        name: "John",
        dateOfBirth: "22/02/2022",
        occupation: "developer",
        personal: {
          name: "john",
          address: "Delhi",
          phoneNo: 1234341,
        },
        professional: { experiences: "3 years" },
        academic: {
          collegeName: "Sms ",
          degree: "B.tech",
          passOut: "2022-06-22",
          address: "Lucknow",
        },
        employment: {
          currentCompany: "Celestial",
          employmentHistory: [
            {
              employer: "Google",
              year: "2019",
            },
          ],
        },
      },
      {
        id: 2,
        name: "Robert",
        dateOfBirth: "22/02/2022",
        occupation: "Author",
        personal: {
          name: "Robert",
          address: "Delhi",
          phoneNo: 1234341,
        },
        professional: { experiences: "6 years" },
        academic: {
          collegeName: "BDD",
          degree: "B.tech",
          passOut: "2022-06-22",
          address: "Delhi",
        },
        employment: {
          currentCompany: "Celestial",
          employmentHistory: [
            {
              employer: "Google",
              year: "2019",
            },
          ],
        },
      },
    ];
    resolve(employee);
  });
  return dataPromise;
};

export default getDataFromApi;
