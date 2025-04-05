import React from 'react';
import './terms.css';
/* eslint-disable arrow-body-style */

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Privacy Policy</h1>
      </div>
      <div className="terms-content">
        <section className="section">
          <h2>1. What Data We Get</h2>
          <p>
            We collect certain data from you directly, like information you
            enter yourself, data about your consumption of content, and data
            from third-party platforms you connect with Sarafrika. We also
            collect some data automatically, like information about your device
            and what parts of our Services you interact with or spend time
            using.
          </p>

          <div className="subsection">
            <h3>1.1. Data You Provide to Us</h3>
            <p>
              We may collect different data from or about you depending on how
              you use the Services. Below are some examples to help you better
              understand the data we collect. When you create an account and use
              the Services, including through a third-party platform, we collect
              any data you provide directly, including:
            </p>

            <div className="data-point">
              <h4>a) Account Data</h4>
              <p>
                In order to use certain features (like accessing content), you
                need to create a user account which requires us to collect and
                store your email address, password, and account settings. To
                create an instructor account, we collect and store your name,
                email address, password, and account settings. As you use
                certain features on the site, you may be prompted to submit
                additional information including occupation, government ID
                information, verification photo, date of birth, race/ethnicity,
                skill interests, and phone number. Upon account creation, we
                assign you a unique identifying number.
              </p>
            </div>

            <div className="data-point">
              <h4>b) Profile Data</h4>
              <p>
                You can also choose to provide profile information like a photo,
                headline, biography, language, website link, social media
                profiles, country, or other data. Your Profile Data will be
                publicly viewable by others.
              </p>
            </div>

            <div className="data-point">
              <h4>c) Shared Content</h4>
              <p>
                Parts of the Services let you interact with other users or share
                content publicly, including by posting reviews about content,
                asking or answering questions, sending messages to students or
                instructors, or posting photos or other work you upload. Such
                shared content may be publicly viewable by others depending on
                where it is posted.
              </p>
            </div>
            <div className="data-point">
              <h4>d) Educational Content Data</h4>
              <p>
                When you access content, we collect certain data including which
                courses, assignments, labs, workspaces, and quizzes you&apos;ve
                started and completed; content purchases and credits;
                subscriptions; completion certificates; your exchanges with
                instructors, teaching assistants, and other students; and
                essays, answers to questions, and other items submitted to
                satisfy course and related content requirements. If you are an
                instructor, we store your educational content which may contain
                data about you.
              </p>
            </div>
            <div className="data-point">
              <h4>e) Student Payment Data</h4>
              <p>
                If you make purchases, we collect certain data about your
                purchase (such as your name, billing address, and ZIP code) as
                necessary to process your 1 order and which may optionally be
                saved to process future orders. You must provide certain payment
                and billing data directly to our payment service providers,
                including your name, credit card information, MPESA, billing
                address, and ZIP code. We may also receive limited information,
                like the fact that you have a new card and the last four digits
                of that card, from payment service providers to facilitate
                payments. For security, Sarafrika does not collect or store
                sensitive cardholder data, such as full credit card numbers or
                card authentication data.
              </p>
            </div>
            <div className="data-point">
              <h4>f) Instructor Payment Data</h4>
              <p>
                If you are an instructor, you can link your PayPal, Payoneer, or
                other payment account to the Services to receive payments. When
                you link a payment account, we collect and use certain
                information, including your payment account email address,
                account ID, physical address, or other data necessary for us to
                send payments to your account. In some instances, we may collect
                ACH or wire information to send payments to your account. In
                order to comply with applicable laws, we also work with trusted
                third parties who collect tax information as legally required.
                This tax information may include residency information, tax
                identification numbers, biographical information, and other
                personal information necessary for taxation purposes. For
                security, Sarafrika does not collect or store sensitive bank
                account information. The collection, use, and disclosure of your
                payment, billing, and taxation data is subject to the privacy
                policy and other terms of your payment account provider.
              </p>
            </div>
            <div className="data-point">
              <h4>g) Data About Your Accounts on Other Services</h4>
              <p>
                We may obtain certain information through your social media or
                other online accounts if they are connected to your Sarafrika
                account. If you login to Sarafrika via Facebook, Google or
                another third-party platform or service, we ask for your
                permission to access certain information about that other
                account. For example, depending on the platform or service we
                may collect your name, profile picture, account ID number, login
                email address, location, physical location of your access
                devices, gender, birthday, and list of friends or contacts.Those
                platforms and services make information available to us through
                their APIs. The information we receive depends on what
                information you (via your privacy settings) or the platform or
                service decide to give us. If you access or use our Services
                through a third-party platform or service, or click on any third
                party links, the collection, use, and sharing of your data will
                also be subject to the privacy policies and other agreements of
                that third party.
              </p>
            </div>
            <div className="data-point">
              <h4>h) Sweepstakes, Promotions, and Surveys</h4>
              <p>
                We may invite you to complete a survey or participate in a
                promotion (like a contest, sweepstakes, or challenge), either
                through the Services or a third-party platform. If you
                participate, we will collect and store the data you provide as
                part of participating, such as your name, email address, postal
                address, date of birth, or phone number. That data is subject to
                this Privacy Policy unless otherwise stated in the official
                rules of the promotion or in another privacy policy. The data
                collected will be used to administer the promotion or survey,
                including for notifying winners and distributing rewards. To
                receive a reward, you may be required to allow us to post some
                of your 2 information publicly (like on a winner&apos;s page).
                Where we use a third-party platform to administer a survey or
                promotion, the third party&apos;s privacy policy will apply.
              </p>
            </div>
            <div className="data-point">
              <h4>i) Communications and Support</h4>
              <p>
                If you contact us for support or to report a problem or concern
                (regardless of whether you have created an account), we collect
                and store your contact information, messages, and other data
                about you like your name, email address, messages, location,
                Sarafrika user ID, refund transaction IDs, and any other data
                you provide or that we collect through automated means (which we
                cover below). We use this data to respond to you and research
                your question or concern, in accordance with this Privacy
                Policy.
              </p>
            </div>
            <div className="data-point">
              <p>
                The data listed above is stored by us and associated with your
                account.
              </p>
            </div>

            {/* More data points would continue here */}
          </div>

          <div className="subsection">
            <h3>1.2. Data We Collect through Automated Means</h3>
            <p>
              When you access the Services (including browsing content), we
              collect certain data by automated means, including:
            </p>
            <div className="data-point">
              <h4>a) System Data</h4>
              <p>
                Technical data about your computer or device, like your IP
                address, device type, operating system type and version, unique
                device identifiers, browser, browser language, domain and other
                systems data, and platform types.
              </p>
            </div>
            <div className="data-point">
              <h4>b) Usage Data</h4>
              <p>
                Usage statistics about your interactions with the Services,
                including content accessed, time spent on pages or the Service,
                pages visited, features used, your search queries, click data,
                date and time, referrer, and other data regarding your use of
                the Services.
              </p>
            </div>
            <div className="data-point">
              <h4>c) Approximate Geographic Data</h4>
              <p>
                An approximate geographic location, including information like
                country, city, and geographic coordinates, calculated based on
                your IP address.
              </p>
            </div>
            <div className="data-point">
              <p>
                The data listed above is collected through the use of server log
                files and tracking technologies, as detailed in the
                &quot;Cookies and Data Collection Tools&quot; section below. It
                is stored by us and associated with your account.
              </p>
            </div>
          </div>
          <div className="subsection">
            <h3>1.3. Data From Third Parties</h3>
            <p>
              If you are a Sarafrika Content Creator, Course Administrator or
              corporate prospect, in addition to information you submit to us,
              we may collect certain business contact information from third
              party commercial sources.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>2. How We Get Data About You</h2>
          <p>
            We use tools like cookies, web beacons, and similar tracking
            technologies to gather the data listed above. Some of these tools
            offer you the ability to opt out of data collection.
          </p>

          <div className="subsection">
            <h3>2.1. Cookies and Data Collection Tools</h3>
            <p>
              We use cookies, which are small text files stored by your browser,
              to collect, store, and share data about your activities across
              websites, including on Sarafrika. They allow us to remember things
              about your visits to Sarafrika, like your preferred language, and
              to make the site easier to use. To learn more about cookies, visit
              https://cookiepedia.co.uk/all-about-cookies. We may also use clear
              pixels in emails to track deliverability and open rates.
            </p>
            <p>
              Sarafrika and service providers acting on our behalf (like Google
              Analytics and third-party advertisers) use server log files and
              automated data collection tools like cookies, tags, scripts,
              customised links, device or browser fingerprints, and web beacons
              (together, &quot;Data Collection Tools&quot;) when you access and
              use the Services. These Data Collection Tools automatically track
              and collect certain System Data and Usage Data (as detailed in
              Section 1) when you use the Services. In some cases, we tie data
              gathered through those Data Collection Tools to other data that we
              collect as described in this Privacy Policy.
            </p>
          </div>
          <div className="subsection">
            <h3>2.2. Why We Use Data Collection Tools</h3>
            <p>
              Sarafrika uses the following types of Data Collection Tools for
              the purposes described:
            </p>
            <div className="data-point">
              <h4>a) Strictly Necessary:</h4>
              <p>
                These Data Collection Tools enable you to access the site,
                provide basic functionality (like logging in or accessing
                content), secure the site, protect against fraudulent logins,
                and detect and prevent abuse or unauthorised use of your
                account. These are required for the Services to work properly,
                so if you disable them, parts of the site will break or be
                unavailable.
              </p>
            </div>
            <div className="data-point">
              <h4>b) Functional:</h4>
              <p>
                These Data Collection Tools remember data about your browser and
                your preferences, provide additional site functionality,
                customise content to be more relevant to you, and remember
                settings affecting the appearance and behaviour of the Services
                (like your preferred language or volume level for video
                playback).
              </p>
            </div>
            <div className="data-point">
              <h4>c) Performance:</h4>
              <p>
                These Data Collection Tools help measure and improve the
                Services by providing usage and performance data, visit counts,
                traffic sources, or where an application was downloaded from.
                These tools can help us test different versions of 4 Sarafrika
                to see which features or content users prefer and determine
                which email messages are opened.
              </p>
            </div>
            <div className="data-point">
              <h4>d) Advertising:</h4>
              <p>
                These Data Collection Tools are used to deliver relevant ads (on
                the site and/ or other sites) based on things we know about you
                like your Usage and System Data (as detailed in Section 1), and
                things that the ad service providers know about you based on
                their tracking data. The ads can be based on your recent
                activity or activity over time and across other sites and
                services. To help deliver tailored advertising, we may provide
                these service providers with a hashed, anonymised version of
                your email address (in a non human-readable form) and content
                that you share publicly on the Services.
              </p>
            </div>
            <div className="data-point">
              <h4>e) Social Media:</h4>
              <p>
                These Data Collection Tools enable social media functionality,
                like sharing content with friends and networks. These cookies
                may track a user or device across other sites and build a
                profile of user interests for targeted advertising purposes.
              </p>
            </div>
            <div className="data-point">
              <p>
                You can set your web browser to alert you about attempts to
                place cookies on your computer, limit the types of cookies you
                allow, or refuse cookies altogether. If you do, you may not be
                able to use some or all features of the Services, and your
                experience may be different or less functional. To learn more
                about managing Data Collection Tools, refer to Section 6.1 (Your
                Choices About the Use of Your Data) below.
              </p>
            </div>
          </div>

          {/* Additional sections would continue here */}
        </section>
        <section className="section">
          <h2>3. What We Use Your Data For</h2>
          <p>
            We use your data to do things like provide our Services, communicate
            with you, troubleshoot issues, secure against fraud and abuse,
            improve and update our Services, analyze how people use our
            Services, serve personalized advertising, and as required by law or
            necessary for safety and integrity. We retain your data for as long
            as it is needed to serve the purposes for which it was collected.
          </p>

          <div className="subsection">
            <p>
              We use the data we collect through your use of the Services to:
            </p>
          </div>
          <div className="data-point">
            <p>
              i) Provide and administer the Services, including to facilitate
              participation in educational content, issue completion
              certificates, display customized content, and facilitate
              communication with other users;
            </p>
          </div>
          <div className="data-point">
            <p>ii) Process payments to instructors and other third parties;</p>
          </div>
          <div className="data-point">
            <p>
              iii) Process your requests and orders for educational content,
              products, specific services, information, or features;
            </p>
          </div>
          <div className="data-point">
            <h4> iv)Communicate with you about your account by:</h4>
            <p> a) Responding to your questions and concerns;</p>
            <p>
              b) Sending you administrative messages and information, including
              messages from instructors, students, and teaching assistants;
              notifications about changes to our Service; and updates to our
              agreements;
            </p>
            <p>
              c) Sending you information, such as by email or text messages,
              about your progress in courses and related content, rewards
              programs, new services, new features, promotions, newsletters, and
              other available instructor-created content (which you can opt out
              of at any time);
            </p>
            <p>
              d) Sending push notifications to your wireless device to provide
              updates and other relevant messages (which you can manage from the
              &quot;options&quot; or &quot;settings&quot; page of the mobile
              app);
            </p>
          </div>
          <div className="data-point">
            <p>
              v) Manage your account and account preferences and personalize
              your experience;
            </p>
          </div>
          <div className="data-point">
            <p>
              vi) Facilitate the Services&apos; technical functioning, including
              troubleshooting and resolving issues, securing the Services, and
              preventing fraud and abuse;
            </p>
          </div>
          <div className="data-point">
            <p> vii) Verify the identity of instructors;</p>
          </div>
          <div className="data-point">
            <p> viii) Solicit feedback from users;</p>
          </div>
          <div className="data-point">
            <p> ix) Market products, services, surveys, and promotions;</p>
          </div>
          <div className="data-point">
            <p> x) Market Subscription Plans to prospective customers;</p>
          </div>
          <div className="data-point">
            <p>
              xi) Learn more about you by linking your data with additional data
              through third-party data providers and/or analyzing the data with
              the help of analytics service providers;
            </p>
          </div>
          <div className="data-point">
            <p> xii) Identify unique users across devices;</p>
          </div>
          <div className="data-point">
            <p> xiii) Tailor advertisements across devices;</p>
          </div>
          <div className="data-point">
            <p>
              xiv)Improve our Services and develop new products, services, and
              features;
            </p>
          </div>
          <div className="data-point">
            <p>
              xv)Analyze trends and traffic, track purchases, and track usage
              data;
            </p>
          </div>
          <div className="data-point">
            <p>
              xvi)Advertise the Services on third-party websites and
              applications;
            </p>
          </div>
          <div className="data-point">
            <p> xvii)As required or permitted by law; or</p>
          </div>
          <div className="data-point">
            <p>
              xviii) As we, in our sole discretion, otherwise determine to be
              necessary to ensure the safety or integrity of our users,
              employees, third parties, the public, or our Services.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>4. Who We Share Your Data With</h2>
          <p>
            We share certain data about you with instructors, other students,
            companies performing services for us, Sarafrika affiliates, our
            business partners, analytics and data enrichment providers, your
            social media providers, companies helping us run promotions and
            surveys, and advertising companies who help us promote our Services.
            We may also share your data as needed for security, legal
            compliance, or as part of a corporate restructuring. Lastly, we can
            share data in other ways if it is aggregated or de-identified or if
            we get your consent.
          </p>

          <div className="subsection">
            <p>
              We may share your data with third parties under the following
              circumstances or as otherwise described in this Privacy Policy:
            </p>
          </div>
          <div className="data-point">
            <p>
              i) With Your Instructors: We share data that we have about you
              (except your email address) with instructors or teaching
              assistants for educational content you access or request
              information about, so they can improve their content for you and
              other students. This data may include things like your city,
              country, browser language, operating system, device settings, the
              site that brought you to Sarafrika , and your activities on
              Sarafrika. If we collect additional data about you (like age or
              gender), we may share that too. We will not share your email
              address with instructors or teaching assistants.
            </p>
          </div>
          <div className="data-point">
            <p>
              ii) With Other Students and Instructors: Depending on your
              settings, your shared content and profile data may be publicly
              viewable, including to other students and instructors. If you ask
              a question to an instructor or teaching assistant, your
              information (including your name) may also be publicly viewable.
              Note that within, all chat rooms, message boards, news groups, or
              other public forums available to participants are publicly visible
              to other participants, so you shouldn’t post any confidential or
              proprietary information through those features.
            </p>
          </div>
          <div className="data-point">
            <p>
              iii) With Service Providers, Contractors, and Agents: We share
              your data with third-party companies who perform services on our
              behalf, like payment processing, fraud and abuse prevention, data
              analysis, marketing and advertising services (including retargeted
              advertising), email and hosting services, and customer services
              and support. These service providers may access your personal data
              and are required to use it solely as we direct, to provide our
              requested service.
            </p>
          </div>
          <div className="data-point">
            <p>
              iv) With Sarafrika Affiliates: We may share your data within our
              corporate family of companies that are related by common ownership
              or control to enable or support us in providing the Services
            </p>
          </div>
          <div className="data-point">
            <p>
              v) With Business Partners: We have agreements with other websites
              and platforms to distribute our Services and drive traffic to
              Sarafrika.
            </p>
          </div>
          <div className="data-point">
            <p>
              vi) With Credit-Granting Organisations for Continuing Education:
              If you take a course to fulfil a continuing professional education
              requirement, we may share that information upon request of the
              organisation granting the continuing education credit.
            </p>
          </div>
          <div className="data-point">
            <p>
              vii)With Analytics and Data Enrichment Services: As part of our
              use of third-party analytics tools like Google Analytics and data
              enrichment services like ZoomInfo, we share certain contact
              information, Account Data, System Data, Usage Data (as detailed in
              Section 1), or de-identified data as needed. De-identified data
              means data where we’ve removed things like your name and email
              address and replaced it with a token ID. This allows these
              providers to provide analytics services or match your data with
              publicly-available database information (including contact and
              social information from other sources). We do this to communicate
              with you in a more effective and customised manner
            </p>
          </div>
          <div className="data-point">
            <p>
              viii) To Power Social Media Features: The social media features in
              the Services (like the Facebook Like button) may allow the
              third-party social media provider to collect things like your IP
              address and 7 which page of the Services you’re visiting, and to
              set a cookie to enable the feature. Your interactions with these
              features are governed by the third-party company’s privacy policy
            </p>
          </div>
          <div className="data-point">
            <p>
              ix) To Administer Promotions and Surveys: We may share your data
              as necessary to administer, market, or sponsor promotions and
              surveys you choose to participate in, as required by applicable
              law (like to provide a winners list or make required filings), or
              in accordance with the rules of the promotion or survey
            </p>
          </div>
          <div className="data-point">
            <p>
              x) For Advertising: If we decide to use an advertising-supported
              revenue model in the future, we may use and share certain System
              Data and Usage Data with third-party advertisers and networks to
              show general demographic and preference information among our
              users. We may also allow advertisers to collect System Data
              through Data Collection Tools (as detailed in Section 2.1), to use
              this data to offer you targeted ad delivery to personalise your
              user experience (through behavioural advertising), and to
              undertake web analytics. Advertisers may also share with us the
              data they collect about you. To learn more or opt out from
              participating ad networks’ behavioural advertising, see Section
              6.1 (Your Choices About the Use of Your Data) below. Note that if
              you opt out, you’ll continue to be served generic ads.
            </p>
          </div>
          <div className="data-point">
            <h4>
              xi) For Security and Legal Compliance: We may disclose your data
              to third parties if we (in our sole discretion) have a good faith
              belief that the disclosure is:
            </h4>
            <p> a) Permitted or required by law;</p>
            <p>
              b) Requested as part of a judicial, governmental, or legal
              inquiry, order, or proceeding;
            </p>
            <p>
              c) Reasonably necessary as part of a valid subpoena, warrant, or
              other legally-valid request;
            </p>
            <p>
              d) Reasonably necessary to enforce our Terms of Use, Privacy
              Policy, and other legal agreements;
            </p>
            <p>
              e) Required to detect, prevent, or address fraud, abuse, misuse,
              potential violations of law (or rule or regulation), or security
              or technical issues; or
            </p>
            <p>
              e) Reasonably necessary in our discretion to protect against
              imminent harm to the rights, property, or safety of Sarafrika ,
              our users, employees, members of the public, or our Services.
            </p>
            <p>
              g) We may also disclose data about you to our auditors and legal
              advisors in order to assess our disclosure obligations and rights
              under this Privacy Policy.
            </p>
          </div>
          <div className="data-point">
            <p>
              xii) During a Change in Control: If Sarafrika undergoes a business
              transaction like a merger, acquisition, corporate divestiture, or
              dissolution (including bankruptcy), or a sale of all or some of
              its assets, we may share, disclose, or transfer all of your data
              to the successor organisation during such transition or in
              contemplation of a transition (including during due diligence).
            </p>
          </div>
          <div className="data-point">
            <p>
              xiii)After Aggregation/De-identification: We may disclose or use
              aggregated or de-identified data for any purpose.
            </p>
          </div>
          <div className="data-point">
            <p>
              xiv) With Your Permission: With your consent, we may share data to
              third parties outside the scope of this Privacy Policy.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>5. Security</h2>
          <p>
            We use appropriate security based on the type and sensitivity of
            data being stored. As with any internet enabled system, there is
            always a risk of unauthorised access, so it’s important to protect
            your password and to contact us if you suspect any unauthorised
            access to your account.
          </p>

          <div className="subsection">
            <p>
              Sarafrika takes appropriate security measures to protect against
              unauthorised access, alteration, disclosure, or destruction of
              your personal data that we collect and store. These measures vary
              based on the type and sensitivity of the data. Unfortunately,
              however, no system can be 100% secured, so we cannot guarantee
              that communications between you and Sarafrika , the Services, or
              any information provided to us in connection with the data we
              collect through the Services will be free from unauthorised access
              by third parties. Your password is an important part of our
              security system, and it is your responsibility to protect it. You
              should not share your password with any third party, and if you
              believe your password or account has been compromised, you should
              change it immediately and contact our Support Page with any
              concerns.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>6. Your Rights</h2>
          <div className="subsection">
            <h3>6.1 Your Choices About the Use of Your Data</h3>
            <p>
              i) You can choose not to provide certain data to us, but you may
              not be able to use certain features of the Services.
            </p>
            <p>
              ii)To stop receiving promotional communications from us, you can
              opt out by using the unsubscribe mechanism in the promotional
              communication you receive or by changing the email preference in
              your account. Note that regardless of your email preference
              settings, we will send you transactional and relationship messages
              regarding the Services, including administrative confirmations,
              order confirmations, important updates about the Services, and
              notices about our policies.
            </p>
            <p>
              iii) Apple iOS, Android OS, and Microsoft Windows each provide
              their own instructions on how to control in-app tailored
              advertising. For other devices and operating systems, you should
              review your privacy settings on that platform.
            </p>
          </div>
          <div className="data-point">
            <p>
              If you have any questions about your data, our use of it, or your
              rights, contact us at privacy@Sarafrika.com
            </p>
          </div>
          <div className="subsection">
            <h3>6.1 Your Choices About the Use of Your Data</h3>
            <p>
              i) You can choose not to provide certain data to us, but you may
              not be able to use certain features of the Services.
            </p>
            <p>
              ii)To stop receiving promotional communications from us, you can
              opt out by using the unsubscribe mechanism in the promotional
              communication you receive or by changing the email preference in
              your account. Note that regardless of your email preference
              settings, we will send you transactional and relationship messages
              regarding the Services, including administrative confirmations,
              order confirmations, important updates about the Services, and
              notices about our policies.
            </p>
            <p>
              iii) Apple iOS, Android OS, and Microsoft Windows each provide
              their own instructions on how to control in-app tailored
              advertising. For other devices and operating systems, you should
              review your privacy settings on that platform.
            </p>
          </div>
          <div className="subsection">
            <h3>6.2 Accessing, Updating, and Deleting Your Personal Data</h3>
            <p>
              You can access and update your personal data that Sarafrika
              collects and maintains as follows:
            </p>
            <p>
              i)To update data you provide directly, log into your account and
              update your account at any time
            </p>
            <div className="data-point">
              <h4> ii)To terminate your account:</h4>
              <p>
                a)If you are a student, visit your profile settings page and
                follow the steps detailed here.
              </p>
              <p>b)If you are an instructor, follow the steps detailed here.</p>
              <p>
                c)If you have any issues terminating your account, please
                contact our Support Page.
              </p>
              <p>
                d) Please note: even after your account is terminated, some or
                all of your data may still be visible to others, including
                without limitation any data that has been
                <li>
                  (a) copied, stored, or disseminated by other users (including
                  comments on content);
                </li>
                <li>
                  (b) shared or disseminated by you or others (including in your
                  shared content); or
                </li>
                <li>
                  (c) posted to a third-party platform. Even after your account
                  is terminated, we retain your data for as long as we have a
                  legitimate purpose to do so (and in accordance with applicable
                  law), including to assist with legal obligations, resolve
                  disputes, and enforce our agreements. We may retain and
                  disclose such data pursuant to this Privacy Policy after your
                  account has been terminated
                </li>
              </p>
            </div>
            <p>
              iii) To request to access, correct, or delete your personal data,
              please use our online form here You can also submit these requests
              by emailing privacy@Sarafrika.com or writing to us at Sarafrika ,
              Attn: Privacy/Legal Team, Citadel Building, Muthithi Road 6th
              Floor. Please allow up to 30 days for a response. For your
              protection, we may require that the request be sent through the
              email address associated with your account, and we may need to
              verify your identity before implementing your request. Please note
              that we retain certain data where we have a lawful basis to do so,
              including for mandatory record-keeping and to complete
              transactions.
            </p>
          </div>
        </section>

        {/* <div className="action-buttons">
          <button type="button" className="accept-btn">
            Accept Policy
          </button>
          <button type="button" className="decline-btn">
            Decline
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Terms;
