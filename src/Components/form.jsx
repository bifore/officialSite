
function Form(){
    
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
                <form method="get">
                    <div class="mb-3">
                        <input type="text" class="form-control form-border form-bg py-2" id="recipient-name" required placeholder="Organization Name"></input>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control form-border form-bg py-2" id="recipient-name" required placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control form-border form-bg py-2" id="recipient-name" required placeholder="Subject"/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control form-border form-bg py-2" id="message-text" rows="6" required placeholder="Message..."></textarea>
                    </div>

                    <div class="text-end">
                        <button type="button" class="btn btn-secondary form-btn" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary m-1 form-btn"><i class="bi bi-check2-circle"></i> Send</button>
                    </div>
                </form>
            </div>
           
            </div>
        </div>

        </div>
        </div>
    )
}

export default Form