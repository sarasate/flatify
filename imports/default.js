export const settings = {
  type: "",
  currency: "eur",
  title: "M",
  fullName: "Pierre Portal",
  contractBase: 300,
  addOns: {
    clientCalls: 20,
    copies: 10,
    courtDay: 100, // * n
    contractPage: 10, // * n
    complexityMultiplier: 0.3 // + n (* cost),
  }
};

export const categories = [
  {
    label: "Standard",
    activated: true,
    questions: [
      {
        id: "1",
        optional: true,
        type: "range",
        label: "Degree of automation",
        options: [
          {
            value: 10,
            modifier: {
              target: "base",
              operator: "+",
              expression: "input"
            }
          }
        ],
        defaultValue: 1
      },
      {
        id: "2",
        optional: true,
        type: "range",
        label: "Risk",
        options: [
          {
            value: 10,
            modifier: {
              target: "base",
              operator: "+",
              expression: "input"
            }
          }
        ],
        defaultValue: 1
      },
      {
        id: "3",
        optional: true,
        type: "checkbox",
        label: "Additional insurance required",
        options: [
          {
            value: 10,
            modifier: {
              target: "base",
              operator: "+",
              expression: "input"
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];

// const createQuestion = params => {
//   questions.push({ ...params });
// };

// const createOption = (questionId, params) => {
//   questions
//     .find(question => question._id === questionId)
//     .options.push({ ...params });
// };
// createQuestion({
//   _id: i,
//   user: "",
//   optional: true,
//   activated: true, // if .optional === true
//   type: "dropdown",
//   label: "Court",
//   options: [],
//   defaultValue: "Example of value",
//   steps: 3 // if .type === 'slider'
// });

// createOption(questionId, {
//   // label:'',
//   value: 10,
//   modifier: {
//     target: "base",
//     operator: "+",
//     expression: "input"
//   }
// });

// const addAddOn = newAddon => {
//   settings.addOns = { ...settings.addOns, ...newAddon };
// };

// const renderTemplate = (templateType, data) => {
//   console.log("TYPE:", templateType, "\nDATA:", data, "\n\n");
//   // Blaze.renderWithData(
//   //   Template[templateType],
//   //   data
//   //   Template.calculatorView
//   // )
// };
// // Map
// const createQuestions = questionList => {
//   return questionList.map(question => {
//     const { type } = question;
//     const { options } = question;
//     let data = { label: question.label };

//     const dataTypes = {
//       input: {
//         value: question.defaultValue,
//         placeholder: question.defaultValue
//       },
//       slider: { steps: Number((1 / question.steps).toFixed(1)) },
//       dropdown: { items: options },
//       checkbox: { options: options.map(o => ({ ...o, checked: "checked" })) }
//     };
//     return renderTemplate(type, { ...data, ...dataTypes[type] });
//   });
// };

// // addAddOn({ nightShift: 200 });

// // createQuestions(questions);
