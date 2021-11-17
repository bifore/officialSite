import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

export default function Form(){

    const sendEmail = async(e)=> {
        e.preventDefault()
    
        emailjs.sendForm('service_3u89am8', 'template_zmtt99p', e.target, 'user_8juAMhmRuSGP7oiauBwNx')
          .then((result) => {
              swal("Mail Sent Successfully!","", "success");             
              console.log(result.text)
          }, (error) => {
              swal ( "Oops" ,  "Something went wrong!" ,  "error" )
              console.log(error.text)
          })
          e.target.reset()

        }
        
    
    return(
        <div className="">
        {/* Modal */}

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content form-border">
            <div class="modal-header">
                <h4 class="modal-title" id="staticBackdropLabel">Get a Proposal</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form onSubmit={sendEmail} id="myform">
                    <div class="mb-3">
                        <input type="text" name="org_name" class="form-control form-border form-bg py-2"  required placeholder="Organization Name"></input>
                    </div>
                    <div class="mb-3">
                        <input type="email" name="user_email" class="form-control form-border form-bg py-2" required placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" name="subject" class="form-control form-border form-bg py-2" required placeholder="Subject"/>
                    </div>
                    <div class="mb-3">
                        <textarea name="message" class="form-control form-border form-bg py-2"  rows="6" required placeholder="Message..."></textarea>
                    </div>

                    <div class="text-end">
                        <button type="button" class="btn btn-secondary form-btn" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary m-1 form-btn"  >Send</button>
                    </div>
                </form>
            </div>
           
            </div>
        </div>

        </div>
        </div>
    )
    }
    // <i class="bi bi-check2-circle"></i>