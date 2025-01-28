import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Shared/Footer";
import Container from "@/components/Container";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <header className="w-full text-center py-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About BikeStore
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="font-semibold">BikeStore</span>, where
            passion meets purpose. Our mission is to bring the joy of biking to
            everyone while fostering sustainability, adventure, and a healthier
            lifestyle. Whether you are a professional cyclist, a weekend rider,
            or just starting your biking journey, BikeStore is your trusted
            partner.
          </p>
        </header>

        <main className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border p-5 border-gray-200 shadow-md bg-white">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                At BikeStore, we aim to make biking more than just a mode of
                transport—it’s a lifestyle. By offering top-notch bikes,
                accessories, and services, we inspire healthier living and
                promote a cleaner planet. Every product we offer reflects our
                commitment to quality and sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="border p-5 border-gray-200 shadow-md bg-white">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="list-disc pl-5 text-base text-gray-700 leading-relaxed space-y-2">
                <li>
                  Extensive range of premium bikes, gear, and accessories.
                </li>
                <li>Unmatched customer support and competitive pricing.</li>
                <li>
                  A passionate and experienced team dedicated to your
                  satisfaction.
                </li>
                <li>
                  Commitment to sustainability and eco-friendly practices.
                </li>
                <li>Customizable bikes tailored to your unique preferences.</li>
                <li>
                  Frequent workshops and events to enhance your biking
                  experience.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border p-5 border-gray-200 shadow-md bg-white">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Founded as a small family-run shop, BikeStore has grown into a
                trusted name in the biking community. Over the years, we have
                expanded our offerings, staying ahead of the latest trends in
                biking technology. Thousands of customers trust us for our
                dedication to quality, innovation, and customer happiness. We
                continue to evolve, ensuring every ride with BikeStore is
                memorable.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Today, BikeStore is more than a shop—it’s a community. Join us
                for group rides, local events, and workshops as we celebrate the
                joy of biking together.
              </p>
            </CardContent>
          </Card>

          <Card className="border p-5 border-gray-200 shadow-md bg-white">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <ul className="list-disc pl-5 text-base text-gray-700 leading-relaxed space-y-2">
                <li>
                  Innovation: Embracing the latest biking technologies and
                  trends.
                </li>
                <li>
                  Community: Building a supportive network of biking
                  enthusiasts.
                </li>
                <li>
                  Sustainability: Committing to eco-friendly practices in every
                  aspect.
                </li>
                <li>
                  Excellence: Ensuring top-quality products and services for our
                  customers.
                </li>
                <li>
                  Inclusion: Welcoming riders of all ages, backgrounds, and
                  skill levels.
                </li>
              </ul>
            </CardContent>
          </Card>
        </main>
        <div className="text-center my-10">
          <Link to="/all-product">
            <Button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow-md">
              Explore Our Products
            </Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
