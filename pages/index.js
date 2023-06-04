import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import HomeCard from '@/components/HomeCard';
import emailjs from '@emailjs/browser';


export default function Home() {
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_lpvotxr', 'template_r98ns7q', e.target, 'mfkRcU_Qi3LuYFzKW').then(() => {
            window.alert("Message received!");
            window.location.reload();
        }).catch(e => {
            window.alert("Error sending message");
        });
    }

    return (
        <>
        <Head>
            <title>Connecting Researchers with Lab Space and Expertise | Lab2Client</title>
            <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* hero section */}
        <Hero/>

        {/* about us section */}
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="text-center mb-4">Trusted by hundreds of Institutions</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <HomeCard image="/labphoto1.jpeg" title="Find Available Labs" description="Easily search and discover labs that meet your specific research needs."/>
                            </div>
                            <div className="col-md-6">
                                <HomeCard image="/labphoto2.jpeg"  title="Offer Lab Space" description="Lab PIs can sign up and offer their lab space to other researchers, generating revenue."/>
                                <DownloadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* contact us section */}
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="text-center mb-4">
                            <h2 className="mb-2">Contact Us</h2>
                            <p className="text-muted">Have any questions or inquiries? Feel free to reach out to us.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <form onSubmit={e => handleSubmit(e)}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Your Name</label>
                                        <input type="text" name='name' className="form-control" id="name" placeholder="Enter your name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label name="email" className="form-label">Your Email</label>
                                        <input type="email" name='email' className="form-control" id="email"
                                            placeholder="Enter your email address"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message" className="form-label">Message</label>
                                        <textarea name='message' className="form-control" id="message" rows="4"
                                            placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}


const DownloadForm = () => {
  const handleDownload = () => {
    const formHtml = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Lab Registration Form - Page 1</title>
        <style>
            .form-container {
              width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 2px solid blue; /* Set the border color and width */
            }
            .container {
            width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            }
            .container p {
            font-size: 16px;
            line-height: 1.5;
            }
        </style>
        </head>
        <body>
        <div class="form-container"">
            <h2>Welcome to Lab2Client</h2>
            <p>Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities and expertise by breaking down geographical and institutional barriers. This platform connects researchers with available lab space and equipment, streamlining the entire process from start to finish.</p>
        </div>
        </body>
        </html>
    
        <!DOCTYPE html>
        <html>
        <head>
          <title>Lab Registration Form - Page 2</title>
          <style>
            .form-container {
              width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 2px solid  #3D898B;
            }
            .form-container table {
              width: 100%;
            }
            .form-container td {
              padding: 8px;
            }
            .form-container input[type="text"] {
              width: 100%;
              padding: 5px;
            }
            .form-container select {
              width: 100%;
              padding: 5px;
            }
            .form-container button {
              display: flex;
              background-color: #3D898B;
              border-radius: 8px;
              outline: none;
              border: 0;
              padding: 12px 16px;
              min-width: 150px;
              color: white;
              justify-content: center;
              align-items: center;
            }
          </style>
        </head>
        <body>
          <div class="form-container">
            <h2>Lab Registration Form</h2>
            <form>
              <table>
                <tr>
                  <td>IDENTIFICATION</td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td><input type="text" name="institution" required></td>
                </tr>
                <tr>
                  <td>Name*</td>
                  <td><input type="text" name="name" required></td>
                </tr>
                <tr>
                  <td>Research Facility</td>
                  <td><input type="text" name="research_facility" required></td>
                </tr>
                <tr>
                  <td>Civic Address of the Research Facility</td>
                </tr>
                <tr>
                  <td>Street Address*</td>
                  <td><input type="text" name="street_address" required></td>
                </tr>
                <tr>
                  <td>Building Name</td>
                  <td><input type="text" name="building_name"></td>
                </tr>
                <tr>
                  <td>City*</td>
                  <td><input type="text" name="city" required></td>
                </tr>
                <tr>
                  <td>Province*</td>
                  <td>
                    <select name="province" required>
                      <option value="">Select Province</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                      <option value="YT">Yukon</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Postal Code*</td>
                  <td><input type="text" name="postal_code" required></td>
                </tr>
              </table>
              <br>
              <button  className={styles.btn} type="submit" >Submit</button>
            </form>
          </div>
        </body>
        </html>
        

        
    
  
    `;


    const blob = new Blob([formHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form.html';
    link.click();
  };

  return (
    <div  >
      
    </div>
  );
};



