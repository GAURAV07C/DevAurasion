import React from "react";
import {qnas} from '@/data/qna'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const QnA = () => {
  return (
    <div className="w-full bg-white">
      <div className="mb-14">
        <section>
          <div>
            <div className="w-4/6 mx-auto py-8 mt-5">
              <p className="font-bold text-4xl text-center text-[#5D5A88]">
                We’ve Got Answers for You!
              </p>
              <p className="font-normal text-center text-lg text-[#9795B5] ">
                From common queries to in-depth explanations, find everything
                you need to know right here.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-9">
          <div className="w-10/12 mx-auto">
            <Accordion type="single" collapsible className="w-full  ">
                <div className="  ">
                  {qnas.map((qna,index)=>(
                    

                   
              <AccordionItem  value={`item-${qna.sno}`} key={index} className="bg-[#E7E6F2] border-2  mt-2 rounded-lg px-11" >
                <AccordionTrigger> <p className="font-bold text-xl text-[#5D5A88]"> {qna.question} </p> </AccordionTrigger>
                <AccordionContent>
                    <p className="font-normal text-lg text-[#9795B5]">
                    {qna.answer}</p>
                </AccordionContent>
              </AccordionItem>
              
                  ))}

              </div>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QnA;
