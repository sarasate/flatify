export const weight = [
  {
    label: "Value Adjustment",
    activated: true,
    noSwitch: true,
    questions: [
      {
        _id: "1",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Economic Impact",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 20
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 30
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "2",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Risk of liability",
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
        _id: "5",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Legal Complexity",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 20
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 30
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];
