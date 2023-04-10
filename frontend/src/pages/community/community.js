import Card from '../../components/ui/Card/Card.js';
import './community.css';
import Footer from '../../components/ui/Footer/Footer.js';

export default function CommunityPage() {
  const travelersComments = [
    {
      id: 1,
      title: 'Title-1',
      image:
        'https://s3-alpha-sig.figma.com/img/5554/4fc2/ff571f96a8789d4fa4c5d8fc78995057?Expires=1681689600&Signature=ENvTf9A4fAzs78gUHQuJdy6pEz96pwrHTV53hJ564NuYGKH388p6r7ryQlFIg9eHRenVxybXYRsqzsCTs5YAsEXTZxqHzErPhzfpr9oNP8xXRcVC7O7cC1efUQ1imefkdw1c8r8NjSqaYd-IvhWzUwZdW5BGnxQod1E-A1uB18TQzo7pBh13HiK8Dmi6gxYFOH7Brj1d-AimS-Zf1Z-H6MIM9zX4OCJ2VNbYBuRjxJ7WYqURoAS-zT8jFaIYjklmMg2Z39ARnfDyUKm7EUAbjhwWICrzKX5iv6IOh9zK6Qf8rBduKZedGbb~aWR10iFcTay42h~-zisQyEv2hlvqhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      location: 'Tel-Aviv',
      author: 'J.A',
    },
    {
      id: 2,
      title: 'Title-2',
      image:
        'https://s3-alpha-sig.figma.com/img/5554/4fc2/ff571f96a8789d4fa4c5d8fc78995057?Expires=1681689600&Signature=ENvTf9A4fAzs78gUHQuJdy6pEz96pwrHTV53hJ564NuYGKH388p6r7ryQlFIg9eHRenVxybXYRsqzsCTs5YAsEXTZxqHzErPhzfpr9oNP8xXRcVC7O7cC1efUQ1imefkdw1c8r8NjSqaYd-IvhWzUwZdW5BGnxQod1E-A1uB18TQzo7pBh13HiK8Dmi6gxYFOH7Brj1d-AimS-Zf1Z-H6MIM9zX4OCJ2VNbYBuRjxJ7WYqURoAS-zT8jFaIYjklmMg2Z39ARnfDyUKm7EUAbjhwWICrzKX5iv6IOh9zK6Qf8rBduKZedGbb~aWR10iFcTay42h~-zisQyEv2hlvqhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      location: 'London',
      author: 'A.G',
    },
    {
      id: 3,
      title: 'Title-3',
      image:
        'https://s3-alpha-sig.figma.com/img/5554/4fc2/ff571f96a8789d4fa4c5d8fc78995057?Expires=1681689600&Signature=ENvTf9A4fAzs78gUHQuJdy6pEz96pwrHTV53hJ564NuYGKH388p6r7ryQlFIg9eHRenVxybXYRsqzsCTs5YAsEXTZxqHzErPhzfpr9oNP8xXRcVC7O7cC1efUQ1imefkdw1c8r8NjSqaYd-IvhWzUwZdW5BGnxQod1E-A1uB18TQzo7pBh13HiK8Dmi6gxYFOH7Brj1d-AimS-Zf1Z-H6MIM9zX4OCJ2VNbYBuRjxJ7WYqURoAS-zT8jFaIYjklmMg2Z39ARnfDyUKm7EUAbjhwWICrzKX5iv6IOh9zK6Qf8rBduKZedGbb~aWR10iFcTay42h~-zisQyEv2hlvqhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      location: 'USA',
      author: 'F.T',
    },
    {
      id: 4,
      title: 'Title-4',
      image:
        'https://s3-alpha-sig.figma.com/img/5554/4fc2/ff571f96a8789d4fa4c5d8fc78995057?Expires=1681689600&Signature=ENvTf9A4fAzs78gUHQuJdy6pEz96pwrHTV53hJ564NuYGKH388p6r7ryQlFIg9eHRenVxybXYRsqzsCTs5YAsEXTZxqHzErPhzfpr9oNP8xXRcVC7O7cC1efUQ1imefkdw1c8r8NjSqaYd-IvhWzUwZdW5BGnxQod1E-A1uB18TQzo7pBh13HiK8Dmi6gxYFOH7Brj1d-AimS-Zf1Z-H6MIM9zX4OCJ2VNbYBuRjxJ7WYqURoAS-zT8jFaIYjklmMg2Z39ARnfDyUKm7EUAbjhwWICrzKX5iv6IOh9zK6Qf8rBduKZedGbb~aWR10iFcTay42h~-zisQyEv2hlvqhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      location: 'Singapur',
      author: 'T.P',
    },
  ];
  return (
    <div className='community-page'>
      <div className='header-img'>
        <img
          className='community-header-image'
          src='https://s3-alpha-sig.figma.com/img/5554/4fc2/ff571f96a8789d4fa4c5d8fc78995057?Expires=1681689600&Signature=ENvTf9A4fAzs78gUHQuJdy6pEz96pwrHTV53hJ564NuYGKH388p6r7ryQlFIg9eHRenVxybXYRsqzsCTs5YAsEXTZxqHzErPhzfpr9oNP8xXRcVC7O7cC1efUQ1imefkdw1c8r8NjSqaYd-IvhWzUwZdW5BGnxQod1E-A1uB18TQzo7pBh13HiK8Dmi6gxYFOH7Brj1d-AimS-Zf1Z-H6MIM9zX4OCJ2VNbYBuRjxJ7WYqURoAS-zT8jFaIYjklmMg2Z39ARnfDyUKm7EUAbjhwWICrzKX5iv6IOh9zK6Qf8rBduKZedGbb~aWR10iFcTay42h~-zisQyEv2hlvqhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='viewImg'
        />
        <div className='title-block'>
          <h1 className='community-title'>Travelers Community</h1>
        </div>
      </div>
      <div className='community-cards'>
        {travelersComments.map((cards) => (
          <Card key={cards.id} title={cards.title} image={cards.image} location={cards.location} author={cards.location} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
