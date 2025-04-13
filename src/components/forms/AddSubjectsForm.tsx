import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AddSubjectsForm = ({
  setTotalData,
  setPage,
  defaultValues,
}: {
  setTotalData: React.Dispatch<React.SetStateAction<TotalData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  defaultValues: Subject[] | [];
}) => {
  const [subjects, setSubjects] = useState<string[]>(defaultValues);

  const handleAddSubject = () => {
    setSubjects([...subjects, ""]);
  };

  const handleRemoveSubject = () => {
    setSubjects(subjects.slice(0, -1));
  };

  const handleSubjectChange = (index: number, value: string) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = value;
    setSubjects(updatedSubjects);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredSubjects = subjects.filter(
      (subject) => subject.trim() !== ""
    );
    setTotalData((prev) => ({ ...prev, subjects: filteredSubjects }));
    setPage((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-lg shadow-lg w-full h-full flex flex-col gap-4 mb-4 mt-5"
    >
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Add Subjects</h1>
        <div className="gap-4 w-full md:flex-row md:flex-wrap flex-col flex justify-center min-h-[70%]">
          {subjects.map((subject, index) => (
            <input
              key={index}
              type="text"
              value={subject}
              onChange={(e) => handleSubjectChange(index, e.target.value)}
              placeholder={`Subject ${index + 1}`}
              className="p-2 border rounded-md w-full md:w-1/3 outline-none ring-2 ring-primary"
            />
          ))}
        </div>
        <div className="w-full flex gap-4">
          <button
            type="button"
            onClick={handleRemoveSubject}
            className="w-full"
          >
            Remove Subject
          </button>
          <button type="button" onClick={handleAddSubject} className="w-full">
            Add Subject
          </button>
        </div>
        <div className="w-full flex gap-4 justify-between px-2">
          <button
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ArrowLeft /> Prev
          </button>
          <div className="flex gap-2 items-center">
            {[1,2,3,4,5,6].map((x,i) => <div key={i} className={"w-5 h-5 border border-secondary rounded-full " + (x === 5 ? "bg-secondary":"bg-transparent")}/>)}
          </div>
          <button
            disabled={subjects.length < 0}
            type="submit"
            className="justify-end"
          >
            Next <ArrowRight />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddSubjectsForm;
