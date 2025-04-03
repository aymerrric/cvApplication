export default [
  {
    data: [
      { label: "Name", type: "text", placeHolder: "Joe", inputName: "name" },
      {
        label: "Email",
        type: "email",
        placeHolder: "example@gamil.com",
        inputName: "email",
      },
      {
        label: "Phone",
        type: "phone",
        placeHolder: "06.12.33.54.27",
        inputName: "phone",
      },
    ],

    id: 0,
    title: "General Information",
  },
  {
    data: [
      {
        label: "School Name",
        type: "text",
        placeHolder: "Columbia",
        inputName: "school-name",
      },
      {
        label: "Title of Study",
        type: "text",
        placeHolder: "Bachelor",
        inputName: "title-of-study",
      },
      {
        label: "Date of the beginning of study",
        type: "date",
        placeHolder: "06/10/2024",
        inputName: "date-of-the-beginning-of-study",
      },
      {
        label: "Date of the end of study",
        type: "date",
        placeHolder: "06/10/2024",
        inputName: "date-of-the-end-of-study",
      },
    ],
    id: 1,
    title: "School Information",
  },
  {
    data: [
      {
        label: "Company Name",
        type: "text",
        placeHolder: "Google",
        inputName: "company-name",
      },
      {
        label: "Position Title",
        type: "text",
        placeHolder: "Software Engineer",
        inputName: "position-title",
      },
      {
        label: "Main Responsibilities",
        type: "textarea",
        placeHolder: "Developing and maintaining web applications...",
        inputName: "main-responsibilities",
      },
      {
        label: "Date From",
        type: "date",
        placeHolder: "01/01/2020",
        inputName: "date-from",
      },
      {
        label: "Date Until",
        type: "date",
        placeHolder: "12/31/2023",
        inputName: "date-until",
      },
    ],
    id: 2,
    title: "Most Important Job",
  },
];
