window.WEDDING = {
  names: {
    bride: "Sabita Sharma",
    groom: "Sahil Sharma",
    brideHi: "सबिता शर्मा",
    groomHi: "साहिल शर्मा",
  }, // Hindi names not printed on card
  monogram: "S & S",
  monogramImage: "assets/monogram.png",
  city: "Anandpur Sahib, Ropar (Pb.)",
  dateISO: "2026-12-05",
  dateText: "Saturday, 05 December 2026",
  countdown: {
    label: "First ceremony – Nanka Mel",
    target: "2026-12-05T11:00:00+05:30",
  }, // card prints no Pheras muhurat
  music: "",// add e.g. "assets/music.mp3" when available
  video: "", 
  address:
    "Vill. Nard, P.O. Massewal, Teh. Shri Anandpur Sahib, Distt. Ropar (Pb.)",
  blessingLine:
    "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
  hosts: {
    bride: {
      lines: [
        "Smt. Rajni Sharma & Sub. Major Bihari Lal Sharma",
        "Requests the pleasure of your company on the auspicious occasion of the Marriage Ceremony of their Loving Grand Daughter",
      ],
      brideName: "Sabita Sharma",
      brideParents: "(D/o Mrs. Seema Devi & Mr. Ashwani Kumar Kaushal)",
      weds: "Weds",
      groomName: "Sahil Sharma",
      groomParents: "[S/o Mrs. Anjana & Late Mr. Sanjeev Sharma]",
      groomPlace:
        "V.P.O. Ganguwal, Teh. Sri Anandpur Sahib, Distt. Ropar (Pb.)",
      at: "at their residence",
      venue:
        "Vill. Nard, P.O. Massewal, Teh. Shri Anandpur Sahib, Distt. Ropar (Pb.)",
      title: "Golden Moments",
      note: "नोट कपड़ों का लेन-देन बन्द है।",
      flowers: "Family Flowers :- Priyanka, Mahesh, Mannat, Hetan, Saksham",
      awaiting: "",
      compliments: "With Best Compliments From : All Relatives & Friends",
      cordial:
        "A cordial invitation from :- Mrs. Seema Devi & Mr. Ashwani Kumar Kaushal, Vill. Nard, P.O. Massewal, Teh. Shri Anandpur Sahib, Distt. Ropar (Pb.)",
      rsvpName: "All Kaushal Family",
    },
  },
  rsvp: ["9417938438", "7009506499", "9870712516"],
  events: [
    {
      name: "Nanka Mel",
      date: "2026-12-05",
      time: "11:00",
      label: "11:00 am",
      day: "Saturday, 05 December 2026",
    },
    {
      name: "Bharam Bhoj",
      date: "2026-12-05",
      time: "13:00",
      label: "01:00 pm",
      day: "Saturday, 05 December 2026",
    },
    {
      name: "Reception of Barat",
      date: "2026-12-05",
      time: "19:00",
      label: "07:00 pm",
      day: "Saturday, 05 December 2026",
    },
    {
      name: "Doli",
      date: "2026-12-06",
      time: "05:00",
      label: "05:00 am",
      day: "Sunday, 06 December 2026",
    },
  ].map((e) => ({
    ...e,
    venue: "At their residence",
    address:
      "Vill. Nard, P.O. Massewal, Teh. Shri Anandpur Sahib, Distt. Ropar (Pb.)",
    dress: "",
  })),
};
