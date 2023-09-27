import classNames from 'classnames';

const PrivacyPolicy = () => {
  return (
    <>
      <main
        className={classNames(
          'bg-[#FFF] rounded-[10px] p-6 mt-[20px] py-[22px] px-[29px]',
          'shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] font-sans',
        )}
      >
        <header className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-center w-full">
          <h1 className="text-4xl font-bold">PRIVACY POLICY</h1>
          <h6 className="text-sm"> Last updated: September 10, 2023.</h6>
        </header>
        <p className="mb-4">
          This privacy notice for Chatfly ("Chatfly AI," "we," "us," or "our"),
          describes how and why we might collect, store, use, and/or share
          ("process") your information when you use our services ("Services"),
          such as when you:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-1">
            Visit our website at chatfly.co, or any website of ours that links
            to this privacy notice.
          </li>
          <li className="mb-1">
            Engage with us in other related ways, including any sales,
            marketing, or events.
          </li>
        </ul>
        <p className="mb-4">
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          contact@chatfly.co.
        </p>
        <h2 className="text-xl font-bold mb-2">SUMMARY OF KEY POINTS</h2>
        <p className="mb-4 italic">
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          contact@chatfly.co.
        </p>

        <p className="mb-4">
          <strong>1. What is the purpose of my data usage?</strong> ={'>'} We
          utilize your data to train the bot to deliver responses that align
          with your preferences. Rest assured, we will never sell your data.
        </p>
        <p className="mb-4">
          <strong>2. Does OpenAI utilize my data for model training?</strong> =
          {'>'} We do not engage in the training or fine-tuning of large
          language models (LLMs), and OpenAI has explicitly stated that it will
          not use data provided by customers through its API endpoints for the
          purpose of training or enhancing models.
        </p>
        <p className="mb-4">
          <strong>3. Do you send my data to third-parties?</strong> ={'>'} We
          use OpenAI's GPT-3.5 and GPT-4 language models. This means that text
          content within your uploads may, in unmarked chunks, be submitted to
          OpenAI as context when generating a response. We will never send your
          documents in its complete original form to any other organization,
          including OpenAI or its partners.To better explain the associated
          implications, we like to use the analogy of mixing bags of legos
          (chunks of documents) and sending only a mix of blocks to OpenAI at a
          time. In the right combination, your blocks will form your original
          document (like a lego castle). However, when sending to OpenAI, your
          blocks can come from different documents, and they are sent alongside
          thousands of blocks from other users. There is basically no way (and
          no material benefit) for OpenAI to attempt reconstructing your blocks
          and learn of your original documents' content. OpenAI has also
          explicitly stated that it will not use data submitted by customers via
          its API endpoints to train or improve models.
        </p>
        <p className="mb-4">
          <strong>4. Can you view the documents I upload?</strong> ={'>'} Our
          engineers have the capability to access the documents you upload. This
          access is for debugging and enhancing user experience purposes. Rest
          assured, all of our engineers are bound by strict non-disclosure
          agreements (NDAs), so your data will never be distributed in any way.
        </p>
        <p className="mb-4">
          <strong>5. Is my data end-to-end encrypted? </strong> ={'>'} Your data
          is not end-to-end encrypted when it's stored on our servers. This is
          because encrypting your data would prevent us from extracting any
          meaningful information from it, which would disable most of our
          features. This holds true for text analytics platforms in general,
          including OpenAI itself. Anyone claiming to offer end-to-end
          encryption while providing similar capabilities is not being truthful.
        </p>
        <p className="mb-4">
          <strong>
            6. How can you access, modify, or remove the data we collect from
            you?
          </strong>{' '}
          ={'>'} Depending on the laws in your country, you may have the right
          to request access to your personal information that we collect, make
          changes to it, or delete it. To request a review, update, or deletion
          of your personal information, please visit: contact@chatfly.ai.
        </p>

        <h2 className="text-xl font-bold mb-2">THE KEY INFORMATION</h2>
        <p className="mb-4 font-bold">1. Definitions</p>
        <p className="mb-2">
          <strong>API</strong> means Chatfly application programming interface
          to be integrated with the User’s software.
        </p>
        <p className="mb-2">
          <strong>Cookies</strong> are small files stored on your device.
        </p>
        <p className="mb-2">
          <strong>Device</strong> means a computer or a mobile device.
        </p>
        <p className="mb-2">
          <strong>Data Processors</strong> (or Service Providers) means any
          natural or legal person who processes the data on behalf of the Data
          Controller. We may use the services of various Service Providers in
          order to process your data more effectively.
        </p>
        <p className="mb-2">
          <strong>Data Subject </strong> is any living individual who is the
          subject of Personal Data.
        </p>
        <p className="mb-2">
          <strong>Personal Data</strong> means data about a living individual
          who can be identified from those data (or from those and other
          information either in our possession or likely to come into our
          possession).
        </p>
        <p className="mb-2">
          <strong>Service</strong> means together the Website, Widget and/or the
          API (depending on the scope dedicated to a given User).
        </p>
        <p className="mb-2">
          <strong>Usage Data</strong> is data collected automatically either
          generated by the use of Service or from Service infrastructure itself
          (for example, the duration of a page visit).
        </p>
        <p className="mb-2">
          <strong>User</strong> is the individual using our Service. User
          corresponds to the Data Subject, who is the subject of Personal Data.
        </p>
        <p className="mb-2">
          <strong>Website</strong> means web pages located at chatfly.co.
        </p>
        <p className="mb-2">
          <strong>Widget</strong> means a Chatbase widget that may be
          implemented to the User’s website.
        </p>
        <p className="mb-2">
          <strong>Data Controller</strong> means a natural or legal person who
          (either alone or jointly or in common with other persons) determines
          the purposes for which and the manner in which any personal data are,
          or are to be, processed. For the purpose of this Privacy Policy, we
          are a Data Controller of your data.
        </p>

        <p className="mb-4">
          <strong>2. Information Collection and Use</strong>
        </p>
        <p className="mb-4">
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <p className="mb-4 font-bold">3. The Data Controller</p>
        <p className="mb-4">
          The controller of your Personal Data is: Chatfly.co.
        </p>

        <p className="mb-4 font-bold">4. Types of Data Collected</p>
        <p className="mb-2 font-bold">Personal Data</p>
        <p className="mb-4">
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (“Personal Data”), including:
        </p>
        <ul className="list-none">
          <li className="mb-1">a. Email address.</li>
          <li className="mb-1">b. First name and last name.</li>
          <li className="mb-1">c. Cookies and Usage Data.</li>
        </ul>
        <p className="mb-2 font-bold">Usage Data</p>
        <p className="mb-4">
          We may also collect information that your browser sends whenever you
          visit our Service or when you access Service by or through a Device
          (“Usage Data”). This Usage Data may include information such as your
          computer's Internet Protocol address (e.g. IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique Device
          identifiers and other diagnostic data. When you access Service with a
          Device, this Usage Data may include information such as the type of
          Device you use, your Device unique ID, the IP address of your Device,
          your operating system, the type of Internet browser you use, unique
          Device identifiers and other diagnostic data.
        </p>

        <p className="mb-2 font-bold">Tracking Cookies Data</p>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track the activity
          on our Service and we hold certain information. Cookies are files with
          a small amount of data which may include an anonymous unique
          identifier. Cookies are sent to your browser from a website and stored
          on your Device. Other tracking technologies are also used such as
          beacons, tags and scripts to collect and track information and to
          improve and analyze our Service. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent.
          However, if you do not accept cookies, you may not be able to use some
          portions of our Service. Examples of Cookies we use:
        </p>
        <ul className="list-none">
          <li className="mb-1">
            a. Session Cookies: We use Session Cookies to operate our Service.
          </li>
          <li className="mb-1">
            b. Preference Cookies: We use Preference Cookies to remember your
            preferences and various settings.
          </li>
          <li className="mb-1">
            c. Security Cookies: We use Security Cookies for security purposes.
          </li>
          <li className="mb-1">
            c. Advertising Cookies: Advertising Cookies are used to serve you
            with advertisements that may be relevant to you and your interests.
          </li>
        </ul>

        <p className="mb-2 font-bold">5. Retention of Data</p>
        <p className="mb-4">
          We will retain your Personal Data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your Personal Data to the extent necessary to comply with our legal
          obligations (for example, if we are required to retain your data to
          comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies. Your Personal Data processed upon your
          consent will be stored for as long as the relevant consent is not
          withdrawn and until the expiration of claims resulting from the
          Service. We will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period,
          except when this data is used to strengthen the security or to improve
          the functionality of our Service, or we are legally obligated to
          retain this data for longer time periods.
        </p>

        <p className="mb-2 font-bold">6. Disclosure of Data</p>
        <p className="mb-4">We may disclose Personal Data you provide:</p>
        <ul className="list-none">
          <li className="mb-1">
            a. Under certain circumstances, if required to do so by law or in
            response to valid requests by public authorities.
          </li>
          <li className="mb-1">
            b. If we or our subsidiaries are involved in a merger, acquisition
            or asset sale.
          </li>
          <li className="mb-1">
            c. To our subsidiaries, affiliates, employees.
          </li>
          <li className="mb-1">
            d. To contractors, service providers, and other third parties we use
            to support our business.
          </li>
          <li className="mb-1">
            e. To fulfill the purpose for which you provide it.
          </li>
          <li className="mb-1">
            f. For the purpose of including your company’s logo on our Website.
          </li>
          <li className="mb-1">g. With your consent in any other cases.</li>
        </ul>
        <p className="mb-4">
          We do not sell or otherwise share your Personal Data, except as
          described in this Privacy Policy.
        </p>

        <p className="mb-2 font-bold">7. Security of Data</p>
        <p className="mb-4">
          The security of your data is important to us but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. We use appropriate administrative, technical
          and physical safeguards to protect the Personal Data you provide
          against accidental, unlawful or unauthorized destruction, loss,
          alteration, access, disclosure or use, e.g. we maintain backup copies
          and only authorized personnel may access the Personal Data.
        </p>

        <p className="mb-2 font-bold">8. Use of Data</p>
        <p className="mb-2">
          The security of your data is important to us but remember that no
          method of transmission over the Internet or method of electronic
          storage is 100% secure. We use appropriate administrative, technical
          and physical safeguards to protect the Personal Data you provide
          against accidental, unlawful or unauthorized destruction, loss,
          alteration, access, disclosure or use, e.g. we maintain backup copies
          and only authorized personnel may access the Personal Data.Chatfly.co
          uses the collected Personal Data for various purposes:
        </p>
        <ul className="list-none">
          <li className="mb-1">
            a. To provide and maintain our Service; type of Personal Data: email
            address, first name and last name, Cookies and Usage Data; necessity
            for the performance of a contract to which you are a party.
          </li>
          <li className="mb-1">
            b. To notify you about changes to our Service; type of Personal
            Data: email address, first name and last name, Cookies and Usage
            Data; necessity for the performance of a contract to which you are a
            party.
          </li>
          <li className="mb-1">
            c. To allow you to participate in interactive features of our
            Service when you choose to do so; type of Personal Data: email
            address, first name and last name, Cookies and Usage Data; necessity
            for the performance of a contract to which you are a party.
          </li>
          <li className="mb-1">
            d. To provide customer support; type of Personal Data: email
            address, first name and last name, Cookies and Usage Data; necessity
            for the performance of a contract to which you are a party.
          </li>
          <li className="mb-1">
            e. To gather analysis or valuable information so that we can improve
            our Service; type of Personal Data: email address, first name and
            last name, Cookies and Usage Data; legitimate interests of the Data
            Controller.
          </li>
          <li className="mb-1">
            f. To monitor the usage of our Service; type of Personal Data: email
            address, first name and last name, Cookies and Usage Data;
            legitimate interests of the Data Controller.
          </li>
          <li className="mb-1">
            g. To detect, prevent and address technical issues; type of Personal
            Data: email address, first name and last name, Cookies and Usage
            Data; legitimate interests of the Data Controller.
          </li>
          <li className="mb-1">
            h. To fulfill any other purpose for which you provide it; type of
            Personal Data: email address, first name and last name, Cookies and
            Usage Data; necessity for the performance of a contract to which you
            are a party.
          </li>
          <li className="mb-1">
            i. To carry out our obligations and enforce our rights arising from
            any contracts entered into between you and us, including for billing
            and collection; type of Personal Data: email address, first name and
            last name, Cookies and Usage Data; necessity for the performance of
            a contract to which you are a party.
          </li>
          <li className="mb-1">
            j. To provide you with notices about your account and/or
            subscription, including expiration and renewal notices,
            email-instructions, etc.; type of Personal Data: email address,
            first name and last name, Cookies and Usage Data; necessity for the
            performance of a contract to which you are a party.
          </li>
          <li className="mb-1">
            k. To provide you with news, special offers and general information
            about other goods, services and events which we offer that are
            similar to those that you have already purchased or enquired about
            unless you have opted not to receive such information; type of
            Personal Data: email address, first name and last name, Cookies and
            Usage Data; upon your consent.
          </li>
          <li className="mb-1">
            l. In any other way we may describe when you provide the
            information; type of Personal Data: email address, first name and
            last name, Cookies and Usage Data; necessity for the performance of
            a contract to which you are a party.
          </li>
        </ul>

        <p className="mb-2 font-bold">9. Service Providers</p>
        <p className="mb-2">
          We may employ third party companies and individuals to facilitate our
          Service (“Service Providers”), provide Service on our behalf, perform
          Service-related services or assist us in analyzing how our Service is
          used. These third parties have access to your Personal Data only to
          perform these tasks on our behalf and are obligated not to disclose or
          use it for any other purpose.
        </p>

        <p className="mb-2 font-bold">10. Links to Other Sites</p>
        <p className="mb-2">
          Our Service may contain links to other sites that are not operated by
          us. If you click a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit. We have no control over and assume no
          responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </p>

        <p className="mb-2 font-bold">11. Children's Privacy</p>
        <p className="mb-2">
          Our Service does not address anyone under the age of 18 (“Children”).
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Child has provided us with Personal Data, please
          contact us. If we become aware that we have collected Personal Data
          from children without verification of parental consent, we take steps
          to remove that information from our servers.
        </p>

        <p className="mb-2 font-bold">12. Changes to This Privacy Policy</p>
        <p className="mb-2">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating “effective date” at the top of this page, unless another type
          of notice is required by the applicable law. You are advised to review
          this Privacy Policy periodically for any changes. Changes to this
          Privacy Policy are effective when they are posted on this page. By
          continuing to use our Service or providing us with Personal Data after
          we have posted an updated Privacy Policy, or notified you if
          applicable, you consent to the revised Privacy Policy and practices
          described in it.
        </p>

        <p className="mb-2 font-bold">13. Contact Us</p>
        <p className="mb-2">
          If you have any questions about this Privacy Policy, please contact us
          at contact@chatfly.co.
        </p>

        <footer className="bg-gray-200 p-4 text-center">
          &copy; 2023 ChatFly. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default PrivacyPolicy;
