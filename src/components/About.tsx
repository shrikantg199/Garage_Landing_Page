import Image from "next/image";
import { FC } from "react";
import logo from "../../public/image1.jpg";
interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="md:pt-24 pt-4 md:pb-28 h-auto ">
      <h2 className="text-center hidden md:block   items-center  p-4 text-3xl text-white">
        About
      </h2>
      <div className="md:flex md:flex-row w-full p-5 flex  flex-col items-center justify-start gap-32  rounded-xl h-auto">
        <h2 className="text-center md:hidden block  items-center  p-4 text-3xl text-white">
          About
        </h2>
        <div className="w-full p-14 flex items-center  justify-center">
          <Image
            src={logo}
            width={500}
            height={400}
            alt="Woman standing in front of a graffiti wall"
            className="max-w-full md:h-[40vh] md:w-[70vh] h-64 w-80 rounded-xl"
          />
        </div>
        <div className="w-full  ">
          <h2 className="text-3xl font-bold mb-4 text-white  md:mx-32">
            शिव ऑटो गॅरेज
          </h2>
          <h2 className="mb-8 md:text-xl md:w-96 text-white">
            <span className="text-orange-500">शिव ऑटो गॅरेज </span> मध्ये आपले
            स्वागत आहे, जेथे ऑटोमोटिव्ह तज्ञता आणि ग्राहक समाधान हा केंद्रबिंदू
            आहे. २ वर्षांहून अधिक अनुभवासह, आम्ही सर्व वाहन ब्रॅन्ड आणि
            मॉडेल्ससाठी उत्कृष्ट देखभाल, दुरुस्ती आणि सानुकूलित सेवा पुरवण्यावर
            विशेष लक्ष केंद्रित करतो.
            <br />
            <br /> <span className="text-orange-500">शिव ऑटो गॅरेज </span> येथे,
            आपण ऑटोमोबाइल क्षेत्रातील तज्ञांची आणि ग्राहक समाधानाची भेट घेऊ
            शकता. २ वर्षांहून अधिक अनुभवाचा फायदा घेत, आम्ही सर्व प्रकारच्या
            वाहनांच्या देखभाल, दुरुस्त्या आणि सानुकूलित करण्याच्या सेवा पुरवतो.
            उच्च दर्जाच्या कामगिरीसाठी आम्ही प्रसिद्ध आहोत आणि आमच्या ग्राहकांची
            समाधानाची खात्री बाळगतो.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
