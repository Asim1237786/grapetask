import React from 'react'
import banda from '../../assets/greenboxman.png'
import Navbar from '../../components/Navbar'
import '../../style/Startedjob.css'
import { TbDiscountCheckFilled } from 'react-icons/tb'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Accept = () => {
    const navigate = useNavigate();

    return (
        <>

            <Navbar FirstNav='none' />
            <div className="container-fluid pt-5 p-5">
                <div className="row justify-content-center">
                    <h6 className='font-30 byerLine font-500 cocon'>Job Detail</h6>
                    <div className="col-lg-8 col-12">
                        <div className='mt-4 appeptjob  p-4'>
                            <div className='appept p-4 runded-3'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-12 font-18 font-600 poppins'>
                                        <p className='mb-0'>Status</p>
                                        <p className='mb-0 mt-4'>Contract Title</p>
                                        <p className='mb-0 mt-4'>Related Job Opening</p>
                                        <p className='mb-0 mt-4'>Job Category</p>
                                        <p className='mb-0 mt-4'>Offer Expires</p>
                                        <p className='mb-0 mt-4'>Offer Date</p>
                                        <p className='mb-0 mt-4'>Timeline</p>
                                        <p className='mb-0 mt-4'>Manual Time <br />Allowed </p>

                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12 font-18 poppins'>
                                        <p className='colororing mb-0'>Pending - expires on June 30, 2023</p>
                                        <p className='mb-0 mt-4'>UX/UI Designer</p>
                                        <p href="" className='text-decoration-underline colororing mt-4'>UX/UI Designer</p>
                                        <p className='mt-2 mb-0 mt-4'>Mobile App Design</p>
                                        <p className='mb-0 mt-4'>June 30,2023</p>
                                        <p className='mb-0 mt-4'>June 30,2023</p>
                                        <p className='mb-0 mt-4'>From today - 12.05.2023</p>
                                        <p className='mb-0 mt-4'>Yes</p>
                                    </div>
                                    <hr className='mt-3' />
                                    <div className='col-lg-4 col-md-6 col-12'>
                                        <p className='font-18 font-600 poppins'>Salary </p>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <p className='font-18 poppins'> $3000</p>
                                    </div>
                                    <hr className='mt-3' />
                                    <div className='col-lg-4 col-md-6 col-12 font-18 font-600 poppins'>
                                        <p>Work Description</p>
                                    </div>
                                    <div className='col-lg-8 col-12 font-18 poppins'>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-4">
                        <Button onClick={()=> navigate('/complete')}  className='btn-stepper poppins px-3 w-100  font-16'> Accept Job Offer </Button>
                        <Button className='btn-stepper-border poppins px-3 w-100 mt-3 font-16'> Message </Button>
                        <Button className='btn-stepper-border poppins px-3 w-100 mt-3  font-16'> Original Proposal </Button>
                        <div className="appeptjob mt-5 p-4">
                            <div className='d-flex'>
                                <img src={banda} className='w-25' alt="" />
                                <div className='align-self-center ms-3'>
                                    <p className='font-16 font-500 poppins mb-0'>Tommy Ondricka</p>
                                    <p className='font-16 poppins'>Gusikowsk.</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h6 className='font-16 font-500 poppins'>About the client</h6>
                                <p className='font-16 poppins textearning'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p className='font-16 poppins'><TbDiscountCheckFilled className='colororing' size={28} /> Payment method verified</p>
                                <div className='d-flex justify-content-center'>
                                <Button  className='btn-stepper poppins px-3 w-auto font-16'> View Profile </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Accept