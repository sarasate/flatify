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
        _id: "0",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Cost",
        modifier: {
          target: "base",
          operator: "add",
          expression: 100
        },
        defaultValue: 0
      },
      {
        _id: "1",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Degree of automation",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "add",
              expression: 10
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "add",
              expression: 20
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "add",
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
        label: "Risk",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "add",
              expression: 5
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "add",
              expression: 10
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "add",
              expression: 15
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "Additional insurance required",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "add",
              expression: 300
            }
          },
          {
            value: "yes",
            modifier: {
              target: "base",
              operator: "add",
              expression: 300
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];
