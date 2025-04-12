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
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white rounded-lg shadow-lg w-[90%] min-h-[90%] md:min-h-[70%] md:w-3/4 flex flex-col gap-4 mb-4"
    >
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Add Subjects</h1>
        <div className="gap-4 w-full md:flex-row md:flex-wrap flex-col flex justify-center">
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
          className="w-full bg-primary text-white py-2 rounded-md font-semibold"
        >
          Remove Subject
        </button>
        <button
          type="button"
          onClick={handleAddSubject}
          className="w-full bg-primary text-white py-2 rounded-md font-semibold"
        >
          Add Subject
        </button>
        </div>
        <div className="w-full flex gap-4">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="w-full bg-primary text-secondary p-2 rounded font-bold flex gap-2 items-center"
          >
            <ArrowLeft /> Prev
          </button>
          <button
            disabled={subjects.length < 0}
            type="submit"
            className="w-full bg-primary disabled:opacity-50 text-secondary p-2 rounded font-bold flex gap-2 justify-end items-center"
          >
            Next <ArrowRight />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddSubjectsForm;
