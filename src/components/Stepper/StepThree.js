import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiFillAlert, AiOutlinePlus } from 'react-icons/ai'
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Typography } from '@mui/material';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from 'reactstrap';
import { FaAngleDown } from 'react-icons/fa'
const StepThree = ({ text, setText, showModal, setShowModal, question, setQuestion, answer, setAnswer, faqs, setFaqs, isErrorDescription, isErrorShowDescription}) => {
  const stripHTMLTags = (htmlString) => {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = htmlString;
    return tmpDiv.textContent || tmpDiv.innerText || '';
  };

  const handleChange = (content) => {
    const strippedText = stripHTMLTags(content);
    if (strippedText.length <= 2000) {
      setText(content);
    } else {
      const limitedContent = strippedText.substring(0, 2000);
      setText(limitedContent);
    }
  };
  // ========= modal ===== faqs ==a dd =========
  const toggleModal = () => {
    setShowModal(!showModal);
    setQuestion("")
    setAnswer("")
  };

  const handleAddFAQ = () => {
    if (question && answer) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion('');
      setAnswer('');
      setShowModal(false);
      console.log(question,'===================step--three');
      console.log(answer,'===================step--three');
    }
  };
 
  return (
    <>



      <h4 className="font-20 px-lg-0 px-2 blackcolor cocon mb-3">Description</h4>
      <div className='stepThree px-lg-3 pt-4 pb-4  rounded-3' style={{ backgroundColor: ' #F5F5FF' }}>
        <div className="container-fluid">
          <div className="row">
            <p className="font-18 fw-medium blackcolor poppins">Briefly Describe your gig</p>
            <div className="col-12">

              <div className="text-editor pippins">
                <ReactQuill
                  theme="snow"
                  value={text}
                  onChange={handleChange}
                  placeholder="Start typing here..."
                  modules={{
                    toolbar: [
                      // [{ 'header': [1, 2, 3, 4, false] }],
                      ['bold', 'italic', 'underline', 'strike', { 'background': [] }], // Change 'hilight' to 'background'
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      // ['clean']
                    ],
                  }}
                />
              </div>
              <p className='takegraycolor text-end mt-2 font-14'>{stripHTMLTags(text).length} / 2000 max</p>
            </div>
            <div className="col-12">
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <p className="font-18 fw-medium blackcolor poppins">Frequently Asked Questions</p>

                </div>
                <div>
                  <div>
                    {/* Button trigger modal */}
                    <button type='button' className="font-12 poppins colororing border-0" onClick={toggleModal} style={{ backgroundColor: 'transparent' }}><AiOutlinePlus size={20} />Add FAQ</button>


                  </div>

                </div>
              </div>
              <Modal className='poppins' isOpen={showModal} toggle={toggleModal}>
                <ModalHeader>Add Question/Answer</ModalHeader>
                <div className='AddFaqs-step-three'>

                  <ModalBody>
                    <div className="form-group">
                      <label>Question:</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Answer:</label>
                      <textarea
                        className="form-control mt-2" maxLength={200}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
                      <p className="text-secondary font-14 text-end">{answer.length}/200</p>
                    </div>
                  </ModalBody>
                  <ModalFooter className='border-0'>
                    <Button className='btn-stepper poppins px-3 me-2  font-16' onClick={toggleModal}>
                      Cancel
                    </Button>
                    <Button className='btn-stepper poppins px-3   font-16' onClick={handleAddFAQ}>
                      Save FAQ's
                    </Button>
                  </ModalFooter>
                </div>
              </Modal>


              <div style={{ borderTop: '1px solid #667085' }}>
                <p className="font-18 fw-medium blackcolor poppins mt-3">Add Questions and Answers for you buyers</p>

                <button type='button' className="font-12 poppins colororing border-0" onClick={toggleModal} style={{ backgroundColor: 'transparent' }}><AiOutlinePlus size={20} />Add FAQ</button>

                {/* <div className="modal fade" id="staticBackdropTwo" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropTwoLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropTwoLabel">Add Questions and Answers for you buyers</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <div className="mb-3 mt-4">
                          <input type="text" className="form-control" placeholder="Enter FAQ's" />
                        </div>
                        <div className='text-end'>
                          <Button className='btn-stepper poppins px-3  font-16'>
                            Save FAQ's
                          </Button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div> */}
              </div>
              <>
                {faqs.map((faq, index) => (
                  <Accordion className='poppins mt-2' key={index}>
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1a-content"
                      id={faq.id}
                    >
                      <Typography> {faq.question}</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                      <p>
                        {faq.answer}
                      </p>
                    </AccordionDetails>

                  </Accordion>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
            {isErrorDescription &&
              <div className="alert alert-danger mt-3 poppins text-center" role="alert">
                {isErrorShowDescription}
              </div>
            }
    </>
  );
};

export default StepThree;
