import React from 'react'
import Layout from '@/src/layout/Layout'
import PageBanner from '@/src/components/PageBanner'
import DateTimePicker from '@/src/components/calender/DateTimePicker'
import ContactForm from '@/src/components/forms/ContactForm'

const ScheduleAppointment = () => {
  return (
    <div>
         <Layout>
      <PageBanner pageName={"Cloud Pro AI "} pageTitle ={"Schedule Your Free Consultation"}/>
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Schedule An Appointment </span>
                <h2>With our Expert Consultants </h2>
              </div>
              <DateTimePicker/>
              {/* <ContactForm /> */}
              </div></div></div>
      </section>
      </Layout>
    </div>
    
  )
}
  export default ScheduleAppointment