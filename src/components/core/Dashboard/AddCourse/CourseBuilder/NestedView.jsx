import React, { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import ConfirmationModal from "../../../../common/ConfirmationModal";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import SubSectionModal from './SubSectionModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../slices/courseSlice';

const NestedView = ({ handleChangeEditName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection({ sectionId, courseid: course._id }, token);
    if (result) dispatch(setCourse(result));
    setConfirmationModal(null);
  };

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({ courseid: course._id, subSectionId, sectionId }, token);
    if (result) dispatch(setCourse(result));
    setConfirmationModal(null);
  };

  return (
    <div className="space-y-6">
      {course?.courseContent?.map((section) => (
        <details key={section._id} open className="rounded-md border border-richblack-700 bg-richblack-800 p-4 shadow-md">
          <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-yellow-50">
            <div className="flex items-center gap-x-3">
              <RxDropdownMenu className="text-xl text-yellow-200" />
              <span>{section.sectionName}</span>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={() => handleChangeEditName(section._id, section.sectionName)} className="hover:text-yellow-300">
                <MdModeEdit className="text-xl" />
              </button>
              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Delete this section",
                    text2: "All lectures inside this section will be deleted.",
                    btn1Text: "Delete",
                    btn2Text: "Cancel",
                    btn1Handler: () => handleDeleteSection(section._id),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="hover:text-red-400"
              >
                <RiDeleteBin6Line className="text-xl" />
              </button>
              <span className="text-richblack-500">|</span>
              <BiSolidDownArrow className="text-lg text-richblack-300" />
            </div>
          </summary>

          <div className="mt-4 space-y-3 pl-6">
            {section.subSection.map((data) => (
              <div
                key={data._id}
                onClick={() => setViewSubSection(data)}
                className="flex cursor-pointer items-center justify-between rounded-md bg-richblack-700 p-3 hover:bg-richblack-600 transition-colors"
              >
                <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-x-3">
                  <RxDropdownMenu className="text-yellow-200" />
                  <p className="text-sm text-richblack-25">{data.title}</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <button onClick={() => setEditSubSection({ ...data, sectionId: section._id })} className="hover:text-yellow-300">
                    <MdModeEdit />
                  </button>
                  <button
                    onClick={() =>
                      setConfirmationModal({
                        text1: "Delete this Sub Section",
                        text2: "This lecture will be permanently deleted.",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handleDeleteSubSection(data._id, section._id),
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                    className="hover:text-red-400"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setAddSubSection(section._id)}
              className="mt-2 flex items-center gap-x-2 text-sm text-yellow-200 hover:text-yellow-300"
            >
              <FaPlus />
              <span>Add Lecture</span>
            </button>
          </div>
        </details>
      ))}

      {addSubSection && (
        <SubSectionModal modalData={addSubSection} setModalData={setAddSubSection} add={true} />
      )}
      {viewSubSection && (
        <SubSectionModal modalData={viewSubSection} setModalData={setViewSubSection} view={true} />
      )}
      {editSubSection && (
        <SubSectionModal modalData={editSubSection} setModalData={setEditSubSection} edit={true} />
      )}

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default NestedView;
