"use client"
import React from 'react'
import PersonalDetailsForm from './StepForms/PersonalDetailsForm'
import ShippingDetailsForm from './StepForms/ShippingDetailsForm'
import PaymentMethodForm from './StepForms/PaymentMethodForm'
import OderSummaryForm from './StepForms/OderSummaryForm'
import { useSelector } from 'react-redux'

export default function StepForm() {
    const currentStep = useSelector((store)=>store.checkout.currentStep)
    console.log(currentStep)
    function renderFormByStep(step){
        if(step===1){
            return <PersonalDetailsForm/>
        }else if(step===2){
            return <ShippingDetailsForm/>
        }else if(step===3){
            return <PaymentMethodForm/>
        }else if(step===4){
            return <OderSummaryForm/>
        }
    }
  return (
    <div>
      {renderFormByStep(currentStep)}
    </div>
  )
}
