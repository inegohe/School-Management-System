import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

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
    if (filteredSubjects.length < 10) {
      toast("A school must have atleast 10 subjects");
    } else {
      setTotalData((prev) => ({ ...prev, subjects: filteredSubjects }));
      setPage((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-lg shadow-lg w-full h-full flex flex-col gap-4 mb-4 mt-5"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col h-full justify-between"
      >
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4">Add Subjects</h1>
          <div className="gap-4 w-full md:flex-row md:flex-wrap flex-col flex justify-center">
            {subjects.map((subject, index) => (
              <input
                key={index}
                type="text"
                value={subject}
                onChange={(e) => handleSubjectChange(index, e.target.value)}
                onKeyPress={(e) => {
                  if(e.key === "Enter"){
                    e.preventDefault();
                    handleAddSubject();
                  }
                }}
                placeholder={`Subject ${index + 1}`}
                className="input p-2 border-b border-primary rounded-md w-full md:w-1/3 outline-none"
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full justify-between flex gap-4">
            <button
              type="button"
              onClick={handleRemoveSubject}
              className="button"
            >
              Remove Subject
            </button>
            <button type="button" onClick={handleAddSubject} className="button">
              Add Subject
            </button>
          </div>
          <div className="w-full flex gap-4 justify-between self-end">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              className="button"
            >
              <ArrowLeft /> Prev
            </button>
            <div className="flex gap-2 items-center">
              {Array(7)
                .fill("")
                .map((_, i) => (
                  <div
                    key={i}
                    className={
                      "w-2 h-2 md:w-3 md:h-3 border border-secondary rounded-full " +
                      (i === 5 ? "bg-secondary" : "bg-transparent")
                    }
                  />
                ))}
            </div>
            <button
              disabled={subjects.length < 10}
              type="submit"
              className="button justify-end"
            >
              Next <ArrowRight />
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default AddSubjectsForm;
