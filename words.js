// Nepali words with their Hraswa and Dirgha forms
// correct: 'hraswa' or 'dirgha' indicates which form is the correct/longer vowel version
const words = [
    {
        "hraswa": "चिन्",
        "dirgha": "चीन्",
        "correct": "hraswa"
    },
    {
        "hraswa": "दीदी",
        "dirgha": "दिदी",
        "correct": "hraswa"
    },
    {
        "hraswa": "जिबन",
        "dirgha": "जीवन",
        "correct": "dirgha"
    },
    {
        "hraswa": "परीचय",
        "dirgha": "परिचय",
        "correct": "hraswa"
    },
    {
        "hraswa": "पुजा",
        "dirgha": "पूजा",
        "correct": "dirgha"
    },
    {
        "hraswa": "बिमारी",
        "dirgha": "बीमारी",
        "correct": "dirgha"
    },
    {
        "hraswa": "कपी",
        "dirgha": "कपि",
        "correct": "hraswa"
    },
    {
        "hraswa": "सम्पती",
        "dirgha": "सम्पत्ति",
        "correct": "hraswa"
    },
    {
        "hraswa": "नीति",
        "dirgha": "निति",
        "correct": "dirgha"
    },
    {
        "hraswa": "किनारा",
        "dirgha": "कीनारा",
        "correct": "hraswa"
    },
    {
        "hraswa": "मिति",
        "dirgha": "मीति",
        "correct": "hraswa"
    },
    {
        "hraswa": "शक्ती",
        "dirgha": "शक्ति",
        "correct": "hraswa"
    },
    {
        "hraswa": "विमान",
        "dirgha": "बीमान",
        "correct": "hraswa"
    },
    {
        "hraswa": "सुरु",
        "dirgha": "सुरू",
        "correct": "hraswa"
    },
    {
        "hraswa": "भुगोल",
        "dirgha": "भूगोल",
        "correct": "dirgha"
    },
    {
        "hraswa": "आशिष",
        "dirgha": "आशीष",
        "correct": "dirgha"
    },
    {
        "hraswa": "बुद्धि",
        "dirgha": "बूद्धि",
        "correct": "hraswa"
    },
    {
        "hraswa": "अधिकारि",
        "dirgha": "अधिकारी",
        "correct": "dirgha"
    },
    {
        "hraswa": "महिना",
        "dirgha": "मीहिना",
        "correct": "hraswa"
    },
    {
        "hraswa": "बलिदान",
        "dirgha": "बलीदान",
        "correct": "hraswa"
    },
    {
        "hraswa": "नदि",
        "dirgha": "नदी",
        "correct": "dirgha"
    },
    {
        "hraswa": "साधु",
        "dirgha": "साधू",
        "correct": "hraswa"
    },
    {
        "hraswa": "सुर्य",
        "dirgha": "सूर्य",
        "correct": "hraswa"
    },
    {
        "hraswa": "पुस्ता",
        "dirgha": "पूस्ता",
        "correct": "hraswa"
    },
    {
        "hraswa": "भित्री",
        "dirgha": "भित्रि",
        "correct": "dirgha"
    },
    {
        "hraswa": "भुमिका",
        "dirgha": "भूमिका",
        "correct": "dirgha"
    },
    {
        "hraswa": "अतिथि",
        "dirgha": "अतीथी",
        "correct": "hraswa"
    },
    {
        "hraswa": "प्रतिनिधि",
        "dirgha": "प्रतिनिधी",
        "correct": "hraswa"
    },
    {
        "hraswa": "मन्दिर",
        "dirgha": "मन्दीर",
        "correct": "hraswa"
    },
    {
        "hraswa": "बिधि",
        "dirgha": "विधि",
        "correct": "hraswa"
    },
    {
        "hraswa": "कपील",
        "dirgha": "कपिल",
        "correct": "hraswa"
    },
    {
        "hraswa": "खुसि",
        "dirgha": "खुसी",
        "correct": "dirgha"
    },
    {
        "hraswa": "सिमा",
        "dirgha": "सीमा",
        "correct": "dirgha"
    },
    {
        "hraswa": "परिक्षा",
        "dirgha": "परीक्षा",
        "correct": "dirgha"
    },
    {
        "hraswa": "पुरानो",
        "dirgha": "पूरानो",
        "correct": "hraswa"
    },
    {
        "hraswa": "पुनः",
        "dirgha": "पूनः",
        "correct": "hraswa"
    },
    {
        "hraswa": "सुचना",
        "dirgha": "सूचना",
        "correct": "dirgha"
    },
    {
        "hraswa": "तुलना",
        "dirgha": "तुलना",
        "correct": "hraswa"
    },
    {
        "hraswa": "रसीद",
        "dirgha": "रसिद",
        "correct": "dirgha"
    },
    {
        "hraswa": "इतिहास",
        "dirgha": "ईतिहास",
        "correct": "hraswa"
    },
    {
        "hraswa": "कुरा",
        "dirgha": "कूरा",
        "correct": "hraswa"
    },
    {
        "hraswa": "विवाह",
        "dirgha": "बीवाह",
        "correct": "hraswa"
    },
    {
        "hraswa": "उपयोगी",
        "dirgha": "उपयोगि",
        "correct": "dirgha"
    },
    {
        "hraswa": "मिश्रित",
        "dirgha": "मीश्रित",
        "correct": "hraswa"
    },
    {
        "hraswa": "परिपक्व",
        "dirgha": "परीपक्व",
        "correct": "hraswa"
    },
    {
        "hraswa": "पीडा",
        "dirgha": "पिडा",
        "correct": "dirgha"
    },
    {
        "hraswa": "पसिना",
        "dirgha": "पसीना",
        "correct": "hraswa"
    },
    {
        "hraswa": "रिसाहा",
        "dirgha": "रीसाहा",
        "correct": "hraswa"
    },
    {
        "hraswa": "शक्तिको",
        "dirgha": "शक्तीको",
        "correct": "hraswa"
    },
    {
        "hraswa": "शिर",
        "dirgha": "शीर्",
        "correct": "hraswa"
    },
    {
        "hraswa": "शिशिर",
        "dirgha": "शिशीर",
        "correct": "hraswa"
    },
    {
        "hraswa": "सिकाई",
        "dirgha": "सिकाइ",
        "correct": "hraswa"
    },
    {
        "hraswa": "सुकुल",
        "dirgha": "सूकुल",
        "correct": "hraswa"
    },
    {
        "hraswa": "हिमाल",
        "dirgha": "हीमाल",
        "correct": "hraswa"
    },
    {
        "hraswa": "ईज्जत",
        "dirgha": "इज्जत",
        "correct": "hraswa"
    },
    {
        "hraswa": "किताब",
        "dirgha": "कीताब",
        "correct": "hraswa"
    },
    {
        "hraswa": "खुकुरी",
        "dirgha": "खुकूरी",
        "correct": "hraswa"
    },
    {
        "hraswa": "चौकी",
        "dirgha": "चौकि",
        "correct": "dirgha"
    },
    {
        "hraswa": "छिमेकी",
        "dirgha": "छिमेकि",
        "correct": "dirgha"
    },
    {
        "hraswa": "जिद्दी",
        "dirgha": "जीद्दी",
        "correct": "hraswa"
    },
    {
        "hraswa": "तुफान",
        "dirgha": "तूफान",
        "correct": "hraswa"
    },
    {
        "hraswa": "दिग्दर्शन",
        "dirgha": "दीग्दर्शन",
        "correct": "hraswa"
    },
    {
        "hraswa": "देशि",
        "dirgha": "देशी",
        "correct": "dirgha"
    },
    {
        "hraswa": "नीलो",
        "dirgha": "निलो",
        "correct": "dirgha"
    },
    {
        "hraswa": "बिहान",
        "dirgha": "बीहान",
        "correct": "hraswa"
    },
    {
        "hraswa": "पुर्णिमा",
        "dirgha": "पूर्णिमा",
        "correct": "dirgha"
    },
    {
        "hraswa": "बुढो",
        "dirgha": "बूढो",
        "correct": "hraswa"
    },
    {
        "hraswa": "मीठो",
        "dirgha": "मिठो",
        "correct": "dirgha"
    },
    {
        "hraswa": "राखी",
        "dirgha": "राखि",
        "correct": "dirgha"
    },
    {
        "hraswa": "लुरी",
        "dirgha": "लुरी",
        "correct": "dirgha"
    },
    {
        "hraswa": "सुकेको",
        "dirgha": "सूकेको",
        "correct": "hraswa"
    },
    {
        "hraswa": "आशिर्वाद",
        "dirgha": "आशीर्वाद",
        "correct": "dirgha"
    },
    {
        "hraswa": "किनमेल",
        "dirgha": "कीनमेल",
        "correct": "hraswa"
    },
    {
        "hraswa": "पुर्खा",
        "dirgha": "पूर्खा",
        "correct": "dirgha"
    },
    {
        "hraswa": "फिर्ता",
        "dirgha": "फीर्ता",
        "correct": "hraswa"
    },
    {
        "hraswa": "बिस्तारै",
        "dirgha": "बीस्तारै",
        "correct": "hraswa"
    },
    {
        "hraswa": "उपस्थिति",
        "dirgha": "उपस्थीति",
        "correct": "hraswa"
    },
    {
        "hraswa": "उपहार",
        "dirgha": "ऊपहार",
        "correct": "hraswa"
    },
    {
        "hraswa": "आदि",
        "dirgha": "आदी",
        "correct": "hraswa"
    },
    {
        "hraswa": "दाइ",
        "dirgha": "दाई",
        "correct": "hraswa"
    },
    {
        "hraswa": "आर्थिक",
        "dirgha": "आर्थीक",
        "correct": "dirgha"
    },
    {
        "hraswa": "कृति",
        "dirgha": "कृती",
        "correct": "hraswa"
    },
    {
        "hraswa": "जागिर",
        "dirgha": "जागीर",
        "correct": "hraswa"
    },
    {
        "hraswa": "निक्कै",
        "dirgha": "नीक्कै",
        "correct": "hraswa"
    },
    {
        "hraswa": "निरस",
        "dirgha": "नीरस्",
        "correct": "hraswa"
    },
    {
        "hraswa": "परीक्षा",
        "dirgha": "परिक्षा",
        "correct": "dirgha"
    },
    {
        "hraswa": "बिर्सनु",
        "dirgha": "बीर्सनु",
        "correct": "hraswa"
    },
    {
        "hraswa": "भाइ",
        "dirgha": "भाई",
        "correct": "hraswa"
    },
    {
        "hraswa": "मानिस",
        "dirgha": "मानीस",
        "correct": "hraswa"
    },
    {
        "hraswa": "रूख",
        "dirgha": "रुख",
        "correct": "dirgha"
    },
    {
        "hraswa": "सिस्नु",
        "dirgha": "सीस्नु",
        "correct": "hraswa"
    },
    {
        "hraswa": "सुझाव",
        "dirgha": "सूझाव",
        "correct": "hraswa"
    },
    {
        "hraswa": "सीप",
        "dirgha": "सिप",
        "correct": "dirgha"
    },
    {
        "hraswa": "सुन्दर",
        "dirgha": "सून्दर",
        "correct": "hraswa"
    },
    {
        "hraswa": "कीरा",
        "dirgha": "किरा",
        "correct": "dirgha"
    },
    {
        "hraswa": "कुवा",
        "dirgha": "कूवा",
        "correct": "hraswa"
    },
    {
        "hraswa": "खेती",
        "dirgha": "खेति",
        "correct": "dirgha"
    },
    {
        "hraswa": "गल्ती",
        "dirgha": "गल्ति",
        "correct": "dirgha"
    },
    {
        "hraswa": "छिनो",
        "dirgha": "छीनो",
        "correct": "hraswa"
    },
    {
        "hraswa": "चोरी",
        "dirgha": "चोरि",
        "correct": "dirgha"
    },
    {
        "hraswa": "जीवनि",
        "dirgha": "जीवनी",
        "correct": "dirgha"
    },
    {
        "hraswa": "पानी",
        "dirgha": "पानि",
        "correct": "dirgha"
    },
    {
        "hraswa": "पूर्वी",
        "dirgha": "पुर्वी",
        "correct": "dirgha"
    },
    {
        "hraswa": "सहि",
        "dirgha": "सही",
        "correct": "dirgha"
    },
    {
        "hraswa": "हामी",
        "dirgha": "हामी",
        "correct": "dirgha"
    },
    {
        "hraswa": "उचित",
        "dirgha": "ऊचित",
        "correct": "hraswa"
    },
    {
        "hraswa": "कुरा",
        "dirgha": "कूरा",
        "correct": "hraswa"
    },
    {
        "hraswa": "तुलसी",
        "dirgha": "तुलसि",
        "correct": "dirgha"
    },
    {
        "hraswa": "दिमाग",
        "dirgha": "दिमाग",
        "correct": "hraswa"
    },
    {
        "hraswa": "विदेशी",
        "dirgha": "बिदेशी",
        "correct": "hraswa"
    },
    {
        "hraswa": "शारीरिक",
        "dirgha": "शारीरीक",
        "correct": "dirgha"
    },
    {
        "hraswa": "युग",
        "dirgha": "यूग",
        "correct": "hraswa"
    },
    {
    "hraswa": "केटि",
    "dirgha": "केटी",
    "correct": "dirgha"
  },
  {
    "hraswa": "श्रीमति",
    "dirgha": "श्रीमती",
    "correct": "dirgha"
  },
  {
    "hraswa": "रानि",
    "dirgha": "रानी",
    "correct": "dirgha"
  },
  {
    "hraswa": "कुमारि",
    "dirgha": "कुमारी",
    "correct": "dirgha"
  },
  {
    "hraswa": "सासु",
    "dirgha": "सासू",
    "correct": "dirgha"
  },
  {
    "hraswa": "भाउजु",
    "dirgha": "भाउजू",
    "correct": "dirgha"
  },
  {
    "hraswa": "गाइ",
    "dirgha": "गाई",
    "correct": "dirgha"
  },
  {
    "hraswa": "भैंसि",
    "dirgha": "भैंसी",
    "correct": "dirgha"
  },
  {
    "hraswa": "काकि",
    "dirgha": "काकी",
    "correct": "dirgha"
  },
  {
    "hraswa": "तिमि",
    "dirgha": "तिमी",
    "correct": "dirgha"
  },
  {
    "hraswa": "उनि",
    "dirgha": "उनी",
    "correct": "dirgha"
  },
  {
    "hraswa": "तिनि",
    "dirgha": "तिनी",
    "correct": "dirgha"
  },
  {
    "hraswa": "यिनि",
    "dirgha": "यिनी",
    "correct": "dirgha"
  },
  {
    "hraswa": "कोहि",
    "dirgha": "कोही",
    "correct": "dirgha"
  },
  {
    "hraswa": "केहि",
    "dirgha": "केही",
    "correct": "dirgha"
  },
  {
    "hraswa": "आफु",
    "dirgha": "आफू",
    "correct": "dirgha"
  },
  {
    "hraswa": "राम्रि",
    "dirgha": "राम्री",
    "correct": "dirgha"
  },
  {
    "hraswa": "कालि",
    "dirgha": "काली",
    "correct": "dirgha"
  },
  {
    "hraswa": "गोरि",
    "dirgha": "गोरी",
    "correct": "dirgha"
  },
  {
    "hraswa": "सुनदरि",
    "dirgha": "सुन्दरी",
    "correct": "dirgha"
  },
  {
    "hraswa": "धनि",
    "dirgha": "धनी",
    "correct": "dirgha"
  },
  {
    "hraswa": "परिश्रमि",
    "dirgha": "परिश्रमी",
    "correct": "dirgha"
  },
  {
    "hraswa": "दाजु",
    "dirgha": "दाजू",
    "correct": "hraswa"
  },
  {
    "hraswa": "गुरु",
    "dirgha": "गुरू",
    "correct": "hraswa"
  },
  {
    "hraswa": "पति",
    "dirgha": "पती",
    "correct": "hraswa"
  },
  {
    "hraswa": "नाति",
    "dirgha": "नाती",
    "correct": "hraswa"
  },
  {
    "hraswa": "पुल",
    "dirgha": "पूल",
    "correct": "hraswa"
  },
  {
    "hraswa": "मुख",
    "dirgha": "मूख",
    "correct": "hraswa"
  },
  {
    "hraswa": "सुख",
    "dirgha": "सूख",
    "correct": "hraswa"
  },
  {
    "hraswa": "दुख",
    "dirgha": "दूख",
    "correct": "hraswa"
  },
  {
    "hraswa": "सुन",
    "dirgha": "सून",
    "correct": "hraswa"
  },
  {
    "hraswa": "मुटु",
    "dirgha": "मूटु",
    "correct": "hraswa"
  },
  {
    "hraswa": "पशु",
    "dirgha": "पशू",
    "correct": "hraswa"
  },
  {
    "hraswa": "पिठो",
    "dirgha": "पीठो",
    "correct": "hraswa"
  },
  {
    "hraswa": "तितो",
    "dirgha": "तीतो",
    "correct": "hraswa"
  },
  {
    "hraswa": "पिरो",
    "dirgha": "पीरो",
    "correct": "hraswa"
  },
  {
    "hraswa": "सित्तै",
    "dirgha": "सीत्तै",
    "correct": "hraswa"
  },
  {
    "hraswa": "सहिद",
    "dirgha": "शहीद",
    "correct": "hraswa"
  },
  {
    "hraswa": "पुलिस",
    "dirgha": "पुलीस",
    "correct": "hraswa"
  },
  {
    "hraswa": "अफिस",
    "dirgha": "अफीस",
    "correct": "hraswa"
  },
  {
    "hraswa": "गरिब",
    "dirgha": "गरीब",
    "correct": "hraswa"
  },
  {
    "hraswa": "स्कुल",
    "dirgha": "स्कूल",
    "correct": "hraswa"
  },
  {
    "hraswa": "अघि",
    "dirgha": "अघी",
    "correct": "hraswa"
  },
  {
    "hraswa": "पछि",
    "dirgha": "पछी",
    "correct": "hraswa"
  },
  {
    "hraswa": "माथि",
    "dirgha": "माथी",
    "correct": "hraswa"
  },
  {
    "hraswa": "मुनि",
    "dirgha": "मुनी",
    "correct": "hraswa"
  },
  {
    "hraswa": "पनि",
    "dirgha": "पनी",
    "correct": "hraswa"
  },
  {
    "hraswa": "अनि",
    "dirgha": "अनी",
    "correct": "hraswa"
  },
  {
    "hraswa": "भोलि",
    "dirgha": "भोली",
    "correct": "hraswa"
  },
  {
    "hraswa": "पर्सि",
    "dirgha": "पर्सी",
    "correct": "hraswa"
  },
  {
    "hraswa": "गति",
    "dirgha": "गती",
    "correct": "hraswa"
  },
  {
    "hraswa": "स्थिति",
    "dirgha": "स्थीति",
    "correct": "hraswa"
  },
  {
    "hraswa": "भूमि",
    "dirgha": "भूमी",
    "correct": "hraswa"
  },
  {
    "hraswa": "सृष्टि",
    "dirgha": "सृष्टी",
    "correct": "hraswa"
  },
  {
    "hraswa": "दृष्टि",
    "dirgha": "दृष्टी",
    "correct": "hraswa"
  },
  {
    "hraswa": "प्रकृति",
    "dirgha": "प्रकृती",
    "correct": "hraswa"
  },
  {
    "hraswa": "पीडित",
    "dirgha": "पीडीत",
    "correct": "hraswa"
  },
  {
    "hraswa": "शिक्षित",
    "dirgha": "शिक्षीत",
    "correct": "hraswa"
  },
  {
    "hraswa": "लिखित",
    "dirgha": "लिखीत",
    "correct": "hraswa"
  },
  {
    "hraswa": "सामाजिक",
    "dirgha": "सामाजीक",
    "correct": "hraswa"
  },
  {
    "hraswa": "राजनीतिक",
    "dirgha": "राजनीतीक",
    "correct": "hraswa"
  },
  {
    "hraswa": "धार्मिक",
    "dirgha": "धार्मीक",
    "correct": "hraswa"
  },
  {
    "hraswa": "दैनिक",
    "dirgha": "दैनीक",
    "correct": "hraswa"
  },
  {
    "hraswa": "फुल",
    "dirgha": "फूल",
    "correct": "dirgha"
  },
  {
    "hraswa": "दुध",
    "dirgha": "दूध",
    "correct": "dirgha"
  },
  {
    "hraswa": "मुल",
    "dirgha": "मूल",
    "correct": "dirgha"
  },
  {
    "hraswa": "ठुलो",
    "dirgha": "ठूलो",
    "correct": "dirgha"
  },
  {
    "hraswa": "धुलो",
    "dirgha": "धूलो",
    "correct": "dirgha"
  },
  {
    "hraswa": "पुरा",
    "dirgha": "पूरा",
    "correct": "dirgha"
  },
  {
    "hraswa": "जुन",
    "dirgha": "जून",
    "correct": "dirgha"
  },
  {
    "hraswa": "ठिक",
    "dirgha": "ठीक",
    "correct": "hraswa"
  },
  {
    "hraswa": "झिलिमिलि",
    "dirgha": "झीलीमीली",
    "correct": "hraswa"
  },
  {
    "hraswa": "टुलुटुलु",
    "dirgha": "टूलूटूलू",
    "correct": "hraswa"
  },
  {
    "hraswa": "बिच",
    "dirgha": "बीच",
    "correct": "dirgha"
  },
  {
    "hraswa": "गहिरो",
    "dirgha": "गहीरो",
    "correct": "hraswa"
  },
  {
    "hraswa": "बिउ",
    "dirgha": "बीउ",
    "correct": "dirgha"
  },
  {
    "hraswa": "नुन",
    "dirgha": "नून",
    "correct": "hraswa"
  }
];
