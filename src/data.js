const firms = [
  {
    id: 1,
    name: "Firm 1",
    lawyers: [
      {
        id: 1,
        name: "Lawyer A",
        specialty: "Divorce Lawyer",
        availability: ["09:00", "23:00"],
        costPerAppointment: 100,
        appointments: {
         
          '2024-09-21': [
            { time: '10:00', description: 'Follow-up with client B' }
          ],
          
        }
      },
      {
        id: 2,
        name: "Lawyer B",
        specialty: "Criminal Lawyer",
        availability: ["10:00", "11:00", "12:00", "16:00"],
        costPerAppointment: 150,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
      {
        id: 3,
        name: "Lawyer W",
        specialty: "Property Dispute Lawyer",
        availability: [ "10:00", "11:00", "14:00", "15:00"],
        costPerAppointment: 200,
        appointments: {
          '2024-09-20': [
            { time: '09:00', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:00', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        }
      },
      {
        id: 1,
        name: "Lawyer I",
        specialty: "Property Dispute Lawyer",
        availability: ["09:30", "10:30", "12:30"],
        costPerAppointment: 200,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
    ],
  },
  {
    id: 2,
    name: "Firm 2",
    lawyers: [
      {
        id: 3,
        name: "Lawyer C",
        specialty: "Property Dispute Lawyer",
        availability: ["09:30", "10:30", "12:30"],
        costPerAppointment: 200,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
      {
        id: 4,
        name: "Lawyer D",
        specialty: "Corporate Lawyer",
        availability: ["09:00", "13:00", "15:00"],
        costPerAppointment: 180,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
    ],
  },
  {
    id: 3,
    name: "Firm 3",
    lawyers: [
      {
        id: 1,
        name: "Lawyer G",
        specialty: "Property Dispute Lawyer",
        availability: ["09:30", "10:30", "12:30"],
        costPerAppointment: 200,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
      {
        id: 2,
        name: "Lawyer D",
        specialty: "Corporate Lawyer",
        availability: ["09:00", "13:00", "15:00"],
        costPerAppointment: 180,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
    ],
  },
  {
    id: 4,
    name: "Firm 4",
    lawyers: [
      {
        id: 1,
        name: "Lawyer G",
        specialty: "Property Dispute Lawyer",
        availability: ["09:30", "10:30", "12:30"],
        costPerAppointment: 200,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
      {
        id: 2,
        name: "Lawyer D",
        specialty: "Corporate Lawyer",
        availability: ["09:00", "13:00", "15:00"],
        costPerAppointment: 180,
        appointments: {
          '2024-09-20': [
            { time: '08:30', description: 'Consultation with client A' },
            { time: '14:00', description: 'Consultation with client D' }
          ],
          '2024-09-21': [
            { time: '10:30', description: 'Follow-up with client B' }
          ],
          '2024-09-22': [
            { time: '09:00', description: 'Meeting with client C' },
            { time: '11:00', description: 'Review case with client E' }
          ]
        },
      },
    ],
  },
];


export default firms;
