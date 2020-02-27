export const court = [
  {
    label: "Court Representation",
    activated: false,
    questions: [
      {
        _id: "c1",
        label: "Probability of success",
        value: 1,
        selectedValue: null,
        type: "range",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "-",
              expression: 200
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 200
            }
          }
        ]
      },
      {
        _id: "c10",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Number of court days",
        max: 9999999999999,
        modifier: {
          target: "base",
          operator: "+",
          expression: 250
        }
      }
    ]
  }
];
