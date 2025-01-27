import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20 text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to providing top-quality bikes and accessories to
          enhance your riding experience. Our goal is to promote a healthy and
          eco-friendly lifestyle through cycling.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Card className="shadow-lg hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our mission is to make biking accessible and enjoyable for
              everyone by offering high-quality products and exceptional
              customer service.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle>Why Choose Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We provide a wide range of bikes, expert guidance, and outstanding
              after-sales service to ensure you have the best experience.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Quality, integrity, and customer satisfaction are the core values
              that drive our business forward.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <Card
              key={member}
              className="shadow-lg hover:shadow-2xl transition-all"
            >
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Senior Bike Specialist</p>
                <p className="text-gray-500 mt-2">
                  Passionate about bikes and helping customers find their
                  perfect ride.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
