import DoctorOne from "../assets/Dr.AmeliaChan.svg";
import DoctorTwo from "../assets/Dr.Blessing.svg";

export const doctorsByDepartment = {
  Cardiology: [
    {
      id: 1,
      name: "Dr. Amelia Chen",
      experience: "14 Yrs",
      available: true,
      image: DoctorOne,

      schedule: [
        { time: "10:00 AM", available: true },
        { time: "11:00 AM", available: false },
        { time: "12:00 PM", available: true },
        { time: "1:00 PM", available: false },
        { time: "2:00 PM", available: true },
        { time: "3:00 PM", available: true },
      ],
    },

    {
      id: 2,
      name: "Dr. Blessing Friday",
      experience: "14 Yrs",
      available: false,
      image: DoctorTwo,

      schedule: [
        { time: "10:00 AM", available: false },
        { time: "11:00 AM", available: false },
        { time: "12:00 PM", available: false },
        { time: "1:00 PM", available: false },
        { time: "2:00 PM", available: false },
        { time: "3:00 PM", available: false },
      ],
    },
  ],

  Neurology: [
    {
      id: 3,
      name: "Dr. Lawal Damijo",
      experience: "20 Yrs",
      available: true,
      image: DoctorTwo,

      schedule: [
        { time: "9:00 AM", available: true },
        { time: "10:00 AM", available: true },
      ],
    },
  ],
};