export const negotiation = [
  {
    label: "Negotiation",
    activated: false,
    questions: [
      {
        _id: "n1",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Number of meetings required (estimate)",
        modifier: {
          target: "base",
          operator: "add",
          expression: 100
        }
      },
      {
        _id: "n2",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "More than one other party involved",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "add",
              expression: 0
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
      },
      {
        _id: "n3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "Other party represented by lawyer",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "add",
              expression: 0
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