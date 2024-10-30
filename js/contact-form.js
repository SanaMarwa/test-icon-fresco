document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        // Use this to refer to the specific form being submitted
        const name = this.querySelector("#fullName").value.trim();
        const email = this.querySelector("#email").value.trim();
        const phoneNo = this.querySelector("#phoneNo").value.trim();
        // const location = this.querySelector("#location").value.trim();
        const message = this.querySelector("#message").value.trim();

        // Validation patterns
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        // const locationRegex = /^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$/; // Regex to match "City, State"

        const checkboxes = this.querySelectorAll('input[name="profession[]"]');
        const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!atLeastOneChecked) {
            Swal.fire({
                title: "Error!",
                text: "Please select at least one profession.",
                icon: "error",
            });
            return;
        }
        // Validate fields
        // if (name === "" || email === "" || phoneNo === "" || location === "") {

        if (name === "" || email === "" || phoneNo === "") {
            Swal.fire({
                title: "Error!",
                text: "All fields are required.",
                icon: "error",
            });
            return;
        }
        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Error!",
                text: "Please enter a valid email address.",
                icon: "error",
            });
            return;
        }
        if (!phoneRegex.test(phoneNo)) {
            Swal.fire({
                title: "Error!",
                text: "Please enter a valid 10-digit phone number.",
                icon: "error",
            });
            return;
        }
        // if (!locationRegex.test(location)) {
        //     Swal.fire({
        //         title: "Error!",
        //         text: "Please enter a valid City, State format.",
        //         icon: "error",
        //     });
        //     return;
        // }


        // Show loading message
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we process your request.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const formData = new FormData(this);

        fetch("submit.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === "success") {
                    Swal.fire({
                        title: "Form Submitted!",
                        text: "Thank you for reaching out to us.",
                        icon: "success",
                        confirmButtonText: "OK",
                    })
                    // Reset the form fields after successful submission
                    this.reset();
                } else {
                    console.error("Error:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Please check and submit again.",
                        icon: "error",
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue submitting the form. Please try again later.",
                    icon: "error",
                });
            });
        return false;
    });

