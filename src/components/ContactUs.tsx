import EmailIcon from '@/src/components/icons/Email';
import PhoneIcon from '@/src/components/icons/Phone';
import replaceSpaces from '@/src/utils/replaceSpaces';

interface EmailContactPoint {
  email: string;
  title: string;
  description: string;
}

interface PhoneContactPoint {
  phone: string;
  title: string;
  description: string;
}

type ContactPoint = EmailContactPoint | PhoneContactPoint;

const contactPoints: ContactPoint[] = [
  {
    email: 'tarasdida22@gmail.com',
    title: 'Тарас',
    description: '24/7',
  },
  {
    phone: '+380 68 69 156 65',
    title: 'Тарас',
    description: 'Дзвінки/Телеграм/Вайбер',
  },
  {
    phone: '+380 96 28 032 18',
    title: 'Дмитро',
    description: 'Телеграм/Вайбер',
  },
];

const ContactUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="contact-us">
      <div className="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3">
        <div>
          <p className="font-medium text-orange-400">Зв’яжіться з нами</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Будемо раді поспілкуватись з вами
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Наша дружня команда завжди готова відовісти на всі питання.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
          {contactPoints.map(contactPoint => (
            <div
              className="p-4 rounded-lg bg-orange-50 md:p-6 dark:bg-gray-800"
              key={replaceSpaces(
                `${contactPoint.title}-${contactPoint.description}`
              )}
            >
              <span className="inline-block p-3 text-orange-500 rounded-lg bg-orange-100/80 dark:bg-gray-700">
                {'email' in contactPoint ? (
                  <EmailIcon stroke="currentColor" className="w-5 h-5" />
                ) : (
                  <PhoneIcon stroke="currentColor" className="w-5 h-5" />
                )}
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                {contactPoint.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {contactPoint.description}
              </p>

              {'email' in contactPoint ? (
                <a
                  href={`mailto: ${contactPoint.email}`}
                  className="mt-2 text-sm text-orange-500"
                >
                  {contactPoint.email}
                </a>
              ) : (
                <a
                  href={`tel: ${contactPoint.phone}`}
                  className="mt-2 text-sm text-orange-500"
                >
                  {contactPoint.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
