import React, { useState } from 'react';
import './HomePage.css';
import image1 from '../../assets/cosmo.jpg';
import image2 from '../../assets/sandtimer.jpg';
import image3 from '../../assets/Eclipse.jpg';
import image4 from '../../assets/astronaut.jpg';
import image5 from '../../assets/earth.jpg';
import './responsive-mobile.css';
import './responsive-tablet.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.js';


  function Home() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      captchaValue: null,
      privacyPolicyAgreed: false,
    });

 const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

    const validateForm = () => {
      const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    if (!formData.privacyPolicyAgreed) {
      errors.privacyPolicyAgreed = 'You must agree to the privacy policy';
    }
  
    return errors;
  };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      const errors = validateForm();
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        setIsSubmitting(true);
        // TODO: Implement form submission logic
        // For now, just simulate a successful submission:
        setTimeout(() => {
          setMessageSent(true);
          setIsSubmitting(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
            captchaValue: null,
             privacyPolicyAgreed: false,
          });
        }, 2000);
      }
    };
  
  return (
    <>
      <Header />
      <div className="style-elem-1">
  <div className="home-elem-19">
        <div className="home-elem-20">
      <div className="home-elem-21">
        <span className="home-elem-22">
            Embark on a Stellar Cosmic Journey With the Space Exploration
            Dashboard
        </span>
        <div className="home-elem-23">
          <span className="home-elem-25">
            Unlock the Universe, Start Today
            </span>
        </div>
      </div>
      <div className="container home-elem-26"> </div>
    </div>
  </div>
  <div className="home-elem-27">
    <div className="home-elem-28">
      <div className="home-elem-29">
        <span className="home-elem-30">
          Real Time Space Mission Updates for You
        </span>
        <span className="home-elem-31">
          Stay Ahead with Upcoming Celestial Events
        </span>
      </div>
      <div className="home-elem-32">
        <div className="home-elem-33">
          <span className="home-elem-34">
            Key Dates, Countdowns, and event Reminders
          </span>
          <div className="home-elem-35">
            <div className="home-elem-36">
              <div className="home-elem-37">
                <span className="home-elem-38">
                  01. Customized Space Exploration Experience
                </span>
                <span className="home-elem-39">
                    Space Exploration Dashboard provides a highly customized
                    space exploration experience. Choose your areas of interest,
                    and follow exciting missions. Making space information
                    accessible and enjoyable for all, whether you're a seasoned
                    astronomer or an enthusiastic student.
                </span>
              </div>
            </div>
            <div className="home-elem-40">
              <div className="home-elem-41">
                <span className="home-elem-42">
                  02. Advanced Search and Filter Capabilities
                </span>
                <span className="home-elem-43">
                    Looking for a specific mission or an upcoming celestial
                    event? The Space Exploration Dashboard has you covered with
                    its sophisticated search and filter capabilities. Sort by
                    dates, mission types, celestial bodies and many other
                    parameters to find exactly what you're looking for.
                </span>
              </div>
            </div>
            <div className="home-elem-44">
              <div className="home-elem-45">
                <span className="home-elem-46">
                  03. Live Space Weather Monitoring
                </span>
                <span className="home-elem-47">
                    With the Space Exploration Dashboard, keep tabs on space
                    weather conditions that can impact satellite communications.
                    View real-time data, alerts and predictions to stay informed
                    and prepared. The platform is your one-stop source for all
                    space weather-related updates.
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="home-elem-48">
          <img src={image2} alt="Cosmo Image" />
        </span>
      </div>
    </div>
    <div className="home-elem-75">
      <span className="home-elem-49">
          The Space Exploration Dashboard brings Alerts for Space Weather
          Conditions
      </span>
      <span className="home-elem-74">
          The Space Exploration Dashboard provides timely alerts on space
          weather conditions impacting mission operations, communications, and
          other crucial aspects. It offers both short-term and long-term
          predictions, critical for preparations and anticipatory actions. It’s
          the essential utility for everyone from mission operators to amateur
          astronomers.
      </span>
      <div className="home-elem-73">
        <div className="home-elem-57">
          <div className="home-elem-56">
            <span className="home-elem-55">
              04. Dynamic and Personalized Dashboard
            </span>
            <span className="home-elem-54">
                The Space Exploration Dashboard's Weather Monitoring feature
                alerts users to conditions in space that could impact satellite
                communications. Real-time information such as solar flares,
                coronal mass ejections (CMEs), and geomagnetic storms are
                reported, along with short and long-term predictions. This is
                invaluable info for mission operators, astronomers, and other
                users needing to stay aware of space weather.{" "}
            </span>
          </div>
          <div className="home-elem-52">
            <span className="home-elem-50">
              <p>1</p>
            </span>
            <div className="home-elem-58"> </div>
          </div>
          <div className="home-elem-77">
            <span className="home-elem-74">
              <img src={image3} alt="Eclipse" />
            </span>
          </div>
        </div>
        <div className="home-elem-65">
          <div className="home-elem-61">
            <span className="home-elem-53">
              <img src={image4} alt="Astronaut" /> 
            </span>
          </div>
          <div className="home-elem-60">
            <span className="home-elem-59">
              <p>2</p>
            </span>
            <div className="home-elem-58"> </div>
          </div>
          <div className="home-elem-64">
            <span className="home-elem-63">
              05. Detailed Information on Ongoing Missions
            </span>
            <span className="home-elem-62">
                The Space Exploration Dashboard's dynamic dashboard is fully
                customizable to match your specific preferences. Follow
                missions, mark events, receive space weather updates and more,
                all from a single dashboard. Our goal is to make space
                exploration accessible and enjoyable for all, while providing
                students, enthusiasts, and professionals with a unified,
                convenient platform for all their space exploration needs.
            </span>
          </div>
        </div>
        <div className="home-elem-72">
          <div className="home-elem-68">
            <span className="home-elem-66">
              06. Reminders and Countdown for Upcoming Events
            </span>
            <span className="home-elem-67">
                The Space Exploration Dashboard notifies users about upcoming
                celestial events and includes a countdown timer for each event.
                This feature not only helps users organize their viewing
                schedules but also enhances the anticipation and excitement for
                these spectacular celestial happenings. With the Space
                Exploration Dashboard , you won't miss any major celestial
                events!
            </span>
          </div>
          <div className="home-elem-71">
            <span className="home-elem-69">
              3
            </span>
            <div className="home-elem-70"> </div>
          </div>
          <div className="home-elem-79">
            <span className="home-elem-78">
              <img src={image5} alt="earth" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="home-elem-132">
      <div className="home-elem-133">
        <div className="home-elem-140">
          <span className="home-elem-134">
            About US
          </span>
          <span className="home-elem-135">
            Your Gateway to the Cosmos
          </span>
        </div>
        <span className="home-elem-136">
          <img src={image1} alt="Description 1" />
        </span>
      </div>
      <div className="home-elem-138">
        <span className="home-elem-137">
            The Space Exploration Dashboard is committed to making space
            exploration information easily accessible to everyone, with a
            special focus on creating an engaging, personalized, and
            user-friendly platform for enthusiasts, students, and professionals.
        </span>
        <span className="home-elem-139">
            The Space Exploration Dashboard is built for anyone who shares a
            love for space and exploration. We provide real-time updates on
            ongoing missions, upcoming celestial events, and critical
            information on space weather conditions. Our platform is not just a
            source of information; it's a space-based community where
            enthusiasts, students, and professionals can connect, engage, and
            share. With us, you don't just explore space; you live it. Customize
            your exploration experience, track missions, mark events, set
            reminders, and keep tabs on weather conditions that could impact
            satellite based communication. Initiate your cosmic journey and
            become a part of the Space Exploration Dashboard community. Embark
            on a stellar adventure with us.
        </span>
      </div>
      </div>
        </div> 
      </div>

      <div className="home-elem-80">
        <div className="home-elem-81">
          <span className="home-elem-82">
            Reach The Stars With Us
          </span>
          <form onSubmit={handleSubmit}>
          <span className="cd-paragraph-clean home-elem-83">
                    Contact us for further inquiries or assistance
          </span>
        
            <div className="home-elem-84">
              <span className="cd-paragraph-clean home-elem-85">First name*</span>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="home-elem-86"
                value={formData.firstName}
                onChange={handleChange}
              />
               {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
            <div className="home-elem-93">
              <span className="cd-paragraph-clean home-elem-91">Last name*</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="home-elem-92"
                value={formData.lastName}
                onChange={handleChange}
              />
               {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
            <div className="home-elem-89">
              <span className="cd-paragraph-clean home-elem-87">Email*</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="home-elem-88"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>

            {/* Phone Number */}
            <div className="home-elem-96">
              <span className="cd-paragraph-clean home-elem-94">Phone number</span>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+1 (555) 000-0000"
                className="home-elem-95"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="home-elem-98">
              <span className="cd-paragraph-clean home-elem-97">Message*</span>
              <textarea
                name="message"
                placeholder="Message"
                className="home-elem-99"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
            {/* Privacy Policy Checkbox */}
            <div className="home-elem-101">
              <input 
                type="checkbox" 
                name="privacyPolicyAgreed"
                checked={formData.privacyPolicyAgreed}
                onChange={handleChange}
                className="home-elem-100" 
              />
              <span className="cd-paragraph-clean home-elem-102">
                You agree to our friendly&nbsp;
                <a href="/privacy-policy.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}>
                  privacy policy
                </a>.
              </span>
              {formErrors.privacyPolicyAgreed && <div className="error">{formErrors.privacyPolicyAgreed}</div>}
            </div>

            <button type="submit" className="home-elem-103" disabled={isSubmitting}>
              Send message
            </button>
            {messageSent && <div>Your message has been sent!</div>}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
