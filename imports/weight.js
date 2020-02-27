export const weight = [
  {
    label: "Value Adjustment",
    activated: true,
    noSwitch: true,
    questions: [
      {
        _id: "w3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Degree of automation",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "x",
              expression: 0.8
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "x",
              expression: 0.4
            }
          }
        ]
      },
      {
        _id: "w1",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Economic Impact",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "x",
              expression: 0.5
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1.5
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "w2",
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
              operator: "x",
              expression: 1
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1.25
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1.5
            }
          }
        ]
      },

      {
        _id: "w5",
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
              operator: "x",
              expression: 1
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1.25
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "x",
              expression: 1.5
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];
