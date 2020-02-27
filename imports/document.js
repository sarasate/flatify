export const document = [
  {
    label: "Document Creation",
    activated: false,
    questions: [
      {
        _id: "d1",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Number of pages (estimate)",
        max: 9999999999999,
        modifier: {
          target: "base",
          operator: "+",
          expression: 20
        }
      },

      {
        _id: "d3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "B2C",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "yes",
            modifier: {
              target: "base",
              operator: "+",
              expression: 100
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "d4",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "B2B",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "yes",
            modifier: {
              target: "base",
              operator: "+",
              expression: 200
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];
