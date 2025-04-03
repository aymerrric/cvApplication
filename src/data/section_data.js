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
];
