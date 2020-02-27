export const court = [
  {
    label: "Court Representation",
    activated: false,
    questions: [
      {
        _id: "c1",
        label: "Risk",
        value: 0,
        selectedValue: null,
        type: "range",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 5
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 15
            }
          }
        ]
      },
      {
        _id: "c2",
        label: "Existing template used",
        value: 0,
        selectedValue: null,
        type: "checkbox",
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
              expression: 300
            }
          }
        ]
      }
    ]
  }
];
