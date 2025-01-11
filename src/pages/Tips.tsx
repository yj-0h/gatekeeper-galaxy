import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tips = () => {
  const tips = [
    {
      title: "Be Specific",
      content: "The more specific your question, the better the AI can help you. Include relevant details and context."
    },
    {
      title: "One Topic at a Time",
      content: "Focus on one topic per question to get the most accurate and helpful responses."
    },
    {
      title: "Review and Iterate",
      content: "If the first response isn't exactly what you need, try rephrasing your question or adding more details."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Tips for Better Questions</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tip.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tips;