import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Mentors = () => {
  const mentors = [
    {
      name: "Alex Chen",
      expertise: "Machine Learning",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      expertise: "Natural Language Processing",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Brown",
      expertise: "AI Ethics",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Our Mentors</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{mentor.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert in {mentor.expertise} with years of experience in the field.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mentors;